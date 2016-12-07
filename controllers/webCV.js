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
    text: 'Art',
    link: 'https://maxine-ellah.github.io/Maxine-Art/'
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
