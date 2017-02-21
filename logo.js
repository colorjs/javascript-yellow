var fs = require('fs')
var path = require('path')

module.exports = fs.readFileSync(path.join(__dirname, 'logo.svg'), 'utf-8');
