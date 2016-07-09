app.directive('subHeading', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'directives/subHeading.html'
  };
});
