/*Local JavaScript for Pomodoro Timer*/

/*----------Initializing Variables-------------*/
/*---------display in HTML "timer" & "state"------*/


var timer = document.getElementById("timer");
var state = document.getElementById("state");
var breakVal = document.getElementById("break-value");
var sessionVal = document.getElementById("session-value");
var pause = document.getElementById("pause");
var clockFill = document.getElementById("clock-fill");
var buzz = document.getElementById("buzz");
/*-----------JS Global Starting Variables--------*/

var breakInitial = 5;
var sessionInitial = 25;
var min = 25;
var sec = 00;
var timerCounter = min + " : " + "0" + sec;
var timerOn = false;
var breakOn = false;
var interval;
var clockFillWidth = "100%";
var clockFillHeight = "0%";
var fillCount = 1;



function startTimer() {
	if (timerOn == false) {
		interval = setInterval(timerCount, 1000);	
		state.innerHTML = "Work";
		pause.innerHTML = "pause";
		timerOn = true;
	} else if (timerOn == true) {
		state.innerHTML = "Start";
		pause.innerHTML = "resume";
		clearInterval(interval);
		timercounter = min + " : " + "0" + sec;
		timerOn = false;
	}
};
function timerCount() {
	backgroundFill();
	if (sec == 0){
		min = min - 1;
		sec = 60;
	};
	sec = sec - 1;
	if (sec < 10) {
		timerCounter = min + " : " + "0" + sec;
		timer.innerHTML = timerCounter;
	} else {
		console.log(min + ' ' + sec)
		timerCounter = min + " : " + sec;
		timer.innerHTML = timerCounter;
	};
	if (min == 0 && sec == "00"){
		if (breakOn == false){
			buzz.play();
			min = breakInitial;
			breakOn = true;
			state.innerHTML = "Break";
			fillCount = 1;
			clockFill.style.backgroundColor = " #ccffcc";
			/*play sound*/
		} else if (breakOn == true){
			buzz.play();
			min = sessionInitial;
			breakOn = false;
			state.innerHTML = "Work";
			fillCount = 1;
			clockFill.style.backgroundColor = "#ffd6cc";
			/*play sound*/
		}
	};
};
function backgroundFill() {
	if (breakOn == false) {
	clockFillHeight = Math.round((fillCount / (sessionInitial * 60)) * 100);
	fillCount = fillCount + 1;
	clockFill.style.backgroundSize = clockFillWidth +" "+ clockFillHeight+"%";
	console.log("CFW: " + clockFillWidth + "CFH: " + clockFillHeight);
	} else if (breakOn == true) {
		clockFillHeight = Math.round((fillCount / (breakInitial * 60)) * 100);
		fillCount = fillCount + 1;
		clockFill.style.backgroundSize = clockFillWidth +" "+ clockFillHeight+"%";
		console.log("Break W: "+clockFillWidth+" H: "+clockFillHeight);
		console.log("fillCount= "+fillCount+ " breakInitial= "+breakInitial);
	}
};
breakVal.innerHTML = breakInitial;
sessionVal.innerHTML = sessionInitial;
timer.innerHTML = timerCounter;

console.log("BREAK: " + breakInitial  + " SESSION: " + sessionInitial);
/*---------Functions called by Buttons-------------*/
function resetTimer() {
	clearInterval(interval);
	timerOn = false;
	min = sessionInitial;
	sec = 00;
	fillCount = 1;
	timer.innerHTML = min + " : " + "0" + sec;
};

function subBreak() {
	if (breakOn == false) {
		if (breakInitial > 1) {
		breakInitial = (breakInitial - 1);
		breakVal.innerHTML = breakInitial;
		console.log("BREAK: " + breakInitial  + " SESSION: " + sessionInitial);
		} else {
			breakInitial = 1;
		};
	} if (breakOn == true) {
		breakInitial = breakInitial;
	}
};

function addBreak() {
	if (breakOn == false) {
		if (breakInitial < 60) {
		breakInitial = (breakInitial + 1);
		breakVal.innerHTML = breakInitial;
		console.log("BREAK: " + breakInitial  + " SESSION: " + sessionInitial);
		} else {
			breakInitial = 60;
		};
	} if (breakOn == true) {
		breakInitial = breakInitial;
	}
};

function subSession() {
	if (timerOn == false) {
		if (sessionInitial > 1) {
		sessionInitial = (sessionInitial - 1);
		sessionVal.innerHTML = sessionInitial;
		min = (min - 1);
		timerCounter = min + " : " + "0" + sec;
		timer.innerHTML = timerCounter;
		console.log("BREAK: " + breakInitial  + " SESSION: " + sessionInitial);
		} else {
			sessionInitial = 1;
		};
	} if (timerOn == true) {
		sessionInitial = sessionInitial;
	}	
};

function addSession() {
	if (timerOn == false) {
		if (sessionInitial < 120) {
		sessionInitial = (sessionInitial + 1);
		sessionVal.innerHTML = sessionInitial;
		min = (min + 1);
		timerCounter = min + " : " + "0" + sec;
		timer.innerHTML = timerCounter;
		console.log("BREAK: " + breakInitial  + " SESSION: " + sessionInitial);
		} else {
			sessionInitial = 120;
		};
	} if (timerOn == true) {
		sessionInitial = sessionInitial;
	}
};





var d = new Date();
	document.getElementById("today").innerHTML = 
	d.toDateString();	