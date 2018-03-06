const coins = [
    "btc",
    "eth",
    "bch",
    "ada",
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
    "strat",
    "doge",
    "wtc",
    "zrx",
    "kmd",
    "ark",
    "bat",
    "kcs",
    "gas",
    "aion",
    "lrc",
    "elf",
    "eng",
    "req",
    "enj",
    "dbc",
    "xby",
    "ast",
    "evx",
    "viu",
    "xnn",
];

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

const additionalData = [
    "All Time High",
    "Social Sentiment",
    "Market Cap USD",
    "Market Cap %",
    "My Coins",
    "Current BTC Value",
    "Current USD Value",
    "Percent",
    "Local Wallet Quantity",
    "Binance",
    "GDAX",
    "others",
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
    "Local%",
    "Local Wallet Value",
    "Exchange %",
    "Exchange Value",
    "Public Addresses",
    "ERC20 Contract Address",
    "Description / Notes",
];

function getCmcData() {
    // TODO returned cached cmcData if fresh enough
}

function setCmcData( sheet ) {
    const cmcRangeValues = sheet.getRange( headerRow + 1, initialColumn, coins.length, cmcData[ 0 ].length ).getValues();

    for ( const r in coins ) {
        if ( coins.hasOwnProperty( r ) ) {
            const row = r + header + 1;
            // check [ "id", "name", "symbol" ] for coin ... initialColumn...initialColumn+2
            const coin = sheet.getRange( row, initialColumn, 1, initialColumn + 2 ).filter( String )[ 0 ];
            for ( const c in cmcData[ 0 ] ) {
                if ( cmcData[ 0 ].hasOwnProperty( c ) ) {
                    const column = initialColumn + c;
                    const template = sheet.getCell( row, column );
                    sheet.getCell( row, column ).setValue( COINVALUEFROM( coin, template ) );
                }
            }
        }
    }
}

/**
 * Parse JSON and render the results in a string template.
 *
 * @param {"coinId"} coin
 *        coin id as listed on coinmarketcap api
 * @param {"templateText"} key
 *        string template for rendering results
 * @customfunction
 */
function COINVALUEFROM( coin, key ) {
    coin = coin
        .trim()
        .toLowerCase()
        .replace( / /g, "-" );
    // var url = encodeURI("https://api.coinmarketcap.com/v1/ticker/");
    // var response = UrlFetchApp.fetch(url);
    // var obj = JSON.parse(response.getContentText());
    let obj = cmcData;
    if ( !Array.isArray( obj ) ) {
        obj = [ obj ];
    }
    const filteredObj = obj.filter( thisObj => thisObj.id === coin || thisObj.symbol.toLowerCase() === coin );
    return key.replace( /\s*(\w+)\s*/g, ( match, varName ) => filteredObj[ 0 ][ varName ] );
}

function SETUP() {
    function setRow( data, sheet, row, column ) {
        const range = sheet.getRange( row, column, 1, data.length );
        range.setValues( [ data ] );
    }

    function setColumn( data, sheet, row, column ) {
        const colData = [];
        for ( const d in data ) {
            if ( data.hasOwnProperty( d ) ) {
                colData.push( [ data[ d ] ] );
            }
        }
        const range = sheet.getRange( row, column, data.length, 1 );
        range.setValues( colData );
    }

    function objectValues( object ) {
        const vals = [];
        for ( const key in object ) {
            if ( object.hasOwnProperty( key ) ) {
                const element = object[ key ];
                vals.push( element );
            }
        }
        return vals;
    }
    const headers = Object.keys( cmcData[ 0 ] ).concat( additionalData );
    const test = getSheetWithName( "test" );
    setRow( headers, test, headerRow, initialColumn );
    setRow( Object.keys( cmcGlobal ), test, 1, initialColumn );
    setRow( objectValues( cmcGlobal ), test, 2, initialColumn );
    setColumn( coins, test, headerRow + 1, getColumnWithName( "symbol", test ) );
}

function fillInCmcData( sheet ) {
    // todo: fill in remaining cells with =COINVALUEFROM((currentRow,ColumnWithName("symbol")), (headerRow, currentColumn));
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
