"use strict";

function RUN() {
    var altCurrency = "EUR";
    var historySheetName = "History";
    var portfolioSheetName = "Portfolio";

    var portfolio = getSheetWithName(portfolioSheetName);
    var history = getSheetWithName(historySheetName);

    var coins = getMyCoins();

    var date = new Date();

    var currentHistory = [];

    update();
    // updates Portfolio! b/w "COIN ID" and "MY COINS"
    function update() {
        altCurrency = portfolio.getRange(3, 5).getValues()[0][0] || "EUR";
        for (var coinIdx in coins) {
            if (coins.hasOwnProperty(coinIdx)) {
                var coin = coins[coinIdx];
                var relevantData = getRelevantData(coin[0]);
                portfolio.getRange(4 + parseInt(coinIdx), 2, 1, relevantData.length).setValues([relevantData]);
            }
        }
        // Update timestamp
        portfolio.getRange(1, 2).setValue(["Updated: " + date]);

        recordHistory();
    }

    function recordHistory() {
        if (history == null) {
            history = SpreadsheetApp.getActiveSpreadsheet().insertSheet(historySheetName, 1);
        }

        setupHistoryHeader();
        portfolioToHistory();

        // copy from row2 to end of sheet
        currentHistory = history.getRange(2, 1, 1, coins.length + 2).getValues();
        currentHistory[0][0] = date;
        history.appendRow(currentHistory[0]);
    }

    function setupHistoryHeader() {
        var historyHeaders = ["DATE", "USD TOTAL"];
        for (var coinIdx in coins) {
            if (coins.hasOwnProperty(coinIdx)) {
                var symbl = coins[coinIdx][0].symbol;
                historyHeaders.push(symbl);
            }
        }
        if (history.getLastColumn() > 2) {
            currentHistory = history.getRange(4, 1, history.getLastRow(), history.getLastColumn()).getValues();
            // change currentHistory from being arrays of rows
            // to being arrays of columns
            var currCoin = [];
            for (var i = 0; i < currentHistory[0].length; i += 1) {
                var tmpCoinArray = [];
                for (var j = 0; j < currentHistory.length; j += 1) {
                    var currentHIJ = currentHistory[j][i];
                    tmpCoinArray.push(currentHIJ);
                }
                currCoin.push(tmpCoinArray);
            }
            // apply history to matching coins
            for (var curr in currCoin) {
                if (currCoin.hasOwnProperty(curr)) {
                    var currentCoinHistory = currCoin[curr];
                    var hHIndex = historyHeaders.indexOf(currentCoinHistory[0]);
                    if (hHIndex !== parseInt(curr) && hHIndex !== -1) {
                        // if user deletes coin from portfolio... if (hHIndex == -1)
                        var ccH = [];
                        for (var indx in currentCoinHistory) {
                            if (currentCoinHistory.hasOwnProperty(indx)) {
                                var element = currentCoinHistory[indx];
                                ccH.push([element]);
                            }
                        }
                        history.getRange(4, hHIndex + 1, currentCoinHistory.length, 1).setValues(ccH);
                    }
                }
            }
        }

        // Row 1
        history.getRange(1, 1, 1, parseInt(historyHeaders.length)).setValues([historyHeaders]);
        // Row 4
        history.getRange(4, 1, 1, parseInt(historyHeaders.length)).setValues([historyHeaders]);
        // Row 2
        // history.getRange( 2, 1 ).setValue( [ [ "*CURRENT*" ] ] );

        // insert chart
        if (portfolio.getCharts().length < 3) {
            // stacked area chart of each coins $
            newChart();
        }
    }

    function newChart() {
        var hLastRow = history.getLastRow();
        var hLastCol = history.getLastColumn();
        var data = history.getRange(4, 3, hLastRow, hLastCol);
        var time = history.getRange(5, 1, hLastRow, 1);

        var chart = history.newChart().setChartType(Charts.ChartType.AREA)
        // .setStacked()
        .addRange(data)
        // .addRange( time )
        .setPosition(portfolio.getLastRow() + 4, 2, 0, 0).build();

        portfolio.insertChart(chart);
    }

    // get USD from Portfolio!. set USD to History!
    function portfolioToHistory() {
        // trim() headers... Make Sure Your Headers Don't Have Any Whitespace
        var historyHeaders = history.getRange(1, 1, 1, history.getLastColumn()).getDisplayValues()[0];
        var portfolioHeaders = portfolio.getRange(3, 1, 1, portfolio.getLastColumn()).getDisplayValues()[0];
        var c = portfolioHeaders.indexOf("Rank") >= 0 ? portfolioHeaders.indexOf("Rank") : portfolioHeaders.indexOf("24h");
        var usdIdx = portfolioHeaders.indexOf("USD", c) + 1; // second "USD" = my total $

        // for each coin in historyHeader, get coin value from Portfolio, set to History
        for (var index = 0; index < historyHeaders.length; index += 1) {
            if (index < 2) {
                continue;
            }
            // get Coin Total Value from Portfolio!
            var portfolioCoinCurrentTotalValue = portfolio.getRange(2 + index, usdIdx).getA1Notation();
            // set Coin Total Value to History!
            var headerIdx = historyHeaders.indexOf(historyHeaders[index]) + 1;
            history.getRange(2, headerIdx).setFormula("=" + portfolioSheetName + "!" + portfolioCoinCurrentTotalValue);
        }

        // get TOTAL
        var usdTotal = portfolio.getRange(2, usdIdx).getA1Notation();
        // set total
        history.getRange(2, 2).setFormula("=" + portfolioSheetName + "!" + usdTotal);
        // set date
        history.getRange(2, 1).setValue(date);
    }

    function getSheetWithName(name) {
        var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
        for (var sheet in sheets) {
            if (sheets.hasOwnProperty(sheet)) {
                var spreadsheet = sheets[sheet];
                if (spreadsheet.getName() === name) {
                    return sheets[sheet];
                }
            }
        }
        return null;
    }

    // Returns an array of CoinMarketCapData
    function getCoinMarketCapPrices() {
        var url = "https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=" + altCurrency;
        var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
        var cmcCoins = JSON.parse(response.getContentText());
        return cmcCoins;
    }

    // symbol, btc, usd, change_1h, change_1d, change_7d, rank
    function getRelevantData(coin) {
        var symbol = coin.symbol;
        var btc = parseFloat(coin.price_btc);
        var usd = parseFloat(coin.price_usd);
        var altC = parseFloat(coin["price_" + altCurrency.toLowerCase()]);
        var change1h = parseFloat(coin.percent_change_1h) / 100.0;
        var change1d = parseFloat(coin.percent_change_24h) / 100.0;
        var change7d = parseFloat(coin.percent_change_7d) / 100.0;
        var rank = parseInt(coin.rank);
        return [symbol, btc, usd, altC, change1h, change1d, change7d, rank];
    }

    // Returns an array of CoinMarketCapData filtered to only contain user input coins
    function getMyCoins() {
        var cmcData = getCoinMarketCapPrices();
        var myCoins = [];

        // user input coins
        var setupCoins = portfolio.getRange(4, 1, portfolio.getLastRow()).getDisplayValues().filter(String);
        for (var coinIdx in setupCoins) {
            if (setupCoins.hasOwnProperty(coinIdx)) {
                (function () {
                    var coin = setupCoins[coinIdx][0].trim().toLowerCase().replace(/ /g, "-");
                    myCoins.push(cmcData.filter(function (thisCoin) {
                        return thisCoin.id === coin;
                    }))[0];
                })();
            }
        }
        return myCoins;
    }
}

function allTimeHigh(coin) {
    // TODO
    return null;
}