
function convert () {

var currency = document.getElementById("currency").value;
var amount = document.getElementById("amount").value;
	if (isNaN(amount)) {
	//Display an error msg
	// document.getElementById("demo2").innerHTML = "You have a wrong input";
	alert("You have a wrong input");
	}
	else{
	//run the program
	var output;
	// if (currency == "dollar"){
	// 	output = amount * 365;
	// }

	// else if (currency == "euros"){
	// 	output = amount * 395;
	// }
	// else if (currency == "pounds"){
	// 	output = amount * 470;
	// }
	// else if (currency == "yuan"){
	// 	output = amount * 52;
	// }
	// else if (currency == "rupees"){
	// 	output = amount * 5;
	// }
	// else{
	// 	output = amount * 3686700;
	// }
	// document.getElementById("demo").innerHTML = output;

	switch(currency){
	case "dollar": 
	output = amount * 365;
	break;
	case "euros": 
		output = amount * 395;
		break;
	case "pounds": 
	output = amount * 470;
		break;
	case "yuan": 
	output = amount * 52;
		break;
	case "rupees": 
		output = amount * 5;
	break;

	default: 
	output = amount * 3686700;
	break;
	}
	document.getElementById("demo").innerHTML = output;
		}
}


