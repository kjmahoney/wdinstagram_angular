"use strict";

// (function(){
//   angular.module("wdinstagram", [])
// })();

angular.module("wdinstagram", ["ui.router"])
.config(["$stateProvider", Router])
.controller("GramIndexController", [
  GramIndexControllerFunction
])
.controller("GramShowController", [
  "$stateParams",
  GramShowControllerFunction
])

function GramIndexControllerFunction(){
  console.log("indexcontrollerWorking")
  this.grams = grams;
}

function GramShowControllerFunction($stateParams){
  console.log("showcontrollerWorking")

  this.gram = grams[$stateParams.id]
  console.log($stateParams)
  console.log(this.gram)
}


function Router($stateProvider){
  $stateProvider
  .state("gramIndex", {
    url: "/instagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "GramIndexController",
    controllerAs: "vm"
  })
  .state("gramShow",{
    url:"/instagrams/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GramShowController",
    controllerAs: "vm"
  });

}

var grams = [
  {
    photo_url: "#",
    author: "Ludacris",
    body: "Roll out!"

  },
  {
    photo_url: "#",
    author: "DMX",
    body: "Roll out!"
  }
]
