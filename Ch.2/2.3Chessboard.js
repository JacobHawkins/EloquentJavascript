/**Chessboard
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
 */

var size = 8;
var start = ' ';
var row = start;
var count = 1;

const whatSpaceNext = function (currentSpace, nextSpace) {
  if (currentSpace === ' ') {
    nextSpace = '#';
  } else {
    nextSpace = ' ';
  }

  return nextSpace;
};

while (count <= size) {
  for (var i = 1; i < size; i++) {
    var change;

    if (i === 1) {
      change = whatSpaceNext(start, change);
    }

    row += change;
    change = whatSpaceNext(change, change);
  }
  console.log(row);
  start = whatSpaceNext(change, start);
  row = start;
  count++;
}

//misunderstood the prompt. rookie mistake. But got a replication of the intended console.log

//solution down below;

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
