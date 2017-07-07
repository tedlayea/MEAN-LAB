const express = require("express")
const applicationsController = require("./controller/applicationsController")
const app = express()
const parser = require("body-parser")
app.use(parser.json({extended:true}))
app.use(parser.urlencoded({extended:false}))
app.listen(5000,()=>{
  console.log("App listening 5000 port ");
})
app.get('/',(req,res)=>{
  res.send("Welcome to Job Appliction Tracker")
})
app.get('/applications',applicationsController.index)
app.get('/applications/:companyName',applicationsController.show)
app.post('/applications/', applicationsController.create)
app.put('/applications/:companyName',applicationsController.update)
app.delete('/applications/:companyName/delete',applicationsController.destroy)
