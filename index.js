const fetch = require('node-fetch')

fetch('https://api.coinbase.com/v2/prices/spot?currency=GBP')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        console.log(body);
    });

