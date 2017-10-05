function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index: " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);