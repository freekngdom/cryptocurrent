const coins = [
    "btc",
    "eth",
    "bch",
    "Cardano",
    "neo",
    "xlm",
    "xmr",
    "eos",
    "miota",
    "dash",
    "trx",
    "ven",
    "qtum",
    "nano",
    "lsk",
    "omg",
    "icx",
    "zec",
    "bnb",
    // "strat",
    // "doge",
    // "wtc",
    // "zrx",
    // "kmd",
    // "ark",
    // "bat",
    // "kcs",
    // "gas",
    // "aion",
    // "lrc",
    // "elf",
    // "eng",
    // "req",
    // "enj",
    // "dbc",
    // "xby",
    // "ast",
    // "evx",
    // "viu",
    // "xnn",
];
const exchanges = [ "Binance", "GDAX", "Poloniex", "Bitrex", "Cryptopia", "Bitfinex", "Nanex" ];
const additionalData = [
    "All Time High",
    "Social Sentiment",
    "24h Volume %",
    "Market Cap %",
    "Coins Owned",
    "Current USD Value",
    "Current BTC Value",
    "Portfolio Percentage",
    "Local Wallet Quantity",
    "Others",
    "Purchase Price USD",
    "Amount Paid USD",
    "Purchase Price BTC",
    "Amount Paid BTC",
    "Fee",
    "Fee Coin",
    "Fee %",
    "Fee USD",
    "$Gain",
    "%Gain",
    "25%",
    "10%",
    "-5%",
    "Public Addresses",
    "ERC20 Contract Address",
    "Description / Notes",
];

const test = getSheetWithName( "test" );
const headerRow = 5;
const initialColumn = 1;

