const express = require("express")
const app = express()
app.listen(5000,()=>{
  console.log("App listening 5000 port ");
})
app.get('/',(req,res)=>{
  res.send("Hello")
})
app.get('/:name',(req,res)=>{
  res.send(`URL input was:  ${req.params.name}`)
})





app.post('/',(req,res)=>{
  console.log("Create");
})
app.delete('/:name/delete',(req,res)=>{
console.log("Delete");
})

app.put('/:name',(req,res)=>{
  console.log("Edit");
})
