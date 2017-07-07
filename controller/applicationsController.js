var Schema = require ("../db/connection.js")
var parser = require ("../index.js")
//Bring body parser
var Application = Schema.Application

var applicationsController ={
  index(req,res){
    Application.find({},(err,applications)=>{
      console.log(applications);
      res.send(applications)
    })
  },
  show(req,res){
    Application.findOne({companyName: req.params.companyName},(err,application)=>{
      console.log(application);
      res.send(application)
    })
  },
  create(req,res){
    Application.create({companyName: req.body.companyName}, {location: req.body.location},(err,application)=>{
      if (err){
        console.log(err);
        res.send(err)
      }
      else {
        console.log(application);
        res.send(application)
      }
    })
  },
  update(req,res){
    Application.findOneAndUpdate({companyName: req.body.companyName}, {location: req.body.location}, {new:true}, (err,application)=>{
      if (err){
        console.log(err);
        res.send(err)
      }
      else {
        console.log(application);
        res.send(application)
      }
    })
  },
  destroy(req,res){
    Application.findOneAndRemove(req,(err,docs)=>{
      if(err){
        console.log(err);
        res.send(err)
      }
      else {
        console.log(docs);
        res.send(docs)
      }
    })
  }

}

// applicationsController.index();
// applicationsController.show({companyName:"1796"})
// applicationsController.update({companyName:"1776"},{companyName:"1796"})
// applicationsController.create({companyName:"1876"},{location:"dc"})
// applicationsController.destroy({companyName:"1776"})


module.exports =applicationsController
