// <<======< <| MULTIDIMENSIONAL ARRAYS|> >=====>>

const nameAndNumberList = [
  ["Esther", 71],
  ["Ruby", 56],
  ["Roy", 23],
];

// <<======< <| ACCESSING ELEMENTS IN MULTIDIMENSIONAL ARRAYS |> >=====>>
console.log(nameAndNumberList[1]); //output-> ['Ruby', 56]
console.log(nameAndNumberList[1][0]); //output-> Ruby
console.log((nameAndNumberList[1][5] = "compare"));
console.log(nameAndNumberList);
/** output->[
  [ 'Esther', 71 ],
  [ 'Ruby', 56, <3 empty items>, 'compare' ],
  [ 'Roy', 23 ]
] */

const ticTacToe = [
  ["X", null, null],
  [null, null, "O"],
  ["O", null, "X"],
];
console.log(ticTacToe[0]); //output-> ['X', null, null]

// <<======< <| flat() METHOD  |> >=====>>

const myMultiDArray = [
  [, 97, 11, 61, 20],
  [, 91, 20, 71, ["limited", "gun", ["Moldova", "Bangladesh", "Morocco"]]],
];
console.log(myMultiDArray.flat(1));
/** output-> [
  97,
  11,
  61,
  20,
  91,
  20,
  71,
  [ 'limited', 'gun', [ 'Moldova', 'Bangladesh', 'Morocco' ] ]
] */
console.log(myMultiDArray.flat(Infinity)); //output->  [97, 11, 61, 20, 91, 20, 71, 'limited', 'gun', 'Moldova', 'Bangladesh', 'Morocco']
