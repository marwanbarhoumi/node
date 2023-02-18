var fs = require('fs')

fs.readFile('welcom.txt', 'utf8', function(error, data) {
    console.log(data)
})