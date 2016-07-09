app.directive('heading', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'directives/heading.html'
  };
});