const cmcGlobal = {
    total_market_cap_usd: 458184162173.0,
    total_24h_volume_usd: 18199346745.0,
    bitcoin_percentage_of_market_cap: 41.7,
    active_currencies: 914,
    active_assets: 626,
    active_markets: 9096,
    last_updated: 1520303665,
};
const cmcData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "11604.8",
        "price_btc": "1.0",
        "24h_volume_usd": "6606630000.0",
        "market_cap_usd": "196144758978",
        "available_supply": "16902037.0",
        "total_supply": "16902037.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.39",
        "percent_change_24h": "1.4",
        "percent_change_7d": "12.21",
        "last_updated": "1520286266",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "856.854",
        "price_btc": "0.0740459",
        "24h_volume_usd": "1901220000.0",
        "market_cap_usd": "83976419664.0",
        "available_supply": "98005517.0",
        "total_supply": "98005517.0",
        "max_supply": null,
        "percent_change_1h": "-0.1",
        "percent_change_24h": "-0.97",
        "percent_change_7d": "-1.58",
        "last_updated": "1520286251",
    },
    {
        "id": "ripple",
        "name": "Ripple",
        "symbol": "XRP",
        "rank": "3",
        "price_usd": "0.970037",
        "price_btc": "0.00008383",
        "24h_volume_usd": "1925990000.0",
        "market_cap_usd": "37920644407.0",
        "available_supply": "39091956706.0",
        "total_supply": "99992520283.0",
        "max_supply": "100000000000",
        "percent_change_1h": "-0.8",
        "percent_change_24h": "0.13",
        "percent_change_7d": "1.46",
        "last_updated": "1520286241",
    },
    {
        "id": "bitcoin-cash",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "rank": "4",
        "price_usd": "1276.62",
        "price_btc": "0.11032",
        "24h_volume_usd": "350143000.0",
        "market_cap_usd": "21704630465.0",
        "available_supply": "17001638.0",
        "total_supply": "17001638.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.19",
        "percent_change_24h": "0.04",
        "percent_change_7d": "2.07",
        "last_updated": "1520286252",
    },
    {
        "id": "litecoin",
        "name": "Litecoin",
        "symbol": "LTC",
        "rank": "5",
        "price_usd": "211.269",
        "price_btc": "0.018257",
        "24h_volume_usd": "607566000.0",
        "market_cap_usd": "11724718897.0",
        "available_supply": "55496637.0",
        "total_supply": "55496637.0",
        "max_supply": "84000000.0",
        "percent_change_1h": "-0.24",
        "percent_change_24h": "-0.24",
        "percent_change_7d": "-4.79",
        "last_updated": "1520286241",
    },
    {
        "id": "cardano",
        "name": "Cardano",
        "symbol": "ADA",
        "rank": "6",
        "price_usd": "0.304348",
        "price_btc": "0.00002630",
        "24h_volume_usd": "209127000.0",
        "market_cap_usd": "7890852064.0",
        "available_supply": "25927070538.0",
        "total_supply": "31112483745.0",
        "max_supply": "45000000000.0",
        "percent_change_1h": "0.42",
        "percent_change_24h": "1.97",
        "percent_change_7d": "-10.03",
        "last_updated": "1520286253",
    },
    {
        "id": "neo",
        "name": "NEO",
        "symbol": "NEO",
        "rank": "7",
        "price_usd": "113.954",
        "price_btc": "0.00984741",
        "24h_volume_usd": "213863000.0",
        "market_cap_usd": "7407010000.0",
        "available_supply": "65000000.0",
        "total_supply": "100000000.0",
        "max_supply": "100000000.0",
        "percent_change_1h": "0.55",
        "percent_change_24h": "-4.4",
        "percent_change_7d": "-15.64",
        "last_updated": "1520286247",
    },
    {
        "id": "stellar",
        "name": "Stellar",
        "symbol": "XLM",
        "rank": "8",
        "price_usd": "0.36493",
        "price_btc": "0.00003154",
        "24h_volume_usd": "97190900.0",
        "market_cap_usd": "6739572688.0",
        "available_supply": "18468124539.0",
        "total_supply": "103728679130",
        "max_supply": null,
        "percent_change_1h": "-0.25",
        "percent_change_24h": "2.25",
        "percent_change_7d": "-0.08",
        "last_updated": "1520286243",
    },
    {
        "id": "monero",
        "name": "Monero",
        "symbol": "XMR",
        "rank": "9",
        "price_usd": "366.206",
        "price_btc": "0.031646",
        "24h_volume_usd": "131617000.0",
        "market_cap_usd": "5783028972.0",
        "available_supply": "15791737.0",
        "total_supply": "15791737.0",
        "max_supply": null,
        "percent_change_1h": "0.18",
        "percent_change_24h": "0.52",
        "percent_change_7d": "24.82",
        "last_updated": "1520286242",
    },
    {
        "id": "eos",
        "name": "EOS",
        "symbol": "EOS",
        "rank": "10",
        "price_usd": "8.10139",
        "price_btc": "0.00070009",
        "24h_volume_usd": "207105000.0",
        "market_cap_usd": "5748277594.0",
        "available_supply": "709542140.0",
        "total_supply": "900000000.0",
        "max_supply": "1000000000.0",
        "percent_change_1h": "-0.2",
        "percent_change_24h": "1.73",
        "percent_change_7d": "-1.43",
        "last_updated": "1520286251",
    },
    {
        "id": "iota",
        "name": "IOTA",
        "symbol": "MIOTA",
        "rank": "11",
        "price_usd": "1.8611",
        "price_btc": "0.00016083",
        "24h_volume_usd": "24584700.0",
        "market_cap_usd": "5172983810.0",
        "available_supply": "2779530283.0",
        "total_supply": "2779530283.0",
        "max_supply": "2779530283.0",
        "percent_change_1h": "0.11",
        "percent_change_24h": "-1.87",
        "percent_change_7d": "-0.3",
        "last_updated": "1520286250",
    },
    {
        "id": "dash",
        "name": "Dash",
        "symbol": "DASH",
        "rank": "12",
        "price_usd": "614.142",
        "price_btc": "0.0530717",
        "24h_volume_usd": "116742000.0",
        "market_cap_usd": "4869213551.0",
        "available_supply": "7928482.0",
        "total_supply": "7928482.0",
        "max_supply": "18900000.0",
        "percent_change_1h": "0.62",
        "percent_change_24h": "-0.53",
        "percent_change_7d": "-1.29",
        "last_updated": "1520286241",
    },
    {
        "id": "nem",
        "name": "NEM",
        "symbol": "XEM",
        "rank": "13",
        "price_usd": "0.355478",
        "price_btc": "0.00003072",
        "24h_volume_usd": "67739200.0",
        "market_cap_usd": "3199302000.0",
        "available_supply": "8999999999.0",
        "total_supply": "8999999999.0",
        "max_supply": null,
        "percent_change_1h": "-0.32",
        "percent_change_24h": "0.19",
        "percent_change_7d": "-11.53",
        "last_updated": "1520286244",
    },
    {
        "id": "tron",
        "name": "TRON",
        "symbol": "TRX",
        "rank": "14",
        "price_usd": "0.0470835",
        "price_btc": "0.00000407",
        "24h_volume_usd": "291804000.0",
        "market_cap_usd": "3095655020.0",
        "available_supply": "65748192475.0",
        "total_supply": "100000000000",
        "max_supply": null,
        "percent_change_1h": "-0.65",
        "percent_change_24h": "-1.7",
        "percent_change_7d": "12.73",
        "last_updated": "1520286253",
    },
    {
        "id": "ethereum-classic",
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "rank": "15",
        "price_usd": "27.3358",
        "price_btc": "0.00236225",
        "24h_volume_usd": "652406000.0",
        "market_cap_usd": "2741927178.0",
        "available_supply": "100305357.0",
        "total_supply": "100305357.0",
        "max_supply": null,
        "percent_change_1h": "1.94",
        "percent_change_24h": "-6.62",
        "percent_change_7d": "-24.7",
        "last_updated": "1520286247",
    },
    {
        "id": "vechain",
        "name": "VeChain",
        "symbol": "VEN",
        "rank": "16",
        "price_usd": "4.65602",
        "price_btc": "0.00040236",
        "24h_volume_usd": "41450900.0",
        "market_cap_usd": "2212096325.0",
        "available_supply": "475104558.0",
        "total_supply": "873378637.0",
        "max_supply": null,
        "percent_change_1h": "-0.66",
        "percent_change_24h": "1.08",
        "percent_change_7d": "-15.81",
        "last_updated": "1520286252",
    },
    {
        "id": "tether",
        "name": "Tether",
        "symbol": "USDT",
        "rank": "17",
        "price_usd": "0.997666",
        "price_btc": "0.00008621",
        "24h_volume_usd": "2264400000.0",
        "market_cap_usd": "2211966007.0",
        "available_supply": "2217140814.0",
        "total_supply": "2280109970.0",
        "max_supply": null,
        "percent_change_1h": "-0.05",
        "percent_change_24h": "-0.11",
        "percent_change_7d": "-0.25",
        "last_updated": "1520286244",
    },
    {
        "id": "nano",
        "name": "Nano",
        "symbol": "NANO",
        "rank": "18",
        "price_usd": "15.0108",
        "price_btc": "0.00129718",
        "24h_volume_usd": "55071100.0",
        "market_cap_usd": "2000163420.0",
        "available_supply": "133248289.0",
        "total_supply": "133248289.0",
        "max_supply": "133248290.0",
        "percent_change_1h": "0.77",
        "percent_change_24h": "-0.96",
        "percent_change_7d": "8.08",
        "last_updated": "1520286249",
    },
    {
        "id": "qtum",
        "name": "Qtum",
        "symbol": "QTUM",
        "rank": "19",
        "price_usd": "26.6425",
        "price_btc": "0.00230234",
        "24h_volume_usd": "106783000.0",
        "market_cap_usd": "1969610435.0",
        "available_supply": "73927388.0",
        "total_supply": "100427388.0",
        "max_supply": null,
        "percent_change_1h": "-0.38",
        "percent_change_24h": "2.79",
        "percent_change_7d": "-7.41",
        "last_updated": "1520286250",
    },
    {
        "id": "lisk",
        "name": "Lisk",
        "symbol": "LSK",
        "rank": "20",
        "price_usd": "18.6047",
        "price_btc": "0.00160774",
        "24h_volume_usd": "29186500.0",
        "market_cap_usd": "1907130772.0",
        "available_supply": "102508010.0",
        "total_supply": "118724656.0",
        "max_supply": null,
        "percent_change_1h": "-0.51",
        "percent_change_24h": "-1.0",
        "percent_change_7d": "-10.22",
        "last_updated": "1520286246",
    },
    {
        "id": "bitcoin-gold",
        "name": "Bitcoin Gold",
        "symbol": "BTG",
        "rank": "21",
        "price_usd": "111.286",
        "price_btc": "0.00961686",
        "24h_volume_usd": "21267400.0",
        "market_cap_usd": "1876550280.0",
        "available_supply": "16862411.0",
        "total_supply": "16962411.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.31",
        "percent_change_24h": "-0.44",
        "percent_change_7d": "-6.86",
        "last_updated": "1520286254",
    },
    {
        "id": "omisego",
        "name": "OmiseGO",
        "symbol": "OMG",
        "rank": "22",
        "price_usd": "17.3913",
        "price_btc": "0.00150289",
        "24h_volume_usd": "38984400.0",
        "market_cap_usd": "1774652630.0",
        "available_supply": "102042552.0",
        "total_supply": "140245398.0",
        "max_supply": null,
        "percent_change_1h": "-0.66",
        "percent_change_24h": "-4.87",
        "percent_change_7d": "-2.78",
        "last_updated": "1520286251",
    },
    {
        "id": "icon",
        "name": "ICON",
        "symbol": "ICX",
        "rank": "23",
        "price_usd": "3.60282",
        "price_btc": "0.00031134",
        "24h_volume_usd": "16705400.0",
        "market_cap_usd": "1390567336.0",
        "available_supply": "385966364.0",
        "total_supply": "400230000.0",
        "max_supply": null,
        "percent_change_1h": "1.51",
        "percent_change_24h": "-1.46",
        "percent_change_7d": "-10.25",
        "last_updated": "1520286254",
    },
    {
        "id": "zcash",
        "name": "Zcash",
        "symbol": "ZEC",
        "rank": "24",
        "price_usd": "396.317",
        "price_btc": "0.0342481",
        "24h_volume_usd": "57017000.0",
        "market_cap_usd": "1353682638.0",
        "available_supply": "3415656.0",
        "total_supply": "3415656.0",
        "max_supply": null,
        "percent_change_1h": "-0.47",
        "percent_change_24h": "-1.55",
        "percent_change_7d": "-2.58",
        "last_updated": "1520286248",
    },
    {
        "id": "binance-coin",
        "name": "Binance Coin",
        "symbol": "BNB",
        "rank": "25",
        "price_usd": "10.1873",
        "price_btc": "0.00088035",
        "24h_volume_usd": "39777900.0",
        "market_cap_usd": "1008685322.0",
        "available_supply": "99014000.0",
        "total_supply": "197192382.0",
        "max_supply": null,
        "percent_change_1h": "-0.08",
        "percent_change_24h": "-1.15",
        "percent_change_7d": "3.1",
        "last_updated": "1520286252",
    },
];

