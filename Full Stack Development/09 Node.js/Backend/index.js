const myModule = (a, b) => {
    return a + b;
}

module.exports = {
    myModule
}

const dns = require('node:dns');

const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('www.google.com/', option, (err, address, family) => 
    console.log('address: %j family: IPv%s', address, family));

option.all = true;
dns.lookup('example.com', options, (err, addresses) => 
    console.log('addresses: %j', addresses));