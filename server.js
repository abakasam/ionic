const express = require("express")
const path = require("path")
const app = express()

//app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("."))

app.listen(3000, function() {
  console.log("App listening at port 3000")
})