function getCmcData() {
    // TODO returned cached cmcData if fresh enough
}

const cmcCoinCache = [];

/**
 * Parse JSON and render the results in a string template.
 *
 * @param {"coin"} String
 *        coin id as listed on coinmarketcap api
 * @param {"key"} String
 *        string template for rendering results
 * @customfunction
 */
function coinValueFrom( coin, key ) {
    coin = coin
        .trim()
        .toLowerCase()
        .replace( / /g, "-" );
    const url = encodeURI( "https://api.coinmarketcap.com/v1/ticker/" );
    // const response = UrlFetchApp.fetch(url);
    // const obj = JSON.parse(response.getContentText());
    let obj = cmcData;
    if ( !Array.isArray( obj ) ) {
        obj = [ obj ];
    }
    const filteredObj = obj.filter( thisObj => thisObj.id === coin || thisObj.symbol.toLowerCase() === coin );
    if ( cmcCoinCache.indexOf( filteredObj ) === -1 ) {
        cmcCoinCache.push( filteredObj );
    }
    cmcCoinCache.push( filteredObj );
    return key.replace( /\s*(\w+)\s*/g, ( match, varName ) => filteredObj[ 0 ][ varName ] );
}

// todo get coins from sheet on each update
/**
 * Apply a single dimension array of data to a given column, starting at a given row
 *
 * @param {"sheet"} sheet
 *        spreadsheet
 * @param {"row"} number
 *        first row to set column of data to
 * @param {"column"} number
 *        column to set data to
 * @param {"data"} String[]
 *        flat array to be set
 * @customfunction
 */

