
$(document).ready(function(){
	
	compNumber = Math.floor((Math.random() * 100) + 1);
	console.log(compNumber); // verification

	var userNumber = $("#userGuess").val();
	console.log(userNumber + " is the user number");
	
	$("#guessButton").click(function(){
		var userNumber = $("#userGuess").val();
		event.preventDefault(); // prevent refresh for testing
		console.log("clicked"); //verify
		console.log(userNumber + " is the user number"); //verify
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


