

                //**********************************Functions://**********************************

//The below function generates a random number between 19 and 120, and then write the random number into a div with id "randomNumber". 
function randomFrom19To120() {

	randomNumber = (Math.floor(Math.random() * 100)) + 21;

	if (randomNumber < 19) {
		randomFrom19To120();
	} //end if
	else { 
		$("#randomNumber").html(randomNumber);
	}
} // end of randomFrom19To120()



// The below function generates a random number between 1 and 12.
// The function stores 4 different random numbers in an array.
// Math.floor(Math.random() * (max - min + 1)) + min;
function randomFrom1To12() {

	 for(var i = 0; i < 4; i++){

		arrayOfFourNumber[i] = Math.floor(Math.random() * 12) + 1;
	 }
   
} //end of randomFrom1To12()



// The below function does:
//-1- take one argument which in this case a random number from the array. 
//-2- add the argumnet to score and then write score into a div with id "score".
//-3- compare score to randomNumber, increase wins by 1 if score equale to randomNamber.
//-4- If the number greater than randomNumber the function increases losses by 1.
function totalScore(t) {
	score = score + t;
	$("#score").html(score);

	if (score === randomNumber) {
		wins++;
		$("#winsLossesAlert").html("You win!!!");
		$("#wins").html("Wins " + wins);
		$("#score").html(score = 0);
		randomFrom19To120();
		randomFrom1To12();	
	}

	else if (score > randomNumber) {
		losses++;
		$("#winsLossesAlert").html("You lose!!!");
		$("#losses").html("Losses " + losses);
		$("#score").html(score = 0);
		randomFrom19To120();
		randomFrom1To12();
	}
}// end of totalScore function.


// Globale variables:
var randomNumber = 0;
var arrayOfFourNumber = [0];
var score = 0;
var wins = 0;
var losses = 0;


//  This code will run as soon as the page loads.
window.onload = function() {

	randomFrom19To120();
	randomFrom1To12();
	
	$("#randomNumber-1").on("click", function() {

		totalScore(arrayOfFourNumber[0]);
	});


     $("#randomNumber-2").on("click", function() {

     	   totalScore(arrayOfFourNumber[1]);
     
	});

     $("#randomNumber-3").on("click", function() {
         
         totalScore(arrayOfFourNumber[2]);

	});

     $("#randomNumber-4").on("click", function() {
         
         totalScore(arrayOfFourNumber[3]);

	});

}; // end of window.onload function



	