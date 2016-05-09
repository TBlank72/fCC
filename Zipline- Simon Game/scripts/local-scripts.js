//Local JavaScript for Simon Game
// speed up on 5th, 9th, 13th step
// restart button
// strict mode = incorrect starts at 1
// normal mode = incorrect lets user try again

// sound links below
//"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" 
//"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" 
//"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" 
//"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"

// To Do
	// if user array = level/path length & user items match
		// level ++
		// append randNum + start path at i=0
	// test correct / incorrect against each item in path array
	// if strict mode statements
	// counter display of current level (number of items in path)
	// start button generates one button, appends to path
	// add setTimeout / setInterval
	// if path = 20 items, winner, reset, etc.
//------------------------Global Variables--------------------------------
var state = "off";
var restart = false;
var turnOnDelay;
var path = [];
var userPath = [];
var pathDelay;
var soundDelay;
var lightOnDelay;
var i = 0;
var j = 0;
var level = 1;
var strict = "off";
//--------------------------Level Display----------------------------------
var containerFluid = document.getElementsByClassName("container-fluid");
var levelDiv= document.getElementById("level-div");
var lvlDisplay = document.getElementById("level-display");
var winner = document.getElementById("winner-container");
//----------------------------- buttons -----------------------------------
	// 4 corner buttons / lights
var TL = document.getElementById("TL");
var TR = document.getElementById("TR");
var BL = document.getElementById("BL");
var BR = document.getElementById("BR");

	// inner game container buttons
var onOff = document.getElementById("on-off-switch");
var startButton = document.getElementById("start-button");
var strictButton = document.getElementById("strict-button");
var strictIndicator = document.getElementById("strict-indicator");

//------------------------------Audio Variables------------------------------
var TLA = document.getElementById("TLA");
var TRA = document.getElementById("TRA");
var BLA = document.getElementById("BLA");
var BRA = document.getElementById("BRA");
//----------------------Add Random Number to Path-----------------------
function randomNumber() {
	var newNum = Math.floor(Math.random() * 4)
	return newNum;
}

//------------------------Event Listeners------------------------------------
	//4 corner buttons / lights
		//	mousedown
TL.addEventListener('mousedown', function() { userMouseDown(0)}, false);
TR.addEventListener('mousedown', function() { userMouseDown(1)}, false);
BL.addEventListener('mousedown', function() { userMouseDown(2)}, false);
BR.addEventListener('mousedown', function() { userMouseDown(3)}, false);
		// mouseup
TL.addEventListener('mouseup', function() { userMouseUp(0)}, false);
TR.addEventListener('mouseup', function() { userMouseUp(1)}, false);
BL.addEventListener('mouseup', function() { userMouseUp(2)}, false);
BR.addEventListener('mouseup', function() { userMouseUp(3)}, false);
	// inner game container buttons
onOff.addEventListener('click', function() { turnGameOn()}, false);
startButton.addEventListener('click', function() {startGame()}, false);
strictButton.addEventListener('click', function() {strictToggle()}, false);

//------------------------Event Handlers-------------------------------------
function turnGameOn() {
	lightOnDelay = setTimeout(turnLightOn, 100);
	lightOffDelay = setTimeout(turnLightOff, 200);
	lightOnDelay = setTimeout(turnLightOn, 300);
	lightOffDelay = setTimeout(turnLightOff, 400);
	lightOnDelay = setTimeout(turnLightOn, 500);
	lightOffDelay = setTimeout(turnLightOff, 600);
	
	if (onOff.style.float != "right") {
		onOff.style.float = "right";
		state = "on";
	} else {
		onOff.style.float = "left";
		state = "off";
	}	
}//end turnGameOn

function strictToggle() {
	if (strict == "off") {
		strict = "on";
		strictIndicator.style.backgroundColor = "#FF5555";
		console.log("strict: " + strict);
	} else if (strict == "on") {
		strict = "off";
		strictIndicator.style.backgroundColor = "#330000";
		console.log("strict: " + strict);
	}
}// end strictToggle

function startGame() {
	//state on/off test
	if (state == "on" && restart == false) {
	var newRand = randomNumber();
	path = path.concat(newRand);
	level = 1;
	restart = true;
	pathDelay = setTimeout(newPathCycle, 1000, path);
	//newPathCycle(path);
	return path, restart;
	} 
	// if start is pressed for RESTART
	else if (state == "on" && restart == true) {
		if (winner.style.display == 'block') {
			winner.style.display = 'none';
		}
	turnLightOff();
	newRand = randomNumber();
	path = [];
	userPath = [];
	path = path.concat(newRand);
	arg2 = 0;
	level = 1;
	i = 0;
	j = 0;
	t = 0;
	pathDelay = setTimeout(newPathCycle, 1500, path, arg2);
	return i,j,t,level,path, userPath;;
	}
}//end startGame

function newPathCycle(path) {
	//if lights on / turn off
	turnLightOff();
	//reset i 
	if (arguments.length > 1) {
		i = 0;
	}
	//update current level display
	if (level < 10) {
	lvlDisplay.innerHTML = "0".concat(level.toString());
	} else {
		lvlDisplay.innerHTML = level.toString();
	}
	//call showCurrentPath
	showCurrentPath(path[i], path);
}//end newPathCycle

