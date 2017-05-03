var app=angular.module("ourModule", []);

app.controller("ourController", function($scope) {

// Words
  $scope.words= [
  {text:"naptime"},
  {text:"Playground"},
  {text:"Snack"},
  {text:"MickeyMouse"},
  {text:"IceCream"},
  ];
$scope.moreWords= [];

$scope.addWord=function() {
  // console.log(item.text);
  var w= (Math.floor(Math.random()*$scope.words.length));
  console.log($scope.words[w]);
  $scope.moreWords.push($scope.words[w])
}


// Words with Decoration
$scope.words2= [
  {text:"naptime",
cls:"fancy"},
{text:"Playground",
cls:"fancy"},
{text:"Snack",
cls:"fancy"},
{text:"MickeyMouse",
cls:"fancy"},
{text:"IceCream",
cls:"fancy"},
];
$scope.moreWords2= [];

$scope.addWord2=function() {
  // console.log(item.text);
  var x= (Math.floor(Math.random()*$scope.words2.length));
  console.log($scope.words2[x]);
  $scope.moreWords2.push($scope.words2[x])
}


// Phrases
$scope.phrase= [
  {text:"A Wrinkle In Time"},
  {text:"The Apple Of My Eye"},
  {text:"My Big Red Barn"},
  {text:"Humpty Dumpty Sat on a Wall"},
  {text:"The Cow Jumped Over The Moon"},
];

$scope.morePhrases= [];

$scope.addPhrase=function() {
  // console.log(item.text);
  var y= (Math.floor(Math.random()*$scope.phrase.length));
  console.log($scope.phrase[y]);
  $scope.morePhrases.push($scope.phrase[y])
}

// Phrases with Decoration
$scope.phrase2= [
  {text:"A Wrinkle In Time",
  cls:"special"},
  {text:"The Apple Of My Eye",
  cls:"special"},
  {text:"My Big Red Barn",
  cls:"special"},
  {text:"Humpty Dumpty Sat on a Wall",
  cls:"special"},
  {text:"The Cow Jumped Over The Moon",
  cls:"special"}
];

$scope.morePhrases2= [];

$scope.addPhrase2=function() {
  // console.log(item.text);
  var z= (Math.floor(Math.random()*$scope.phrase2.length));
  console.log($scope.phrase2[z]);
  $scope.morePhrases2.push($scope.phrase2[z])
}

});
