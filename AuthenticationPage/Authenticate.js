function authe(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "dayoola" && password == "semicolon"){
		alert("redirecting to Semicolon Africa")
		location.href = "https://semicolon.africa";
	}
	else{
		document.getElementById("demo").innerHTML="You have entered wrong values!";
	}
	
	
}