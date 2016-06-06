var counter = 0;
var showX = function(){
	$('td').click(function(e){
	e.preventDefault();
	$(this).addClass('X');
	counter++;
	console.log(counter);
})
}
var showO = function(){
	$('td').click(function(e){
		e.preventDefault();
		$(this).addClass('O');
		counter++;
	console.log(counter);
	})
}
$(document).ready(function(){

var turns = function(){

$('td').toggle(function(){
	showX();
}, function(){
	showO();
})
}



$('.learn').on('click',function(){
	$('.instructions').show();
})
$('.close').on('click', function(){
	$('.instructions').hide();
});

});



	// var tLeft = '.top td:nth-of-type(1)'
	// var tMiddle = '.top td:nth-of-type(2)'
	// var tRight = '.top td:nth-of-type(3)'

	// var cLeft = '.center td:nth-of-type(1)'
	// var cMiddle = '.center td:nth-of-type(2)'
	// var cRight = '.center td:nth-of-type(3)'

	// var bLeft = '.bottom td:nth-of-type(1)'
	// var bMiddle = '.bottom td:nth-of-type(2)'
	// var bRight = '.bottom td:nth-of-type(3)'
	
	// $(tLeft).addClass('O');

	// console.log(event.target.className);






//a Capi hint: draw the table first in HTML 
//2 CSS styles one for Xs and Os