var app=angular.module("ourModule", []);

app.controller("ourController", function($scope) {

  $scope.words= [
    {text:"naptime",
  cls:"fancy1"},
  {text:"Playground",
  cls:"fancy2"},
  {text:"Snack",
  cls:"fancy3"},
  {text:"MickeyMouse",
  cls:"fancy4"},
  {text:"IceCream",
  cls:"fancy5"}
  ];

$scope.moreWords= [];

$scope.addWord=function() {
  // console.log(item.text);
  var x= (Math.floor(Math.random()*$scope.words.length));
  console.log($scope.words[x]);
  $scope.moreWords.push($scope.words[x])
}
});
