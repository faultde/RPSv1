	//Buttons **Weapon Choices** //


//ADD HOVER FLAVOR TEXT CHANGE

		//works!
	$("#rock1,#rock2,#paper1,#paper2,#scissors1,#scissors2").click(function (event){
		var target = event.target.id;
		
		if(target === "rock1" || target === "rock2"){
		$("#rock").css("background-image","url("+allSkins[target].image+")")
		$('#flavorText').text(allSkins[target].text);

		}

		else if (target==="paper1"|| target === "paper2") {
			$("#paper").css("background-image","url("+allSkins[target].image+")")
		$('#flavorText').text(allSkins[target].text);

		}

		else{
			$("#scissors").css("background-image","url("+allSkins[target].image+")")
		$('#flavorText').text(allSkins[target].text);

		}
	});



	//Skins Functions//
	var rockAlert=0;
	var papeAlert=0;
	var sciAlert=0;

function weaponSkins(){


	//Rock Skins


	if(RockWin === 10 && rockAlert===0){
		rockAlert++;
		$("#rock2").removeClass("hide");
		alert("You have unlocked a new rock!")
	
	}
	else if(RockWin ===20 && rockAlert===1){
		rockAlert++;
		$("#rock3").removeClass("hide");
		alert("You have unlocked a new rock!");
		
	}


	//Paper Skins
	
	else if(PaperWin === 10 && papeAlert === 0){
		papeAlert++;
		$("#paper2").removeClass("hide");
		alert("You have unlocked a new paper!")
	}
	else if(PaperWin === 20 && papeAlert === 1){
		papeAlert++;
		$("#paper3").removeClass("hide");
		alert("You have unlocked a new paper!");
	
	}


	//Scissor Skins

	else if(ScissorWin === 10 && sciAlert=== 0){
		sciAlert++;
		$("#scissors2").removeClass("hide");
		alert("You have unlocked a new scissors!")
	}
	else if(ScissorWin === 20 && sciAlert === 1){
		sciAlert++;
		$("#scissors3").removeClass("hide");
		alert("You have unlocked a new scissors!");
	}
	else{
		return
	}



}


		//Rock//

rock.click(function(event){
	playerChoice = event.target.id;
	if (rockBreak === 3) {
		brokenWeapon();
	}

	else{

// make an array to prompt descripton of item

$('#flavorText').text(rock1.text);



	return playerChoice;
}

});


		///Paper///

paper.click(function(event){
	playerChoice = event.target.id;
	if (paperBreak===3) {
		brokenWeapon();
	}
	else{
	
	$('#flavorText').text(paper1.text);
	return playerChoice;
}

});




		///Scissors///

scissors.click(function(event){
	playerChoice = event.target.id;
	if (scissorBreak === 3) {
		brokenWeapon();
	}

else{

	$('#flavorText').text(scissors1.text);
	return playerChoice;
}

});

		
		
var allSkins ={

		// Rock Skins //

 rock1: {
	type: "Rock",
	text:"An ancient tool,used for many purposes. A rock.",
	image: "https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt"
},

 rock2:  {
	type: "Pet Rock",
	text:"A rock with googly eyes",
	image: "https://s3.us-east-2.amazonaws.com/rpsv1/pet-rock.png"
},

		
		//Paper Skins//

 paper1: {
	type: "Paper",
	text: "A single sheet of paper, what will you do with it?",
	image: "https://drive.google.com/uc?export=view&id=16itAg-W_uQski7VUmWDyWZOIQo8IHZ6j"
},

 paper2: {
	type: "Toilet Paper",
	text:"A roll of single ply toilet paper.",
	image: "https://www.wpclipart.com/household/bathroom/toilet/toilet_paper_roll.png"
},
		
		//Scissor Skins //

 scissors1: {
	type: " Scissors",
	text: "Scissors, best used for cutting paper and your enemies!",
	image: "https://drive.google.com/uc?export=view&id=1zOXiERlG_bK0SGJmyf2j_S6_UWkWBMCQ"
},

 scissors2: {
	type: "Bolt Cutters",
	text:"I guess you could consider these scissors.",
	image: "http://clipart.coolclips.com/480/vectors/tf05050/CoolClips_indu0319.png"
}

}


//Weapon Break System

	var rockBreak=0;
	var paperBreak=0;
	var scissorBreak=0;
	var weaponBreak=0;

function weaponBreakFunc(){
	
	if(playerChoice === "rock"){
		
		rockBreak++;

		if(rockBreak===3){
			$("#rock").css("background-image","url(https://grist.files.wordpress.com/2013/03/wrong.png?w=330&h=224)");
			$('#flavorText').text("You can no longer use this weapon!");
			weaponBreak =1;
			playerChoice=0;
			
			

			return weaponBreak;
		}
		else{
			return rockBreak;
	}

	}

	else if(playerChoice ==="paper"){
		paperBreak++;
		

		if (paperBreak===3) {
			$("#paper").css("background-image","url(https://grist.files.wordpress.com/2013/03/wrong.png?w=330&h=224)");
			$('#flavorText').text("You can no longer use this weapon!");
			weaponBreak =1;
			playerChoice=0;
			

			return weaponBreak;

		}
		else{
			return paperBreak;
		}

	}

	else{
		scissorBreak++;
		
		if (scissorBreak===3) {
			$("#scissors").css("background-image","url(https://grist.files.wordpress.com/2013/03/wrong.png?w=330&h=224)");
			$('#flavorText').text("You can no longer use this weapon!");
		

			weaponBreak = 1;
			playerChoice=0;

			return weaponBreak;
		}
		else{
			return scissorBreak;

		}

	}
}


	 ///Broken Weapon//
	 function brokenWeapon(){
	 	if( weaponBreak === 1){
	 		$('#flavorText').text("You can no longer use this weapon!");
	 		playerChoice=0;


	 	}
	 	else{
	 		return
	 	}
	 }


	 //Reset Weapon Images//
function resetImage(){
	$("#rock").css("background-image","url(https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt)");
	$("#paper").css("background-image","url(https://drive.google.com/uc?export=view&id=16itAg-W_uQski7VUmWDyWZOIQo8IHZ6j)");
	$("#scissors").css("background-image","url(https://drive.google.com/uc?export=view&id=1zOXiERlG_bK0SGJmyf2j_S6_UWkWBMCQ)");

}

function resetWeapon(){
	if(weaponBreak === 0){
	 rockBreak=0;
	 paperBreak=0;
	 scissorBreak=0;
	}
	else if(weaponBreak===1 && rockBreak ===3){
	 paperBreak=0;
	 scissorBreak=0;

	}

	else if(weaponBreak===1 && paperBreak ===3){
	 rockBreak=0;
	 scissorBreak=0;

	}
	else if(weaponBreak===1 && scissorBreak ===3){
	 paperBreak=0;
	 rockBreak=0;

	}
	else{
		return;
	}
}


