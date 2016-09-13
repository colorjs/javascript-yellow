var fs = require('fs')
var path = require('path')

module.exports = {
  color: '#f7df1e',
  logo: fs.readFileSync(path.join(__dirname, 'js.svg'), 'utf-8')
}