function SETUP() {
    additionalData.splice( additionalData.indexOf( "Local Wallet Quantity" ) + 1, 0, ...exchanges );
    const headers = Object.keys( cmcData[ 0 ] ).concat( additionalData );
    test.getRange( headerRow, initialColumn, 1, headers.length ).setValues( [ headers ] );
    const coinRange = test.getRange( headerRow + 1, getColumnWithName( "id", test ), coins.length, 1 );
    test.getRange( 1, initialColumn ).setValue( [ "TOTAL:" ] );
    coinRange.setValues( coins.map( x => [ x ] ) );
    fakeData( test );
    UPDATE();
}
function UPDATE() {
    setCmcData( test );
    const valueColumns = [ "Current USD Value", "Current BTC Value" ];
    valueColumns.forEach( ( column ) => {
        const currentCurrency = column.split( " " )[ 1 ].toLowerCase();
        updateValues( currentCurrency, getColumnWithName( column, test ), test );
    } );
    updatePercents( test );
    const times = [ "1h", "24h", "7d" ];
    times.forEach( ( time ) => {
        globalPercentChange( time, test );
    } );
}

function setCmcData( sheet ) {
    for ( let i = 0; i < coins.length; i += 1 ) {
        const row = headerRow + 1 + i;
        // check [ "id", "name", "symbol" ] for coin ... initialColumn...initialColumn+2
        const coin = sheet
            .getRange( row, initialColumn, 1, initialColumn + 2 )
            .getValues()[ 0 ]
            .filter( String )[ 0 ];
        for ( let j = 0; j < Object.keys( cmcData[ 0 ] ).length; j += 1 ) {
            const template = Object.keys( cmcData[ 0 ] )[ j ];
            const column = initialColumn + j;
            sheet.getRange( row, column ).setValue( coinValueFrom( coin, template ) );
            if ( template.split( "_" )[ 0 ] === "percent" && template.split( "_" )[ 1 ] === "change" ) {
                sheet.getRange( row, column ).setValue( coinValueFrom( coin, template ) / 100 );
            } else if ( template === "24h_volume_usd" || template === "market_cap_usd" ) {
                // set Global Data
                sheet.getRange( 1, column ).setValue( [ `total_${ template }` ] );
                sheet.getRange( 2, column ).setValue( cmcGlobal[ `total_${ template }` ] );
            }
        }
    }
}

