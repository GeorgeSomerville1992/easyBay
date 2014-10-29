'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [] )



.controller('postCodeController', function(){
  this.postcodes = postcodes
  console.log(this.postcodes)
  
})


.controller("submitController", function(){

  this.postcode = {}
  this.submitPostcode = function(inputPostcode){

    console.log(postcodes)
    postcodes.push(inputPostcode)
    console.log(postcodes)
    this.postcode = {}
  }

})

var postcodes = [
        {  postcodeDescription: "sdafasfdads"},
        {  postcodeDescription: "george postcode" }
      ]
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);