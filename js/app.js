
$(document).ready(function(){
	
	
	
	$("#guessButton").click(function(){
		var compNumber = Math.floor((Math.random() * 100) + 1);
		console.log(compNumber + " is the comp number"); // verification	
		var userNumber = $("#userGuess").val();
		event.preventDefault(); // prevent refresh for testing
		console.log("clicked"); //verify
		console.log(userNumber + " is the user number"); //verify

		var compareNumber = Math.abs(compNumber - userNumber);
		console.log (compareNumber + " is the difference");

		if (0 < compareNumber && compareNumber < 10) {
			console.log("HOT HOT HOT");
		}
		else if (10 <= compareNumber && compareNumber <= 25) {
			console.log("HOT");
		}
		else if (25 < compareNumber && compareNumber <= 40) {
			console.log("lukewarm");
		}
		else if (40 < compareNumber && compareNumber <= 70) {
			console.log("cold");
		}
		else if (70 < compareNumber) {
			console.log("ice cold");
		}
		else if (compareNumber == 0) {
			console.log("YOU GOT IT!");
		}

	});




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


