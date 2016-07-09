app.directive('links', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'directives/links.html'
  };
});
