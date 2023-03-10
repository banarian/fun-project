const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.listen(3000,function(){
  console.log("server is starting")
})

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req,res){
  console.log(req.body.firstName)
  console.log(req.body.lastName)
  console.log(req.body.email)
})