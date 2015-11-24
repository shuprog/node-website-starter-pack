var express = require('express')
var path = require('path')
var name = require('./package.json').name

var app = express()
var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function () {
  console.log(name, 'is running on port', port)
})
