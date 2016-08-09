app.controller('webCV', function($scope) {
  $scope.header = {
    firstName: 'Maxine',
    secondName: 'Ellah'

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
    link: '/images/MaxineEllahCVdnowrng.pdf'
  },
  {
    text: 'Contact',
    link: 'mailto:maxine.ellah@gmail.com'
  }]

})
