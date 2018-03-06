function RUN() {
    let altCurrency = "EUR";
    const historySheetName = "History";
    const portfolioSheetName = "Portfolio";

    const portfolio = getSheetWithName( portfolioSheetName );
    let history = getSheetWithName( historySheetName );

    const coins = getMyCoins();

    const date = new Date();

    let currentHistory = [];

    update();
    // updates Portfolio! b/w "COIN ID" and "MY COINS"
    function update() {
        altCurrency = portfolio.getRange( 3, 5 ).getValues()[ 0 ][ 0 ] || "EUR";
        for ( const coinIdx in coins ) {
            if ( coins.hasOwnProperty( coinIdx ) ) {
                const coin = coins[ coinIdx ];
                const relevantData = getRelevantData( coin[ 0 ] );
                portfolio.getRange( 4 + parseInt( coinIdx ), 2, 1, relevantData.length ).setValues( [ relevantData ] );
            }
        }
        // Update timestamp
        portfolio.getRange( 1, 2 ).setValue( [ `Updated: ${ date }` ] );

        recordHistory();
    }

    function recordHistory() {
        if ( history == null ) {
            history = SpreadsheetApp.getActiveSpreadsheet().insertSheet( historySheetName, 1 );
        }

        setupHistoryHeader();
        portfolioToHistory();

        // copy from row2 to end of sheet
        currentHistory = history.getRange( 2, 1, 1, coins.length + 2 ).getValues();
        currentHistory[ 0 ][ 0 ] = date;
        history.appendRow( currentHistory[ 0 ] );
    }

    function setupHistoryHeader() {
        const historyHeaders = [ "DATE", "USD TOTAL" ];
        for ( const coinIdx in coins ) {
            if ( coins.hasOwnProperty( coinIdx ) ) {
                const symbl = coins[ coinIdx ][ 0 ].symbol;
                historyHeaders.push( symbl );
            }
        }
        if ( history.getLastColumn() > 2 ) {
            currentHistory = history.getRange( 4, 1, history.getLastRow(), history.getLastColumn() ).getValues();
            // change currentHistory from being arrays of rows
            // to being arrays of columns
            const currCoin = [];
            for ( let i = 0; i < currentHistory[ 0 ].length; i += 1 ) {
                const tmpCoinArray = [];
                for ( let j = 0; j < currentHistory.length; j += 1 ) {
                    const currentHIJ = currentHistory[ j ][ i ];
                    tmpCoinArray.push( currentHIJ );
                }
                currCoin.push( tmpCoinArray );
            }
            // apply history to matching coins
            for ( const curr in currCoin ) {
                if ( currCoin.hasOwnProperty( curr ) ) {
                    const currentCoinHistory = currCoin[ curr ];
                    const hHIndex = historyHeaders.indexOf( currentCoinHistory[ 0 ] );
                    if ( hHIndex !== parseInt( curr ) && hHIndex !== -1 ) {
                        // if user deletes coin from portfolio... if (hHIndex == -1)
                        const ccH = [];
                        for ( const indx in currentCoinHistory ) {
                            if ( currentCoinHistory.hasOwnProperty( indx ) ) {
                                const element = currentCoinHistory[ indx ];
                                ccH.push( [ element ] );
                            }
                        }
                        history.getRange( 4, hHIndex + 1, currentCoinHistory.length, 1 ).setValues( ccH );
                    }
                }
            }
        }

        // Row 1
        history.getRange( 1, 1, 1, parseInt( historyHeaders.length ) ).setValues( [ historyHeaders ] );
        // Row 4
        history.getRange( 4, 1, 1, parseInt( historyHeaders.length ) ).setValues( [ historyHeaders ] );
        // Row 2
        // history.getRange( 2, 1 ).setValue( [ [ "*CURRENT*" ] ] );

        // insert chart
        if ( portfolio.getCharts().length < 3 ) {
            // stacked area chart of each coins $
            newChart();
        }
    }

    function newChart() {
        const hLastRow = history.getLastRow();
        const hLastCol = history.getLastColumn();
        const data = history.getRange( 4, 3, hLastRow, hLastCol );
        const time = history.getRange( 5, 1, hLastRow, 1 );

        const chart = history
            .newChart()
            .setChartType( Charts.ChartType.AREA )
            // .setStacked()
            .addRange( data )
            // .addRange( time )
            .setPosition( portfolio.getLastRow() + 4, 2, 0, 0 )
            .build();

        portfolio.insertChart( chart );
    }

    // get USD from Portfolio!. set USD to History!
    function portfolioToHistory() {
        // trim() headers... Make Sure Your Headers Don't Have Any Whitespace
        const historyHeaders = history.getRange( 1, 1, 1, history.getLastColumn() ).getDisplayValues()[ 0 ];
        const portfolioHeaders = portfolio.getRange( 3, 1, 1, portfolio.getLastColumn() ).getDisplayValues()[ 0 ];
        const c = portfolioHeaders.indexOf( "Rank" ) >= 0 ? portfolioHeaders.indexOf( "Rank" ) : portfolioHeaders.indexOf( "24h" );
        const usdIdx = portfolioHeaders.indexOf( "USD", c ) + 1; // second "USD" = my total $

        // for each coin in historyHeader, get coin value from Portfolio, set to History
        for ( let index = 0; index < historyHeaders.length; index += 1 ) {
            if ( index < 2 ) {
                continue;
            }
            // get Coin Total Value from Portfolio!
            const portfolioCoinCurrentTotalValue = portfolio.getRange( 2 + index, usdIdx ).getA1Notation();
            // set Coin Total Value to History!
            const headerIdx = historyHeaders.indexOf( historyHeaders[ index ] ) + 1;
            history.getRange( 2, headerIdx ).setFormula( `=${ portfolioSheetName }!${ portfolioCoinCurrentTotalValue }` );
        }

        // get TOTAL
        const usdTotal = portfolio.getRange( 2, usdIdx ).getA1Notation();
        // set total
        history.getRange( 2, 2 ).setFormula( `=${ portfolioSheetName }!${ usdTotal }` );
        // set date
        history.getRange( 2, 1 ).setValue( date );
    }

    function getSheetWithName( name ) {
        const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
        for ( const sheet in sheets ) {
            if ( sheets.hasOwnProperty( sheet ) ) {
                const spreadsheet = sheets[ sheet ];
                if ( spreadsheet.getName() === name ) {
                    return sheets[ sheet ];
                }
            }
        }
        return null;
    }

    // Returns an array of CoinMarketCapData
    function getCoinMarketCapPrices() {
        const url = `https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=${ altCurrency }`;
        const response = UrlFetchApp.fetch( url, { muteHttpExceptions: true } );
        const cmcCoins = JSON.parse( response.getContentText() );
        return cmcCoins;
    }

    // symbol, btc, usd, change_1h, change_1d, change_7d, rank
    function getRelevantData( coin ) {
        const symbol = coin.symbol;
        const btc = parseFloat( coin.price_btc );
        const usd = parseFloat( coin.price_usd );
        const altC = parseFloat( coin[ `price_${ altCurrency.toLowerCase() }` ] );
        const change1h = parseFloat( coin.percent_change_1h ) / 100.0;
        const change1d = parseFloat( coin.percent_change_24h ) / 100.0;
        const change7d = parseFloat( coin.percent_change_7d ) / 100.0;
        const rank = parseInt( coin.rank );
        return [ symbol, btc, usd, altC, change1h, change1d, change7d, rank ];
    }

    // Returns an array of CoinMarketCapData filtered to only contain user input coins
    function getMyCoins() {
        const cmcData = getCoinMarketCapPrices();
        const myCoins = [];

        // user input coins
        const setupCoins = portfolio.getRange( 4, 1, portfolio.getLastRow() ).getDisplayValues().filter( String );
        for ( const coinIdx in setupCoins ) {
            if ( setupCoins.hasOwnProperty( coinIdx ) ) {
                const coin = setupCoins[ coinIdx ][ 0 ].trim().toLowerCase().replace( / /g, "-" );
                myCoins.push( cmcData.filter( thisCoin => thisCoin.id === coin ) )[ 0 ];
            }
        }
        return myCoins;
    }
}

function allTimeHigh( coin ) {
    // TODO
    return null;
}
