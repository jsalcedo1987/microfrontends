(function(angular) {
  'use strict';
  
  var myApp = angular.module('myComponentApp', ['ngMap']);

  myApp.controller('MyController', function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  });

})(window.angular);