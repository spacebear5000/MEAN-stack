var app = angular.module('raddit', []);

app.controller('MainController',[
'$scope',
function($scope){
  $scope.test = "HIYO";
  $scope.posts = [
    {title: 'post 1', upvotes: 4}, 
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 18},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 5}
  ];
  $scope.addPost = function(){
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };
}]);
