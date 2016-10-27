"use strict";

// (function(){
//   angular.module("wdinstagram", [])
// })();

angular.module("wdinstagram", ["ui.router", "ngResource"])
.config(["$stateProvider", Router])
.controller("GramIndexController", [
  "GramFactory",
  GramIndexControllerFunction
])
.controller("GramShowController", [
  "$stateParams",
  "GramFactory",
  GramShowControllerFunction
])
.controller( "GramNewController", [
      "GramFactory",
      "$state",
      GramNewControllerFunction
    ])
.controller( "GramEditController", [
      "GramFactory",
      "$stateParams",
      GramEditControllerFunction
    ])

.factory("GramFactory", [
      "$resource",
      GramFactoryFunction
    ]);

function GramIndexControllerFunction(GramFactory){
  this.grams = GramFactory.query();
  console.log(this.grams)
}

function GramShowControllerFunction($stateParams, GramFactory){
  console.log($stateParams.id)
  this.gram = GramFactory.get({id: $stateParams.id});
}

function GramNewControllerFunction(GramFactory, $state){
      this.gram = new GramFactory();
      this.create = function(){
        this.gram.$save().then(function(gram){
        $state.go("gramShow", {id: gram.id})
      })
      }
    }
function GramEditControllerFunction( GramFactory, $stateParams ,$state ){
      this.gram = GramFactory.get({id: $stateParams.id});
      this.update = function(){
        this.gram.$update({id: $stateParams.id}).then(function(gram){
        $state.go("gramShow", {id: gram.id})
      })
        }

      this.destroy = function(){
      this.gram.$delete({id: $stateParams.id});
    }
  }

function GramFactoryFunction($resource){
  return $resource("http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    });
 }


function Router($stateProvider){
  $stateProvider
  .state("gramIndex", {
    url: "/instagrams",
    templateUrl: "js/ng-views/index.html",
    controller: "GramIndexController",
    controllerAs: "vm"
  })
  .state("gramNew", {
   url: "/grams/new",
   templateUrl: "js/ng-views/new.html",
   controller: "GramNewController",
   controllerAs: "vm"
 })
  .state("gramShow",{
    url:"/instagrams/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GramShowController",
    controllerAs: "vm"
  })
  .state("gramEdit",{
    url:"/instagrams/:id/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "GramEditController",
    controllerAs: "vm"
  });;

}
