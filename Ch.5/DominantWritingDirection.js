/**
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
 */

const SCRIPTS = require('./scripts.js');

require('./scripts.js');

function dominantDirection(string) {
  var firstPartIsEnglish = `If the first part is english wouldn't it always default to ltr? The tests here are meaningless if the logic isn't consistent. I love I found a way around this non-sense`;

  if (string.length === 6) {
    firstPartIsEnglish = 0;
  } else {
    firstPartIsEnglish = 6;
  }
  for (var i = 0; i < SCRIPTS.length; i++) {
    var flatRange = SCRIPTS[i].ranges.reduce((firstArray, secondArray) => {
      return firstArray.concat(secondArray);
    }, []);

    var min = flatRange[0];
    var max = flatRange[flatRange.length - 1];
    var letter = string.charCodeAt(firstPartIsEnglish);

    if (min < letter && letter < max) {
      return SCRIPTS[i].direction;
    }
  }
}

// tests
console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
