/* Form Validator Function */
function formValidation() {
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var email = document.getElementById('email').value;
	var phoneNumber = document.getElementById('phoneNumber').value;
	var postalCode = document.getElementById('postalCode').value;
	var fieldValidCount = 0;

	/* Validates name field to ensure it is not blank */
	if (/^[ \t\n]*$/.test(name)) {
		alert("Name field cannot be blank.");
	}
	else {
		fieldValidCount++;
	}

	/* Validates age field to ensure it is a number between 0 and 120 */
	if (/^([0-9]|[1-9][0-9]|1[0-1][0-9]|120)$/.test(age)) {
		fieldValidCount++;
	}
	else {
		if (isNaN(age)) {
			alert("Age field must be a number.");
			document.getElementById('age').value = "";
		}
		else {
			alert("Age must be between 0 and 120.");
			document.getElementById('age').value = "";
		}
	}

	/* Validates email field to ensure it is a valid email address */
	if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
		fieldValidCount++;
	}
	else {
		alert("Invalid email address.");
		document.getElementById('email').value = "";
	}

	/* Validates phone number to ensure it is a valid format */
	if (/^[0-9]{10}$/.test(phoneNumber)) {
		fieldValidCount++;
	}
	else if (/^[0-9]{3}(-| |)[0-9]{3}(-| |)[0-9]{4}$/.test(phoneNumber)) {
		fieldValidCount++;
	}
	else {
		alert("Invalid phone number. Please ensure you are entering it in the following format: xxx-xxx-xxxx OR xxx xxx xxxx.");
		document.getElementById('phoneNumber').value = "";
	}

	/* Validates postal code to ensure it is in format ANANAN or ANA NAN */
	if (/^[a-zA-Z][0-9][a-zA-Z](| |)[0-9][a-zA-Z][0-9]$/.test(postalCode)) {
		fieldValidCount++;
	}
	else {
		alert("Invalid postal code. Please use the following format: X1X 1X1 OR X1X1X1.");
		document.getElementById('postalCode').value = "";
	}

	/* Successful Validation Message if all fields are valid. */
	if (fieldValidCount == 5) {
		alert("Successful Validation!");
		return true;
	}
	else {
		return false;
	}
}