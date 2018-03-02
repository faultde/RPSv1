
		var words = ["rock","paper","scissors"];
		var computerChoice = 0;
		var playerChoice = 0;
		var win = 0;
		var lose = 0;
		var wins = $("#winNum");
		var loss = $("#lossNum");
		var tie = 0;


		//Streak Bonuses
		var music=1;
		var winStreak=0;
		var loseStreak=0;

		//Skin Rewards
		var RockWin = 0;
		var PaperWin = 0;
		var ScissorWin = 0;


		//Audio
	window.onload = function() {
    document.getElementById("bgm").play();
}

	function heartNeg(){
       var audio = document.getElementById("heartNeg");
       audio.play();
       
	}

	function heartGain(){
       var audio = document.getElementById("heartGain");
       audio.play();
       
	}

	function winSound(){
		var audio = document.getElementById("select");
		audio.play();
	}
	
	//Music Button

$("#musicButton").click(function() {
	if(music===1){
		music=0;
	document.getElementById("bgm").pause();
	$('#musicButton').css("background-image", "url(https://png.icons8.com/metro/1600/mute.png)");  
	
	}
	else {
		music++;
		document.getElementById("bgm").play();
		$('#musicButton').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/2000px-Speaker_Icon.svg.png)");

	}

	
});
	
		
		//Health Bar
		var hearts = 4;
		var heart1 = $("#heart1");
		var heart2 = $("#heart2");
		var heart3 = $("#heart3");
		var heart4 = $("#heart4");
		var heart5 = $("#heart5");

		var healthArr = [heart1,heart2,heart3,heart4];


		//Buttons
		const rock = $("#rock");
		const paper = $("#paper");
		const scissors = $("#scissors");
		const choices = $(".weaponChoice")

		//Page Display
		var playButton = $("#playbutton");
		var flavorText = $("#flavorText").html();


















//Round Comparison
function playRound(){

	//Rolls Compute Choice
	computerPlay();

	//Check for player selection
	if(playerChoice===0){
		$("#feedBack").text("No weapon selected!");
		

	}

	else



	//Check for Hearts
if (hearts > 0)
{
			//TIES//


	if(playerChoice === computerChoice){
		$("#feedBack").text("No Victor Today!");
		
				tie++;
		$("#ties").text(tie);


		if (tie % 5 == 0 && hearts<4) {
			heartGain();
			hearts++;
			healthArr[hearts].removeClass("hide");
			$("#heart1").removeClass("heart1Shake");
			console.log("With no victor in sight, you rest and replenish a heart.");
		}
	}

			//WINS//


	else if 
	((playerChoice === "rock" && computerChoice === "scissors")
	|| (playerChoice === "scissors" && computerChoice === "paper")
	|| (playerChoice === "paper" && computerChoice === "rock")) 
	{  
		
			//Check Win Type
		if (playerChoice === "rock") {
		RockWin++;
	}
		else if (playerChoice === "paper") {
		PaperWin++;


	}
		else{
		ScissorWin++;
	}



		$("#feedBack").text("YOU EMERGE VICTORIOUS!");
		
		win++;
		console.log("win");
		wins.text(win);
		winSound();


		//reset weapon streak
		resetWeapon();
		weaponSkins();


	}


	if (win % 5 === 0 && hearts<=1) {
			heartGain();
			hearts++;
			healthArr[hearts].removeClass("hide");
			$("#heart1").removeClass("heart1Shake");
		console.log("With 5 wins, you gain a heart back!");


		} //move ahead
	else if (win === 10 && hearts<=1) {
		hearts = 4;
		healthArr[3].removeClass("hide");
		healthArr[2].removeClass("hide");
		healthArr[1].removeClass("hide");
		healthArr[0].removeClass("hide");
		$("#heart1").removeClass("heart1Shake");
		console.log("With 10 wins your almost done, hearts replenished!");

	}
	




	

		//Losses//

	else if 
	((computerChoice === "rock" && playerChoice === "scissors")
	|| (computerChoice === "scissors" && playerChoice === "paper")
	|| (computerChoice === "paper" && playerChoice === "rock")) 
	{
		$("#feedBack").fadeIn('3000').text("A PAINFUL DEFEAT!");

				lose++;
				console.log("loss");
		loss.text(lose);
		weaponBreakFunc();


		//Heart Removal Function
		heartLoss();


	}


}

else {
	resetGame();
}


}

//Reset Button
function resetGame(){
	 rockBreak=0;
	 paperBreak=0;
	 scissorBreak=0;
	 weaponBreak=0;
	 resetImage();

	win = 0;
	wins.text(0);
	lose = 0;
	$("#lossNum").text(0);
	tie = 0;
	$("#ties").text(0);
	hearts = 4;
	healthArr[0].toggleClass("hide");
	healthArr[1].toggleClass("hide");
	healthArr[2].toggleClass("hide");
	healthArr[3].toggleClass("hide");
	$("#heart1").removeClass("heart1Shake");
	$("#tryAgain").text("Play!");
	$("#RPS").text("Rock, Paper, Scissors!");





}

//Make function that removes hearts
function heartLoss(){

	heartNeg(); //Sound FX
	hearts--;


	if (hearts === 3) {
			healthArr[3].addClass("hide");

			
			console.log("3 Hearts!");
		}
	if (hearts === 2) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
	
			console.log("2 hearts!");
		}
		else if (hearts === 1) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
			healthArr[1].addClass("hide");
			$("#heart1").addClass("heart1Shake");

			console.log("You're down to 1 Heart!");
		}
		else if (hearts === 0) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
			healthArr[1].addClass("hide");
			healthArr[0].addClass("hide");

			console.log("Oh no!, you are out of hearts!");
			$("#tryAgain").text("Try Again?");
			$("#RPS").text("Game Over!");
		}
		
}



//Computer Generated Selection 
/*** -DONE- DO NOT TOUCH ***/
	function computerPlay() {
			computerChoice = words[Math.floor(Math.random() * words.length)]
			return computerChoice;
		};






