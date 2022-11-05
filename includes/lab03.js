/** Letter Counter - Count Number of Times Letter Appears In String **/
function letterCount(textStr, letter) {
	var charCount = 0;
	for (var i = 0; i < textStr.length; i++) {
		if (textStr.charAt(i) == letter) {
			charCount++;
		}
	}
	return charCount;
}

var textString, searchChar;
textString = "This is a string";
searchChar = 'i';

document.getElementById("letterCount").insertAdjacentHTML("beforeend", "<b>The string is:</b> " + textString + "<br><br>The letter \'" + searchChar + "\' appears " + letterCount(textString, searchChar) + " times.");

textString = "The dog ran away";
searchChar = 'r';

document.getElementById("letterCount").insertAdjacentHTML("beforeend", "<br><br><br><b>The string is:</b> " + textString + "<br><br>The letter \'" + searchChar + "\' appears " + letterCount(textString, searchChar) + " times.");

textString = "The cow on the farm";
searchChar = 'o';

document.getElementById("letterCount").insertAdjacentHTML("beforeend", "<br><br><br><b>The string is:</b> " + textString + "<br><br>The letter \'" + searchChar + "\' appears " + letterCount(textString, searchChar) + " times.");

/** Calculate Number of Working Days and Pay **/
function daysInMonths (month, year) {
	return new Date(year, month, 0).getDate();
}

var inputMonth = prompt("Pay Calculator - Enter month: ");
inputMonth -= 1;
var dateMon = new Date(2021, inputMonth, 2);
var monthName = dateMon.toLocaleString('en-us', { month: 'long' });
var inputYear = prompt("Pay Calculator - Enter year: ");
var inputHourlyWage = prompt("Pay Calculator - Enter hourly wage: ");
var hourlyWage = parseFloat(inputHourlyWage.replace("$", ""));
var dailyWage = hourlyWage * 7.5;
var pay;
var days = daysInMonths(inputMonth, inputYear);
var workDays = 0;
var d;

for (var i = 0; i < days; i++) {
d = new Date(2017, 12, i);
	if (d.getDay() != 6 && d.getDay() != 0) {
  	workDays++;
  }
}

pay = parseFloat(dailyWage) * workDays;

document.getElementById("payCalc").insertAdjacentHTML("beforeend", "Month: " + monthName + "<br>Year: " + inputYear + "<br>Weekdays: " + workDays + "<br>Salary: $" + hourlyWage.toFixed(2) + "<br>Pay: $" + pay.toFixed(2));

/** Error Handling **/
function calcFutureValue (principal, rate, years) {
	try {
		if (principal <= 0) throw "Principal value must be greater than zero";
		if (rate <= 0) throw "Rate value must be greater than zero";
		if (years <= 0) throw "Years value must be greater than zero";
	}
	catch(err) {
		console.error(err);
		document.getElementById("errorHandle").insertAdjacentHTML("beforeend", "ERROR: " + err + "<br>");
	}

	var monthlyRate = (rate / 12) / 100;
	var months = years * 12;
	var futureValue = 0;

	for (var i = 0; i < months; i++) {
		futureValue = (futureValue + principal) * (1 + monthlyRate);
	}
	return futureValue;
}
var investment = 10;
var annualRate = 4;
var years = 5;
var futureValue = calcFutureValue(investment, annualRate, years).toFixed(2);
if (futureValue != 0.0) {
	document.getElementById("errorHandle").insertAdjacentHTML("beforeend", "The future value is: " + futureValue + "<br>");
}
investment = 100;
annualRate = 4;
years = 20;
futureValue = calcFutureValue(investment, annualRate, years).toFixed(2);
if (futureValue != 0.0) {
	document.getElementById("errorHandle").insertAdjacentHTML("beforeend", "The future value is: " + futureValue + "<br>");
}
investment = 0;
annualRate = 4;
years = 5;
futureValue = calcFutureValue(investment, annualRate, years).toFixed(2);
if (futureValue != 0.0) {
	document.getElementById("errorHandle").insertAdjacentHTML("beforeend", "The future value is: " + futureValue + "<br>");
}