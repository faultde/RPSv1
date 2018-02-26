		//RPS-v1



		//WIP
		var words = ["rock","paper","scissors"];
		var computerChoice = 0;
		var playerChoice = 0;
		var win = 0;
		var lose = 0;
		var wins = $("#winNum");
		var loss = $("#lossNum");
		var tie = 0;


		//Streak Bonuses
		var winStreak=0;
		var loseStreak=0;
		var weaponStreak=0;
		var music=1;

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

		var healthArr = [heart1,heart2,heart3,heart4];


		//Buttons
		const rock = $("#rock");
		const paper = $("#paper");
		const scissors = $("#scissors");
		const choices = $(".weaponChoice")

		//Page Display
		var playButton = $("#playbutton");
		var flavorText = $("#flavorText").html();


		//Show playbutton on weapon selection
		choices.click(function(){
			playButton.removeClass('hide').addClass('show');
		});





	//Buttons **Weapon Choices** //



		//ROCK

rock.click(function(event){
	playerChoice = event.target.id;
	

// make an array to prompt descripton of item
$('#flavorText').text("An ancient tool, used for many purposes. A rock.");


	return playerChoice;

});
		//Paper

paper.click(function(event){
	playerChoice = event.target.id;

	$('#flavorText').text("A single sheet of paper, what will you do with it?");
	return playerChoice;

});
		//Scissors

scissors.click(function(event){
	playerChoice = event.target.id;

	$('#flavorText').text("Scissors, best used for cutting paper and your enemies!");
	return playerChoice;

});




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
	if(playerChoice === computerChoice){
		$("#feedBack").text("No Victor Today!");
		tie++;
		$("#ties").text(tie);
		if (tie == 5 && hearts<4) {
			heartGain();
			hearts++;
			healthArr[hearts].removeClass("hide");
			$("#heart1").removeClass("heartCrit");
			alert("With no victor in sight, you rest and replenish a heart.");
			console.log("With no victor in sight, you rest and replenish a heart.");
		}
	}
	
	else if 
	((playerChoice === "rock" && computerChoice === "scissors")
	|| (playerChoice === "scissors" && computerChoice === "paper")
	|| (playerChoice === "paper" && computerChoice === "rock")) 
	{ 
		$("#feedBack").text("YOU EMERGE VICTORIOUS!");
		win++;
		loseStreak=0;
		wins.text(win);
		winSound();

	if (win === 5 && hearts<=2) {
				heartGain();
				hearts++;
				healthArr[hearts].removeClass("hide");
				$("#heart1").removeClass("heartCrit");
		alert("With 5 wins, you gain a heart back!");
		console.log("With 5 wins, you gain a heart back!");


		}
	else if (win === 10 && hearts<=3) {
		hearts = 4;
		healthArr[3].removeClass("hide");
		healthArr[2].removeClass("hide");
		healthArr[1].removeClass("hide");
		healthArr[0].removeClass("hide");
		$("#heart1").removeClass("heartCrit");
		alert("With 10 wins your almost done,all hearts replenished!");
		console.log("With 10 wins your almost done, hearts replenished!");

	}
	else if( win  > 15)
	{
		alert("Give yourself a break!")
	}




	} 

	// HEARTS 
	else if 
	((computerChoice === "rock" && playerChoice === "scissors")
	|| (computerChoice === "scissors" && playerChoice === "paper")
	|| (computerChoice === "paper" && playerChoice === "rock")) 
	{
		$("#feedBack").fadeIn('3000').text("A PAINFUL DEFEAT!");
		lose++;
		loseStreak++;
		loss.text(lose);
		if (loseStreak === 3) {
			$('#flavorText').text("Your weapon breaks from repeated use!");
			paper.addClass("hide");




		}

		else


		//Heart Removal Function
		heartLoss();


	}


}

else {
	alert("You ready your " + playerChoice)
	resetGame();
}


}

//Reset Button
function resetGame(){
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
	$("#heart1").removeClass("heartCrit");
	$("#tryAgain").text("Charge Forward!");


}

//Make function that removes hearts
function heartLoss(){
	heartNeg();
	hearts--;


	if (hearts === 3) {
			healthArr[3].addClass("hide");

			alert("3 Hearts!")
			console.log("3 Hearts!");
		}
	if (hearts === 2) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
			alert("2 Hearts!")
			console.log("2 hearts!");
		}
		else if (hearts === 1) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
			healthArr[1].addClass("hide");
			$("#heart1").addClass("heartCrit");
			alert("You're down to 1 Heart!")
			console.log("You're down to 1 Heart!");
		}
		else if (hearts === 0) {
			healthArr[3].addClass("hide");
			healthArr[2].addClass("hide");
			healthArr[1].addClass("hide");
			healthArr[0].addClass("hide");

			alert("Oh no!, you are out of hearts!")
			console.log("Oh no!, you are out of hearts!");
			$("#tryAgain").text("Try Again?");
		}
		
}

//Make function that gains hearts

//Computer Generated Selection 
/*** -DONE- DO NOT TOUCH ***/
	function computerPlay() {
			computerChoice = words[Math.floor(Math.random() * words.length)]
			return computerChoice;
		};






