var app = angular.module('lab', []);

app.controller('labAdd', function($scope) {
  $scope.list = [{
    name: 'Eat pizza',
    count: 1
  }, {
    name: 'Walk the dog',
    count: 2
  }, {
    name: 'File taxes',
    count: 3
  }];
  $scope.addItem = function(entry) {
    // console.log(entry);

    $scope.list.push({
      name: entry.name,
      count: $scope.list.length + 1
    });
  };
  $scope.removeItem = function(e) {
    var recout = 1;
    $scope.list.splice($scope.list[e.count-1].count - 1,1)
    console.log($scope.list);
    $scope.list.forEach(function(a) {
      a.count = recout;
      recout++;
      console.log(a);
    });
  };
  $scope.clearList = function(e) {
    $scope.list = [];
  }
});
