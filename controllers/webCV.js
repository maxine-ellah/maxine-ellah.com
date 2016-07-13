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
    link: '/images/MaxineEllahCV.pdf'
  },
  {
    text: 'Contact',
    link: 'mailto:maxine.ellah@gmail.com'
  }]

})