// todo: build objects for each coin, so that it can be set using coinValueFrom( coin, template ) from within setCmcData( sheet )

/**
 * sets value on given "Value" column
 * and updates "Coins Owned"
 *
 * @param {"currency"} String
 *        currency compatible with coinmarketcap api, "usd","btc","eur",...
 * @param {"column"} number
 *        column number to set values on
 * @param {"sheet"} sheet
 *        sheet to work on
 * @customfunction
 */
function updateValues( currency, column, sheet ) {
    const totalCell = sheet.getRange( headerRow - 1, column );
    const totalRange = sheet.getRange( headerRow + 1, column, coins.length, 1 );
    const ownedColumn = getColumnWithName( "Coins Owned", sheet );
    const localOwnedColumn = getColumnWithName( "Local Wallet Quantity", sheet );
    const numberOwnedColumns = exchanges.length + 2;
    const currentPriceColumn = getColumnWithName( `price_${ currency }`, sheet );
    // currentValue = currentPrice * AmountOwned;
    for ( let i = 0; i < coins.length; i += 1 ) {
        const currentPrice = sheet.getRange( headerRow + 1 + i, currentPriceColumn ).getValue();
        const owned = sheet
            .getRange( headerRow + 1 + i, localOwnedColumn, 1, numberOwnedColumns )
            .getValues()[ 0 ]
            .reduce( ( x, y ) => x + y );
        const currentValue = currentPrice * owned;
        sheet.getRange( headerRow + 1 + i, ownedColumn ).setValue( [ owned ] );
        sheet.getRange( headerRow + 1 + i, column ).setValue( [ currentValue ] );
    }
    totalCell.setValue( sum( totalRange.getValues() ) );
}
function updatePercents( sheet ) {
    const portfolioPercentageColumn = getColumnWithName( "Portfolio Percentage", sheet );
    const totalVolume = sheet.getRange( 2, getColumnWithName( "24h_volume_usd", sheet ) ).getValue();
    const totalMarketCap = sheet.getRange( 2, getColumnWithName( "market_cap_usd", sheet ) ).getValue();
    for ( let i = 0; i < coins.length; i += 1 ) {
        const currentCoinValue = sheet
            .getRange( headerRow + 1 + i, getColumnWithName( "Current USD Value", sheet ) )
            .getValue();
        const TotalValue = sheet.getRange( headerRow - 1, getColumnWithName( "Current USD Value", sheet ) ).getValue();
        const percent = currentCoinValue / TotalValue;
        sheet.getRange( headerRow + 1 + i, portfolioPercentageColumn ).setValue( [ percent ] );

        const coinVolume = sheet.getRange( headerRow + 1 + i, getColumnWithName( "24h_volume_usd", sheet ) ).getValue();
        const volumePercent = coinVolume / totalVolume;
        sheet.getRange( headerRow + 1 + i, getColumnWithName( "24h Volume %", sheet ) ).setValue( [ volumePercent ] );
        // Market Cap % = market_cap_usd / total_market_cap_usd
        const coinMarketCap = sheet.getRange( headerRow + 1 + i, getColumnWithName( "market_cap_usd", sheet ) ).getValue();
        const marketCapPercent = coinMarketCap / totalMarketCap;
        sheet.getRange( headerRow + 1 + i, getColumnWithName( "Market Cap %", sheet ) ).setValue( [ marketCapPercent ] );
    }
    sheet
        .getRange( headerRow - 1, portfolioPercentageColumn )
        .setValue( sum( sheet.getRange( headerRow + 1, portfolioPercentageColumn, coins.length, 1 ).getValues() ) );
    const priceColumn = getColumnWithName( "price_usd", sheet );
    const wallets = [ "Local Wallet Quantity", "Others" ].concat( exchanges );
    const priceRange = sheet
        .getRange( headerRow + 1, priceColumn, coins.length, 1 )
        .getValues()
        .reduce( ( x, y ) => x.concat( y ), [] );
    wallets.forEach( ( wallet ) => {
        const quantityColumn = getColumnWithName( wallet, sheet );
        const quantityRange = sheet
            .getRange( headerRow + 1, quantityColumn, coins.length, 1 )
            .getValues()
            .reduce( ( x, y ) => x.concat( y ), [] );
        if ( quantityRange.length > 0 ) {
            const valueCell = sheet.getRange( headerRow - 1, quantityColumn );
            const percentCell = sheet.getRange( headerRow - 2, quantityColumn );
            const balance = sumProduct( quantityRange, priceRange );
            const totalBalance = sheet
                .getRange( headerRow - 1, getColumnWithName( "Current USD Value", sheet ) )
                .getValue();
            valueCell.setValue( balance );
            percentCell.setValue( balance / totalBalance );
        }
    } );
}

