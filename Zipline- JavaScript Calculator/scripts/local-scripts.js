/*Local JavaScript for JavaScript Calculator*/

/*----------Initializing Variables-------------*/
/*---------display in HTML "calc-display"------*/
var display = document.getElementById("calc-display");

/*-------Global Counters----------*/
var calcEquation = [];
var displayVal = "";

/*---------Functions called by Buttons-------------*/
var addValue;
var logVal;
var calculate;
var clearAll;
var backSpace;

console.log("calcEquation is " + calcEquation + " ON LOAD");

function addValue(val) {
	displayVal += val;
	calcEquation += val;
	display.innerHTML = displayVal;
		//change font size
	if (display.innerHTML.length > 11) {
		display.style.fontSize = "3em";
	} if (display.innerHTML.length > 15) {
		display.style.fontSize = "2em";
	} if (display.innerHTML.length > 22) {
		display.style.fontSize = "1.5em";
	};
	console.log("calcEquation is " + calcEquation + " in addValue() function");
	return calcEquation;
}

function logVal(operator) {
	console.log("calcEquation is " + calcEquation + " START logVal()");
	displayVal += operator;
	calcEquation += operator;
	display.innerHTML = displayVal; /*comment to clear display after operator*/
	/*displayVal = "";*/  /*uncomment to clear display after operator*/
	console.log("calcEquation is " + calcEquation + " END logVal()");
}

function backSpace() {
	displayVal = displayVal.slice(0, -1);
	calcEquation = calcEquation.slice(0, -1);
	display.innerHTML = displayVal;
	console.log("BACKSPACE new calcEquation: " + calcEquation);
}

function calculate() {
	result = eval(calcEquation);
	calcEquation = eval(calcEquation);
	displayVal = result;
	console.log("RESULT: " + result + " calcEquation: " + calcEquation);
	display.innerHTML = result;
}


function clearAll() {
	display.style.fontSize = "4em";
	display.innerHTML = "";
	displayVal = "";
	calcEquation = [];
}

var d = new Date();
	document.getElementById("today").innerHTML = 
	d.toDateString();
/*		
var formula = document.getElementById("quote");
var randNum = Math.floor(Math.random() * quoteArray.length);
	quoteId.innerHTML = quoteArray[randNum];    */