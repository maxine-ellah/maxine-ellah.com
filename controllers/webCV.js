app.controller('webCV', function($scope) {
  $scope.header = {
    first: 'M',
    second: 'E'

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
    link: './MaxineEllahCV.pdf'
  },
  {
    text: 'Contact',
    link: 'mailto:maxine.ellah@gmail.com'
  }]

})
