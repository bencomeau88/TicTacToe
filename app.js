//variables

var tictactoe = [ null, null, null, null, null, null, null, null, null ];
var score = {
  'X': [ null, null, null, null, null, null, null, null, null ],
  'O': [ null, null, null, null, null, null, null, null, null ]
};

var turn = 'X';

// <td data-index="0"></td>
// <td data-index="1"></td>

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
  var game_over = false;
  sets.forEach(function(set){
    var line = [
    score[turn][set[0]],
    score[turn][set[1]],
    score[turn][set[2]]
    ];
    console.log(line, condition);

    if (_.isEqual(line, condition)) {game_over=true;}
  });

  // _ is using underscore library to access underscore's functions to compare canidadate with conditions to win

  return game_over;
}



function changeturn(){
   if (turn === 'X') { turn = 'O'; }
   else { turn = 'X'; }
}



//on click the game alternates between "X" and "O"

var game = function(turn) {
    $('td').click(function() {
        if (turn % 2 === 0) {
            $(this).addClass('X');
        } else {
            $(this).addClass('O');
        }
        turn++;
    });
}


//code begin

$(document).ready(function() {
  $('.ticTable').on('click', '.cell', function(){
    var $cell = $(this);
    var index = $cell.data('index');
    $cell.addClass(turn);
    score[turn][index] = turn;

    if (checkwinners()){
      $('.winner').text(turn + " won!")
      $('.results').show();
    };
    changeturn();
  });
  });
    // winCheck();



//button functionality

    $('.learn').on('click', function() {
        $('.instructions').show();
    })
    $('.close').on('click', function() {
        $('.instructions').hide();
    });

//game reload

    $('.replay, .newGame').click(function() {
        location.reload(true);
    });