function showCurrentPath(num, path) {
	//Reset i value
	if (i == (level)) {
		i = 0;
	}
	//---------------Flash Lights + Sound-------------------------
	if (num == 0) {
		TL.style.backgroundColor = "#80FF00";
		TLA.play();
		lightOnDelay = setTimeout(turnLightOff, 400);
	} else if (num == 1) {
		TR.style.backgroundColor = "#FF0000";
		TRA.play();
		lightOnDelay = setTimeout(turnLightOff, 400);
	} else if (num == 2) {
		BL.style.backgroundColor = "#FFFF00";
		BLA.play();
		lightOnDelay = setTimeout(turnLightOff, 400);
	} else if (num == 3) {
		BR.style.backgroundColor = "#0000FF";
		BRA.play();
		lightOnDelay = setTimeout(turnLightOff, 400);
	}
	//-------Level Test, Decrease Delay, call newPathCycle------------
	if (i < (level-1)) {
		if (level <= 5) {
		pathDelay = setTimeout(newPathCycle, 2000, path);
		i++;
		} else if (level <= 9) {
		pathDelay = setTimeout(newPathCycle, 1500, path);
		i++;
		} else if (level <= 13) {
		pathDelay = setTimeout(newPathCycle, 1000, path);
		i++;
		} else if (level <= 20) {
		pathDelay = setTimeout(newPathCycle, 700, path);
		i++;
		} 
	} //end Level Test
}//end showCurrentPath

function turnLightOff() {
	TL.style.backgroundColor = "#006600";
	TR.style.backgroundColor = "#660000";
	BL.style.backgroundColor = "#666600";
	BR.style.backgroundColor = "#000066";
}//end turnLightOff
function turnLightOn() {
	TL.style.backgroundColor = "#80FF00";
	TR.style.backgroundColor = "#FF0000";
	BL.style.backgroundColor = "#FFFF00";
	BR.style.backgroundColor = "#0000FF";
}//end turnLightOn

function userMouseDown(num) {
	// turn selected light on
	if (state == "off") {}
	else {
	if (num == '0') {
		TL.style.backgroundColor = "#80FF00";
		TLA.play();
	} else if (num == '1') {
		TR.style.backgroundColor = "#FF0000";
		TRA.play();
	} else if (num == '2') {
		BL.style.backgroundColor = "#FFFF00";
		BLA.play();
	} else if (num == '3') {
		BR.style.backgroundColor = "#0000FF";
		BRA.play();
	}
	}
}//end function mouseDown

function userMouseUp(num, UP) {
	if (state == "off") {}
	else {
	if (arguments.length > 1) {
		path = num;
		userPath = UP;
	} else {
	// turn off lights
	TL.style.backgroundColor = "#006600";
	TR.style.backgroundColor = "#660000";
	BL.style.backgroundColor = "#666600";
	BR.style.backgroundColor = "#000066";
	// update user path
	userPath = userPath.concat(num);
	// Test userInput
	if (num != path[j]) {
		//------Flash Lights to Signal NON-MATCH------
		lightOnDelay = setTimeout(turnLightOn, 100);
		lightOffDelay = setTimeout(turnLightOff, 200);
		lightOnDelay = setTimeout(turnLightOn, 300);
		lightOffDelay = setTimeout(turnLightOff, 400);
		lightOnDelay = setTimeout(turnLightOn, 500);
		lightOffDelay = setTimeout(turnLightOff, 600);
		lightOnDelay = setTimeout(turnLightOn, 700);
		lightOffDelay = setTimeout(turnLightOff, 800);
		
		//-------------------Strict Mode OFF-----------------
		// Reset counters + userPath + call newPathCycle with existing Path
		if (strict == "off") {
		arg2 = 0;
		j = 0;
		userPath = [];
		pathDelay = setTimeout(newPathCycle, 3000, path, arg2);
		return userPath;
		} 
		//--------------------Strict Mode ON------------------
		else if (strict == "on") {
			level = 1;
			i = 0;
			t = 0;
			arg2 = 0;
			j = 0;
			userPath = [];
			path = [];
			randNum = Math.floor(Math.random() * 4);
			path = path.concat(randNum);
			pathDelay = setTimeout(newPathCycle, 3000, path, arg2);
			return userPath,level,i,t,j,path;
		}
	}
	j++;
	// Test path vs userPath LENGTHS
	if (path.length == userPath.length) {
		testMatch(path, userPath);
		j = 0;
		return j;
	} //end path Length Test
}//end arguments length test
}//end (state == off)
}//end userMouseUp

function testMatch(path, userPath) {
	// re-check paths after mouseUp call
	for (var t = 0; t < userPath.length; t++) {
		if (path[t] != userPath[t]) {
			break;
		} else if (t == (level -1)){
			level++;
			// IF WINNER!!!!!!!!
			if (level > 20) {
				TL.style.backgroundColor = "#80FF00";
				TR.style.backgroundColor = "#FF0000";
				BL.style.backgroundColor = "#FFFF00";
				BR.style.backgroundColor = "#0000FF";
				winner.style.display = 'block';
				t = 0;
				userPath = [];
				level = 0;
				break;
			}//end if Winner
			t = 0;
			newRand = randomNumber();
			path = path.concat(newRand);
			userPath = [];
			arg2 = 0;
			userMouseUp(path, userPath);
			pathDelay = setTimeout(newPathCycle, 2000, path, arg2);
		}//end else if
		
	}//end for-loop
	
}//end function testMatch()