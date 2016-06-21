var tictactoe = [ null, null, null, null, null, null, null, null, null ];
var score = {
  'X': [ 'X', null, null, null, null, null, null, null, null ],
  'O': [ null, null, null, null, null, null, null, null, null ]
};

var turn = 'X';

// <td data-index="0"></td>
// <td data-index="1"></td>

$('.board').on('click', '.cell', function(){
  var $cell = $(this);
  var index = $cell.data('index');
  score[turn][index] = turn;
  checkwinners();
  changeturn();
});

var sets = [
  // ROWS
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // COLUMNS
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // DIAGONALS
  [0, 4, 8],
  [2, 4, 6]
];

function checkwinners(){
  var candidate = score[turn];
  var condition = [turn, turn, turn];

  sets.forEach(function(set){
    if (_.isEqual([score[set[0]], score[set[1]], score[set[2]]], condition)) {return true;}
  });

  return false;
}

function changeturn(){
   if (turn === 'X') { turn = 'O'; }
   else { turn = 'X'; }
}