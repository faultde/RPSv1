	//Buttons **Weapon Choices** //


	$("#rock2").click(function (event){
		$("#rock").css("background-image","url(https://s3.us-east-2.amazonaws.com/rpsv1/pet-rock.png)")
		$('#flavorText').text(rock2.text);



	});

	$("#rock1").click(function (event){
		$("#rock").css("background-image","url(https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt)")
		$('#flavorText').text(rock1.text);


	});



	//Skins Function//

function weaponSkins(){
	if(win===10){
		$("#rock2").removeClass("hide");
		alert("You have unlocked a new rock!")
	}
	else{
		return win
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

$('#flavorText').text(this.text);



	return playerChoice;
}

});

	//Rock Skins


var rock1 = {
	type: "Beginer Rock",
	text:"An ancient tool,used for many purposes. A rock.",
	image: "https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt"
};

var rock2 = {
	type: "Pet Rock",
	text:"A rock with googly eyes",
	image: "https://s3.us-east-2.amazonaws.com/rpsv1/pet-rock.png"
};



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

	//Paper Skins ///

var paper1 = {
	type: "Beginer Paper",
	text: "A single sheet of paper, what will you do with it?",
	image: "https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt"
};

var paper2 = {
	type: "Pet Rock",
	text:"A rock with googly eyes",
	image: "https://s3.us-east-2.amazonaws.com/rpsv1/pet-rock.png"
};

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

// Scissor Skins

var scissors1 = {
	type: "Beginer Rock",
	text: "Scissors, best used for cutting paper and your enemies!",
	image: "https://drive.google.com/uc?export=view&id=17i_dEIACd9TxrPEE13-jmzUrwpX5hsLt"
};

var scissors2 = {
	type: "Pet Rock",
	text:"A rock with googly eyes",
	image: "https://s3.us-east-2.amazonaws.com/rpsv1/pet-rock.png"
};



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


