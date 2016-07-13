app.controller('webCV', function($scope) {
  $scope.header = {
    first: 'Maxine',
    second: 'Ellah'

  };

  $scope.subHeader = {
    text: 'Web Developer'
  };

  $scope.links = [{
    text: 'Github',
    link: 'https://github.com/maxine-ellah'
  },
  {
    text: 'Resume',
    link: 'https://docs.google.com/document/d/1lnLSrh6rwcikrYyQd7dF8p_pRk9t9CfQ36cHBDt6fSA/pub'
  },
  {
    text: 'Contact',
    link: 'mailto:maxine.ellah@gmail.com'
  }]

})
