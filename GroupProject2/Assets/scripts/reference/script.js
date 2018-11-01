/*Validation Methods*/

//This function routes to different validation methods
//depending on the elements type.
//Each method could have been set in html on the
//elements onclick method but I initially thought I would
//loop through all of the inputs and validate on submit.
function validation(element){
	if(!element.value == ""){
		switch(element.type){
			case "text":
				stringCheck(element);
				break;
			case "tel":
				phoneCheck(element);
				break;
			case "email":
				emailCheck(element);
				break;
		}
	}
}

function phoneCheck(element){
	//This pattern checks for formats that include parens and hypens:
	//3155555555
	//315-555-5555
	//(315)555-5555
	var phonePattern = "^[(]?[\\d]{3}[(-|\\s|)]?[\\d]{3}[(-|\\s)]?[\\d]{4}$";
	if(new RegExp(phonePattern).test(element.value)){
		//If there is a match remove invalid styling
		element.classList.remove("invalidInput");
		//and hide error text
		$("#" + element.name + "Error").addClass("hidden");
	}else{
		//If there is not a match add invalid styling
		element.classList.add("invalidInput");
		//and reveal error text
		$("#" + element.name + "Error").removeClass("hidden");
	}

	//To-do
	//modify all phone strings to 
	//(555)555-5555 format onblur
}

function emailCheck(element){
	//Very basic email pattern. Checks for a string, followed by '@' followed
	//by a domain, followed by a ., ended with a top level domain  
	var emailPattern = "^[A-Za-z0-9]{3,20}[@][A-Za-z0-9]{2,15}[\.][A-Za-z0-9]{2,5}$";

	if(new RegExp(emailPattern).test(element.value)){
		//If there is a match remove invalid styling
		element.classList.remove("invalidInput");
		//and hide error text
		$("#" + element.name + "Error").addClass("hidden");
	}else{
		//If there is not a match add invalid styling
		element.classList.add("invalidInput");
		//and reveal error text
		$("#" + element.name + "Error").removeClass("hidden");
	}
}

function stringCheck(element){
	//Store element name and values in variables
	var elementName = element.name;
	var value = element.value;

	//If the element is computerName route to computerName validation
	if(element.name == "computerName"){
		computerNameCheck(element);
	//Route to name validation if element name includes "Name"
	}else if(element.name.includes("Name")){
		nameCheck(element);
	}else{
		//Else test against string pattern
		//This pattern only checks that only
		//characters and spaces are used.
		var stringPattern = "^[A-Za-z\\s]{2,}$";
		if(new RegExp(stringPattern).test(value)){
			//If there is a match remove validation styling
			element.classList.remove("invalidInput");
			//and hide error text
			$("#" + element.name + "Error").addClass("hidden");
		}else{
			//If there is not a match add validation styling
			element.classList.add("invalidInput");
			//and reveal error text
			$("#" + element.name + "Error").removeClass("hidden");
		}
	}
}

function nameCheck(element){
	//This checks for 3-20 len string followed by
	//a space and another 3-20 len string
	var namePattern = "^[A-Za-z]{3,20}[\\s][A-Za-z]{3,20}$";

	if(new RegExp(namePattern).test(element.value)){
		//If there is a match remove validation styling
		element.classList.remove("invalidInput");
		//and hide error text
		$("#" + element.name + "Error").addClass("hidden");
	}else{
		//If there is not a match add validation styling
		element.classList.add("invalidInput");
		//and reveal error text
		$("#" + element.name + "Error").removeClass("hidden");
	}
}

function computerNameCheck(element){
	//This pattern checks for a 3-10 len string that
	//only includes alphanumeric characters and hyphens.
	//Looked at pdq and dc to see what characters were needed
	//for odd device names
	var computerNamePattern = "^[A-Za-z0-9-]{3,10}$";

	if(new RegExp(computerNamePattern).test(element.value)){
		//If there is a match remove validation styling
		element.classList.remove("invalidInput");
		//and hide error text
		$("#" + element.name + "Error").addClass("hidden");
	}else{
		//If there is not a match add validation styling
		element.classList.add("invalidInput");
		//and reveal error text
		$("#" + element.name + "Error").removeClass("hidden");
	}
}