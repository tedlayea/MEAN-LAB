angular
  .module("app", [
    "ngResource",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Factory", [
    "$resource",
    FactoryFunc
  ])
  .controller ("Controller", [
  ControllerFunc
  ])
  .controller ("IndexController", [
    "Factory",
    IndexControllerFunc
  ])
  .controller ("ShowController", [
    "Factory",
    "$stateParams",
    ShowControllerFunc
  ])


function ControllerFunc(){
  console.log("Testing");
}
function IndexControllerFunc(Factory){
  console.log("Index Item");
  this.applications = Factory.query()
  this.newApplication = new Factory()
  this.create = function(){
    this.newApplication.$save().then(function(newApplication) {
      console.log(application);
      $state.go("show", {companyName: application.companyName})
    })
  }
}
function ShowControllerFunc(Factory, $stateParams){
  console.log("Show Item");
  this.application = Factory.get({companyName: $stateParams.companyName})
  // console.log(application);
  console.log($stateParams.companyName);
  this.update = function(){
    this.application.$update({companyName: $stateParams.companyName}).then(function(application) {
      console.log(application);
      $state.go("show", {companyName: application.companyName})
    })
  }
}

function Router($stateProvider){
  $stateProvider
  .state("home",{
    url: '/',
    templateUrl: '/assets/ng-views/home.html',
    controller: "Controller",
    controllerAs: "vm"
  })
  .state("index",{
    url: '/applications',
    templateUrl: '/assets/ng-views/index.html',
    controller: "IndexController",
    controllerAs: "vm"
  })
  .state("show",{
    url: '/applications/:companyName',
    templateUrl: '/assets/ng-views/show.html',
    controller: "ShowController",
    controllerAs: "vm"
  })
}

function FactoryFunc($resource){
  return $resource("/applications/:companyName", {}, {
    update: {method:"PUT"}
  })
}
