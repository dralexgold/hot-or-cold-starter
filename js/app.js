
$(document).ready(function(){
	
	
	
	$("#guessButton").click(function(){
		console.log(compNumber + " is the comp number"); // verification
		event.preventDefault(); // prevent refresh for testing
		console.log("clicked"); //verify
		console.log(userNumber + " is the user number"); //verify

		var userNumber = parseInt($("#userGuess").val());

		var compareNumber = Math.abs(compNumber - userNumber);
		console.log (compareNumber + " is the difference");

		if (userNumber <= 100 && userNumber >= 0) {
			
			console.log("valid number"); //verify

			if (0 < compareNumber && compareNumber < 10) {
				$("#feedback").text("HOT HOT HOT");
			}
			else if (10 <= compareNumber && compareNumber <= 25) {
				$("#feedback").text("HOT");
			}
			else if (25 < compareNumber && compareNumber <= 40) {
				$("#feedback").text("lukewarm");
			}
			else if (40 < compareNumber && compareNumber <= 70) {
				$("#feedback").text("cold");
			}
			else if (70 < compareNumber) {
				$("#feedback").text("ice cold");
			}
			else if (compareNumber == 0) {
				$("#feedback").text("YOU GOT IT!");
			}

			$("#guessList").append(userNumber + "  ");
			$("#count").html(function(i, val) {
				return +val+1
			}); 
		} else {
			alert("Please input a number between 0 and 100!");
		}
	});

	$(".new").click(function(){
		console.log("new game clicked");
		location.reload();
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


var compNumber = Math.floor((Math.random() * 100) + 1);