function globalPercentChange( time, sheet ) {
    const currentColumn = getColumnWithName( `percent_change_${ time }`, sheet );
    const currentCell = sheet.getRange( headerRow - 2, currentColumn );
    const totalCell = sheet.getRange( headerRow - 1, currentColumn );
    const currentRange = sheet
        .getRange( headerRow + 1, currentColumn, coins.length, 1 )
        .getValues()
        .reduce( ( x, y ) => x.concat( y ), [] );
    const portfolioPercentageRange = sheet
        .getRange( headerRow + 1, getColumnWithName( "Portfolio Percentage", sheet ), coins.length, 1 )
        .getValues()
        .reduce( ( x, y ) => x.concat( y ), [] );
    const percent = sumProduct( currentRange, portfolioPercentageRange );
    const myTotal = sheet.getRange( headerRow - 1, getColumnWithName( "Current USD Value", sheet ) ).getValue();
    currentCell.setValue( [ percent ] );
    const total = percent * myTotal;
    totalCell.setValue( [ total ] );
    // todo: marketCap % change for 1h, 24h, 7d
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

function getColumnWithName( columnName, sheet ) {
    const headers = sheet.getRange( headerRow, initialColumn, 1, sheet.getLastColumn() - initialColumn ).getValues()[ 0 ];
    const index = headers.indexOf( columnName );
    return index === -1 ? null : index + initialColumn;
}

function sum( data ) {
    data = data.reduce( ( accumulator, currentValue ) => accumulator.concat( currentValue ), [] );
    let total = 0;
    for ( let i = 0; i < data.length; i += 1 ) {
        const element = data[ i ];
        total += element;
    }
    return total;
}

function sumProduct( array /* other arrays*/ ) {
    if ( !arguments.length ) return 0;
    if ( !Array.isArray( array ) ) return NaN;
    let dim = arguments.length,
        len = array.length,
        args = [ array ],
        sum = 0,
        err = 0,
        tot = 0;

    for ( let i = 1; i < dim; i += 1 ) {
        if ( !Array.isArray( arguments[ i ] ) || arguments[ i ].length !== len ) return NaN;
        args[ i ] = arguments[ i ];
    }

    // modified Kahan Sum
    for ( let i = 0; i < len; i += 1 ) {
        let prod = 1;
        for ( let j = 0; j < args.length; j += 1 ) prod *= args[ j ][ i ];
        sum += prod;
        err += sum - tot - prod;
        tot = sum;
    }
    return sum - err;
}

function fakeData( sheet ) {
    // get range for wallets
    const walletColumnInitial = getColumnWithName( "Local Wallet Quantity", sheet );
    const walletColumnFinal = getColumnWithName( "Others", sheet );
    const wallets = sheet.getRange( headerRow + 1, walletColumnInitial, coins.length, ( walletColumnFinal - walletColumnInitial ) + 1 );
    const walletValues = wallets.getValues();
    const flattenedWallet = walletValues.reduce( ( x, y ) => x.concat( y ), [] );
    const flattenedFiltered = flattenedWallet.filter( String );

    if ( flattenedFiltered.length < 1 ) {
        const randomValues = [];
        walletValues.forEach( ( array ) => {
            randomValues.push( array.map( z => Math.random() ) );
        } );
        wallets.setValues( randomValues );
    }
}
