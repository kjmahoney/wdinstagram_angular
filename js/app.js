"use strict";

// (function(){
//   angular.module("wdinstagram", [])
// })();

angular.module("wdinstagram", ["ui.router"])
.config(["$stateProvider", Router])
.controller("InstaIndexController", [
  InstaIndexControllerFunction
]);

function InstaIndexControllerFunction(){
  console.log("controllerWorking")
}

function Router($stateProvider){
  $stateProvider
  .state("instaIndex", {
    url: "/instagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "InstaIndexController",
    controllerAs: "vm"
  });

}
