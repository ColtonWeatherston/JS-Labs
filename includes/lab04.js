/** String Array **/
var inputString = prompt("Enter a string:");
var searchChar = prompt("Enter character to search string with: (This character will be used to count its number of occurences in the string.)");
document.getElementById("stringArray").insertAdjacentHTML("beforeend", "<b>The string is:</b> " + inputString);
document.getElementById("stringArray").insertAdjacentHTML("beforeend", "<br><br><b>The key is:</b> " + searchChar);
var stringArray = [];
var charCount = 0;
for (let i = 0; i < inputString.length; i++) {
	stringArray[i] = inputString.charAt(i);
}
for (let i = 0; i < stringArray.length; i++) {
	if (stringArray[i] == searchChar) {
		charCount++;
		stringArray[i] = "";
	}
}
document.getElementById("stringArray").insertAdjacentHTML("beforeend", "<br><br>The character " + searchChar + " occurs " + charCount + " times in the array");
document.getElementById("stringArray").insertAdjacentHTML("beforeend", "<br><br><b>The new string, after removing the character " + searchChar + ", is:</b> ");
for (let i = 0; i < stringArray.length; i++) {
	document.getElementById("stringArray").insertAdjacentHTML("beforeend", stringArray[i]);
}

/** Card Deck **/
function randomDraw() {
	let randomSuit = Math.floor((Math.random() * suits.length) + 1) - 1;
	let randomNum = Math.floor((Math.random() * numbers.length) + 1) - 1;
	return numbers[randomNum] + " of " + suits[randomSuit];
}

var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.getElementById("cardDeck").insertAdjacentHTML("beforeend", "<b>Card 1 is:</b> " + randomDraw());
document.getElementById("cardDeck").insertAdjacentHTML("beforeend", "<br><br><b>Card 2 is:</b> " + randomDraw());

/** Adding Row to Table when Button Clicked **/
myButton.onclick = function() {
	var table = document.getElementById("sampleTable");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
};