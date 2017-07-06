var Schema = require("./connection.js")

var Application = Schema.Application


Application.remove({},err=>{
  if (err){
    console.log(err);
  }
})


var generalAssembly = new Application ({companyName: "General Assembly", location: "DC", postion: "Web Devloper", appDate:"today", interviewDate:"monday", status:"pending"})
var excella = new Application ({companyName: "Excella", location: "DC", postion: "Web Devloper", appDate:"today", interviewDate:"monday", status:"pending"})
var chief = new Application ({companyName: "Chief", location: "DC", postion: "Web Devloper", appDate:"today", interviewDate:"monday", status:"pending"})
var n1776 = new Application ({companyName: "1776", location: "DC", postion: "Web Devloper", appDate:"today", interviewDate:"monday", status:"pending"})
var deloitte = new Application ({companyName: "Deloitte", location: "DC", postion: "Web Devloper", appDate:"today", interviewDate:"monday", status:"pending"})

var applications = [generalAssembly, excella, chief, n1776, deloitte]

// generalAssembly.save((err,application)=>{
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(application);
//   }
// })

for (var i=0;i<applications.length;i++){
  applications[i].save((err,application)=>{
    if (err){
      console.log(err);
    }
    else {
      console.log(application);
    }
  })
}
