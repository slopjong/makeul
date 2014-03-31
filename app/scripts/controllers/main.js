'use strict';

angular.module('makeulApp')
  .controller('MainCtrl', function ($scope) {
    $scope.left = "";
    $scope.right = "";

    $scope.make = function() {

      var lines = [];

      angular.forEach(
        $scope.left.split('\n'),
        function(value) {
          lines.push("    <li>"+ value +"</li>");
        }
      );

      var ul = [
        "<ul>",
        lines.join('\n'),
        "</ul>"
      ];

      $scope.right = ul.join('\n');

      return false;
    }
  });
