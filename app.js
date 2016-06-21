//variables
var win = false;
var winner = {
 X: "X Wins!",
 O: "O Wins!",
 wins: [7,56,448,73,146,292,273,84]
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
    //shakes each icon as its placed,looks kind of ugly...maybe play a sound instead
        // $(this).effect('shake', 10);
    });
}

//effect to shake the board when a victory occurs and win===true

var winShake = function(win){
	while(win===true){
		$('.ticTable').effect('shake');
		alert(winner);
	}
	}

//code begin

$(document).ready(function() {
    game(turn);
    winShake();
    // winCheck();



//button functionality

    $('.learn').on('click', function() {
        $('.instructions').show();
    })
    $('.close').on('click', function() {
        $('.instructions').hide();
    });

//game reload

    $('.newGame').click(function() {
        location.reload(true);
    });

});


// var winCheck = function(){


// var tLeft = '.top td:nth-of-type(1)';
// var tMiddle = '.top td:nth-of-type(2)';
// var tRight = '.top td:nth-of-type(3)';

// var cLeft = '.center td:nth-of-type(1)';
// var cMiddle = '.center td:nth-of-type(2)';
// var cRight = '.center td:nth-of-type(3)';

// var bLeft = '.bottom td:nth-of-type(1)';
// var bMiddle = '.bottom td:nth-of-type(2)';
// var bRight = '.bottom td:nth-of-type(3)';

// var tLeft_O = $(tLeft).hasClass('O');
// var tMiddle_O = $(tMiddle).hasClass('O');
// var tRight_O = $(tRight).hasClass('O');

// var cLeft_O = $(cLeft).hasClass('O');
// var cMiddle_O = $(cMiddle).hasClass('O');
// var cRight_O = $(cRight).hasClass('O');

// var bLeft_O = $(bLeft).hasClass('O');
// var bMiddle_O = $(bMiddle).hasClass('O');
// var bRight_O = $(bRight).hasClass('O');

// var tLeft_X = $(tLeft).hasClass('X');
// var tMiddle_X = $(tMiddle).hasClass('X');
// var tRight_X = $(tRight).hasClass('X');

// var cLeft_X = $(cLeft).hasClass('X');
// var cMiddle_X = $(cMiddle).hasClass('X');
// var cRight_X = $(cRight).hasClass('X');

// var bLeft_X = $(bLeft).hasClass('X');
// var bMiddle_X = $(bMiddle).hasClass('X');
// var bRight_X = $(bRight).hasClass('X');

