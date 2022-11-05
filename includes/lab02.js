/** Find Middle Number of Three Numbers **/
var num1 = prompt("Middle Number Finder - Enter a number:");
var num2 = prompt("Middle Number Finder - Middle Number Finder - Enter another number:");
var num3 = prompt("Middle Number Finder - Enter one last number:");
if ((num1 < num2 && num2 <  num3) || (num3 < num2 && num2 < num1)) {
	var middleNum = num2;
}
else if ((num2 < num1 && num1 < num3) || (num3 < num1 && num1 < num2)) {
	var middleNum = num1;
}
else {
	var middleNum = num3;
}

document.getElementById("middleNumber").innerHTML = "The middle number of (" + num1 + "," + num2 + "," + num3 + ") is: ";
document.getElementById("middleNumberResult").innerHTML = middleNum;

/** Letter Grade Calculator **/
var isNumberPercentage = false;
var userPercentage = prompt("Letter Grade Calculator - Enter percentage:");
if (userPercentage >= 0 && userPercentage <= 100) {
	isNumberPercentage = true;
}
while (isNumberPercentage == false) {
	alert("Incorrect - not between 0-100");
	userPercentage = prompt("Enter percentage:");
	if (userPercentage >= 0 && userPercentage <= 100) {
		isNumberPercentage = true;
	}
}

if (userPercentage >= 90) {
	var letterGrade = "A";
}
else if (userPercentage >= 80) {
	var letterGrade = "B";
}
else if (userPercentage >= 65) {
	var letterGrade = "C";
}
else if (userPercentage >= 50) {
	var letterGrade = "D";
}
else {
	var letterGrade = "F"
}
document.getElementById("letterGradeCalculator").innerHTML = "The letter grade for " + userPercentage + "% is: ";
document.getElementById("letterGradeCalculatorResult").innerHTML = letterGrade;

/** FIX ME **/
/** Iteration Question **/
document.getElementById("iteration").innerHTML = "<b>Image below created using iteration:</b>" + "<br><br>";
var i;
for (i = 0; i < 9; i++) {
	if (i == 0 || i == 8) {
		document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + "#" + "<br>";
	}
	else if (i == 1 || i == 7) {
		document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + "# # " + "<br>";
	}
	else if (i == 2 || i == 6) {
		document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + "# # # " + "<br>";
	}
	else if (i == 3 || i == 5) {
		document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + "# # # # " + "<br>";
	}
	else {
		document.getElementById("iteration").innerHTML = document.getElementById("iteration").innerHTML + "# # # # # " + "<br>";
	}
}

/** Bangkok Question **/
document.getElementById("bangkokQuestion").innerHTML = "Question: In the movie \"The Smog That Swallowed Bangkok\" a thick smog creeps in from the north and slowly envelops the city. Assuming the smog increases its size within Bangkok by 6% every minute, how long until the city is totally enveloped in the choking haze? <br>You live right in the center of town. How long do you have until you must get out or die? The initial fog area size is 100 square meter at 7:00 AM. The area of Bangkok is 125000 square meters. Also, there's no wind that morning.";
var fogArea = 100;
while (fogArea < 125000) {
	fogArea = fogArea * 1.06;
}
var fullyEnvelop = fogArea * 0.94;
fullyEnvelop /= 1000;

/** FIX ME **/
fogArea = 100;
while (fogArea < 115300) {
	fogArea = fogArea * 1.06;
}
var halfEnvelop = fogArea * 0.94;
halfEnvelop /= 1000;

document.getElementById("fullyBangkok").innerHTML = "Answer: <br><br>Fully envelop Bangkok in MINUTES: " + parseInt(fullyEnvelop);
document.getElementById("halfBangkok").innerHTML = "Half envelop Bangkok in MINUTES: " + parseInt(halfEnvelop);
