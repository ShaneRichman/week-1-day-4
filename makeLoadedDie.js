function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return function() {
    if (index === 10){
      index = 0;
    }
    return list[index++];
  };
}

var rollLoadedDie = makeLoadedDie();

for (var i = 0; i < 6; i++) {
  console.log(rollLoadedDie());
}