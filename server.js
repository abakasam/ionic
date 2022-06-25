const express = require("express")
const path = require("path")
const app = express()

//app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("."))

var port = process.env.PORT || 5000
app.listen(port, function() {
  console.log(port)
})