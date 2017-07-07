const express = require("express")
const applicationsController = require("./controller/applicationsController")
const app = express()
const parser = require("body-parser")
app.use(parser.json({extended:true}))
app.use(parser.urlencoded({extended:false}))

app.use("/assets", express.static("public"));

app.listen(5000,()=>{
  console.log("App listening 5000 port ");
})
app.get('/applications',applicationsController.index)
app.get('/applications/:companyName',applicationsController.show)
app.post('/applications/', applicationsController.create)
app.put('/applications/:companyName',applicationsController.update)
app.delete('/applications/:companyName/delete',applicationsController.destroy)

app.get('/*',(req,res)=>{
  res.sendFile(__dirname + "/public/app-root.html")
})
