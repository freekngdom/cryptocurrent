function getAddressInfo( addresses ) {
    // https://api.ethplorer.io/getAddressInfo/0x1D115B5c849F534b2c44CFA5078Ca0DE455895Cc?apiKey=freekey
    const apiKey = "freekey";
    const apiServer = "https://api.ethplorer.io/getAddressInfo/";

    const addressInfo = [];
    let ethBalance = 0;

    addresses.forEach( ( address ) => {
        // Returns an array of CoinMarketCapData

        const url = `${ apiServer }${ address }?apiKey=${ apiKey }`;
        const response = UrlFetchApp.fetch( url, { muteHttpExceptions: true },
        );
        const tokens = JSON.parse( response.getContentText() );
        addressInfo.push( tokens );
        ethBalance += tokens.ETH.balance;
    } );

    addressInfo.forEach( ( token ) => {
        const thisToken = {
            symbol: token.tokens[ 0 ].tokenInfo.symbol,
            balance: token.tokens[ 0 ].balance,
        };

        if
    } );
}
