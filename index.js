const express = require("express")
const app = express()
app.listen(5000,()=>{
  console.log("App listening 5000 port ");
})
app.get('/',(req,res)=>{
  res.send("Hello")
})
