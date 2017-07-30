var alphanumRegex = /^[a-z0-9]+$/i;

exports.isAddress = (addr) => {
    return alphanumRegex.test(addr) && addr.length == 34 && addr.charAt(0) == 'A';
};

exports.percentChange = (before, after) => {
    return (after - before) / before * 100;
};