//Converter Class
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var _ = require('lodash');

converter.fromFile("test-contacts.csv",function(err,result){

  if (err){
    console.log(err);
  }

  else {
    console.log(module.exports(result));
  }

});

var objectArr = [];
var formatValues = [];
var arr = [];
var newArr = [];

module.exports = function typeChecker(data){


  data.forEach(function(values){
    var objKeys = Object.keys(values);
    for (var x in values) {
      for (var i = 0; i < objKeys.length; i++) {
        if (x === objKeys[i]){
          formatValues.push(x + " " + values[x])
        }
        objectArr.push(objKeys[i])
      }
    }
  })

  for (var i = 0; i < objectArr.length; i++) {
    var str = objectArr[i];
    if (arr.indexOf(str)==-1) {
      arr.push(str)
    }
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < formatValues.length; j++) {
      if (formatValues[j].includes(arr[i])) {
        newArr.push(formatValues[j])
      }
  }
  if ((_.uniq(newArr).length) > (0.2 * newArr.length) && newArr.toString().includes("/")) {
    var firstWord = newArr.toString().split(" ")
    console.log(firstWord[0] + " Column is Date/Time");
    newArr = []
  }
  else if ((_.uniq(newArr).length) > (0.2 * newArr.length)) {
    var firstWord = newArr.toString().split(" ")
    console.log(firstWord[0] +" Column is Text");
    newArr = []
  }
  else {
    var firstWord = newArr.toString().split(" ")
    console.log(firstWord[0] +" Column is Mutliple Choice \nChoices Are " + _.uniq(newArr));
    newArr = []
  }
}

}
