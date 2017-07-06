var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/applications');

var db =mongoose.connection;
db.on('error',err=>{
  console.log(err);
})
db.once('open',()=>{
  console.log("Databse connected!");
})

var ApplicationSchema = new Schema ({
  companyName:String,
  loction:String,
  postion:String,
  appDate:String,
  interviewDate:String,
  status:String
})

var Application = mongoose.model("Application", ApplicationSchema)



module.exports = {
  Application: Application
}
