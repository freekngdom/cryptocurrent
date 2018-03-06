const ethAddress = "0x1d115b5c849f534b2c44cfa5078ca0de455895cc";
const apiKey = "freekey";
const apiServer = "https://api.ethplorer.io/getAddressInfo/";
const url = `${ apiServer }${ address }?apiKey=${ apiKey }`;
const json = {
    address: "0x1d115b5c849f534b2c44cfa5078ca0de455895cc",
    ETH: {
        balance: 0.200000002,
        totalIn: 1.563075142,
        totalOut: 1.36307514,
    },
    countTxs: 11,
    tokens: [
        {
            tokenInfo: {
                address: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
                name: "DATAcoin",
                decimals: 18,
                symbol: "DATA",
                totalSupply: "987154514000000000000000000",
                owner: "0x1bb7804d12fa4f70ab63d0bbe8cb0b1992694338",
                lastUpdated: 1519850620,
                totalIn: 2.165e26,
                totalOut: 2.165e26,
                issuancesCount: 0,
                holdersCount: 434687,
                price: {
                    rate: "0.0928804",
                    diff: -2.99,
                    diff7d: -6.37,
                    ts: "1519851556",
                    marketCapUsd: "62894382.0",
                    availableSupply: "677154514.0",
                    volume24h: "901864.0",
                    currency: "USD",
                },
            },
            balance: 1.1343829946544e17,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
                name: "Basic Attention Token",
                decimals: "18",
                symbol: "BAT",
                totalSupply: "1500000000000000000000000000",
                owner: "0x",
                lastUpdated: 1502807553,
                issuancesCount: 0,
                holdersCount: 24206,
                price: {
                    rate: "0.351683",
                    diff: -3.76,
                    diff7d: -5.01,
                    ts: "1519850950",
                    marketCapUsd: "351683000.0",
                    availableSupply: "1000000000.0",
                    volume24h: "3201690.0",
                    currency: "USD",
                },
            },
            balance: 1.8e21,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5",
                name: "VIU",
                decimals: "18",
                symbol: "VIU",
                totalSupply: "1000000000000000000000000000",
                owner: "0x",
                lastUpdated: 1519851189,
                issuancesCount: 0,
                holdersCount: 955663,
                price: {
                    rate: "0.00935971",
                    diff: -9.65,
                    diff7d: -53.72,
                    ts: "1519851557",
                    marketCapUsd: "6234900.0",
                    availableSupply: "666142417.0",
                    volume24h: "864751.0",
                    currency: "USD",
                },
            },
            balance: 2.14317286e19,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0x52903256dd18d85c2dc4a6c999907c9793ea61e3",
                name: "INS Promo",
                decimals: 0,
                symbol: "INSP",
                totalSupply: "1801086",
                owner: "0x",
                lastUpdated: 1514203156,
                issuancesCount: 0,
                holdersCount: 855607,
                price: false,
            },
            balance: 777,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
                name: "EOS",
                decimals: 18,
                symbol: "EOS",
                totalSupply: "1000000000000000000000000000",
                owner: "0xd0a6e6c54dbc68db5db3a091b171a77407ff7ccf",
                lastUpdated: 1519851564,
                totalIn: 2.5964967036019e27,
                totalOut: 2.5964967036019e27,
                issuancesCount: 0,
                holdersCount: 275897,
                description: "https://eos.io/",
                price: {
                    rate: "8.6872",
                    diff: -0.11,
                    diff7d: -0.09,
                    ts: "1519850952",
                    marketCapUsd: "6066998591.0",
                    availableSupply: "698383667.0",
                    volume24h: "383632000.0",
                    currency: "USD",
                },
            },
            balance: 1.2813e20,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
                name: "Request Token",
                decimals: "18",
                symbol: "REQ",
                totalSupply: "999999999244592134526985951",
                owner: "0xdd76b55ee6dafe0c7c978bff69206d476a5b9ce7",
                lastUpdated: 1519851478,
                totalIn: 2.5096719524299e27,
                totalOut: 2.5096719524299e27,
                issuancesCount: 0,
                holdersCount: 32942,
                price: {
                    rate: "0.291006",
                    diff: -4.75,
                    diff7d: 7.05,
                    ts: "1519850956",
                    marketCapUsd: "186669514.0",
                    availableSupply: "641462769.0",
                    volume24h: "3238340.0",
                    currency: "USD",
                },
            },
            balance: 2.9901e21,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0xd850942ef8811f2a866692a623011bde52a462c1",
                name: "VeChain Token",
                decimals: "18",
                symbol: "VEN",
                totalSupply: "1000000000000000000000000000",
                owner: "0x0000000000000000000000000000000000000000",
                lastUpdated: 1503349448,
                issuancesCount: 0,
                holdersCount: 9562,
                price: {
                    rate: "4.83394",
                    diff: -7.02,
                    diff7d: -17.69,
                    ts: "1519851553",
                    marketCapUsd: "2294937085.0",
                    availableSupply: "474754979.0",
                    volume24h: "71802900.0",
                    currency: "USD",
                },
            },
            balance: 4.34e20,
            totalIn: 0,
            totalOut: 0,
        },
        {
            tokenInfo: {
                address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
                name: "Enjin Coin",
                decimals: "18",
                symbol: "ENJ",
                totalSupply: "1000000000000000000000000000",
                owner: "0xde63aef60307655405835da74ba02ce4db1a42fb",
                lastUpdated: 1519851527,
                totalIn: 7.2920093243897e26,
                totalOut: 7.2920093243897e26,
                issuancesCount: 0,
                holdersCount: 22537,
                price: {
                    rate: "0.186877",
                    diff: -0.92,
                    diff7d: -0.42,
                    ts: "1519851556",
                    marketCapUsd: "141314992.0",
                    availableSupply: "756192535.0",
                    volume24h: "3658690.0",
                    currency: "USD",
                },
            },
            balance: 2.42e21,
            totalIn: 0,
            totalOut: 0,
        },
    ],
};

function ethBalance( ethAddresses ) {
    if ( !Array.isArray( ethAddresses ) ) {
        ethAddresses = [ ethAddresses ];
    }
    const addresses = new Set( ethAddresses );
    const tokens = [];
    let ethBalance = 0;
    addresses.forEach( ( address ) => {
        // url = `${ apiServer }${ address }?apiKey=${ apiKey }`;
        // const response = UrlFetchApp.fetch( url, { muteHttpExceptions: true } );
        // let json = JSON.parse( response.getContentText() );

        ethBalance += parseFloat( json.ETH.balance );
        tokens.push( json.tokens.forEach( ( token ) => {
            const tokenBalance = token.balance.toFixed() / `1.0e${ token.tokenInfo.decimals }`.toFixed();
            return { name: token.tokenInfo.name, symbol: token.tokenInfo.symbol, balance: tokenBalance };
        } ) );
    } );
    return { ethBalance, tokens };
}
