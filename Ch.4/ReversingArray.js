/**
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
 */

function reverseArray(argArr) {
  var revArr = [];

  for (var i = argArr.length - 1; i >= 0; i--) {
    revArr.push(argArr[i]);
  }

  return revArr;
}

function reverseArrayInPlace(argArr) {
  var revArr = argArr.slice();
  var frontBack = 0;

  for (var i = revArr.length - 1; i >= 0; i--) {
    argArr[frontBack] = revArr[i];
    frontBack++;
  }
}

//tests
console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
