var Schema = require ("../db/connection.js")

var Application = Schema.Application

var applicationsController ={
  index(){
    Application.find({},(err,applications)=>{
      console.log(applications);
    })
  },
  show(req){
    Application.findOne({companyName: req.companyName},(err,application)=>{
      console.log(application);
    })
  },
  update(req, update){
    Application.findOneAndUpdate({companyName: req.companyName}, {location: req.location}, {new:true}, (err,application)=>{
      if (err){
        console.log(err);
      }
      else {
        console.log(application);
      }
    })
  },
  destroy(req){
    Application.findOneAndRemove(req,(err,docs)=>{
      if(err){
        console.log(err);
      }
      else {
        console.log(docs);
      }
    })
  }

}

// applicationsController.index();
// applicationsController.show({companyName:"1796"})
// applicationsController.update({companyName:"1776"},{companyName:"1796"})
// applicationsController.destroy({companyName:"1776"})
