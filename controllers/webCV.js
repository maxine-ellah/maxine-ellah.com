app.controller('webCV', function($scope) {
  $scope.header = {
    firstName: 'Maxine',
    secondName: 'Ellah'
  };

  $scope.subHeader = {
    text: 'Developer',
    link: 'mailto:maxine.ellah@gmail.com'
  };

  $scope.links = [{
    text: 'Github',
    link: 'https://github.com/maxine-ellah'
  },
  {
    text: 'Art',
    link: 'https://maxine-ellah.github.io/art/'
  },
  {
    text: 'CV',
    link: '/images/MaxineEllahCV.pdf'
  },
]

})
