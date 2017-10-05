var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb){
  var output = [];
  for (var singleWord of arr) {
    output.push(cb(singleWord));
  }
  return output;
}

var a = map(words, function(word) {
  return word.length;
});

var b = map(words, function(word) {

  return word.toUpperCase();
});

var c = map(words, function(word) {
  return word.split('').reverse().join('');
});