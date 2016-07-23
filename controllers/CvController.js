app.controller('CvController', function($scope) {
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
    link: '/images/MaxineEllahCV.pdf'
  },
  {
    text: 'Contact',
    link: 'mailto:maxine.ellah@gmail.com'
  }]

})
