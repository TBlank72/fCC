//Local JavaScript for Tic Tac Toe Game


function openModal() {
	$("#Modal").modal({
		show: true
	})
}
openModal() // openModal on doc.ready


//----------------------Declare Global Variables------------------------------
var userLet;
var compLet;
var state;
var winner;
var timeOut;
var timeOut2;
var myTurn = document.getElementById("myTurn");
var whoWon = document.getElementById("who-won");
var TL = document.getElementById("TL"), 
	TM = document.getElementById("TM"), 
	TR = document.getElementById("TR"),
	ML = document.getElementById("ML"), 
	MM = document.getElementById("MM"),
	MR = document.getElementById("MR"), 
	BL = document.getElementById("BL"), 
	BM = document.getElementById("BM"), 
	BR = document.getElementById("BR");
//---------------------------Choose Letter-------------------------------------
function chooseXO(letter) {
	userLet = letter;
	if (letter == 'X') {
		compLet = 'O'; 
	} else {
		compLet = 'X';
	}
	console.log("user letter: " + userLet);
	console.log("computer letter: " + compLet);
	randomOrder();
}
//----------------------Comp make first play----------------------------------
function randomOrder() {
	var rNum = Math.floor(Math.random() * 2);
	console.log("Random Number: " + rNum);
	if (rNum == 0) {
		state = "cTurn";
		timeOut = setTimeout(makeCompMove, 1500, compLet);
	} else {
		state = "uTurn";
	}
}
//--------------------------Make Move-----------------------------------------
colTL.addEventListener('click', function() {makeUserMove(userLet, TL)}, false);
colTM.addEventListener('click', function() {makeUserMove(userLet, TM)}, false);
colTR.addEventListener('click', function() {makeUserMove(userLet, TR)}, false);
colML.addEventListener('click', function() {makeUserMove(userLet, ML)}, false);
colMM.addEventListener('click', function() {makeUserMove(userLet, MM)}, false);
colMR.addEventListener('click', function() {makeUserMove(userLet, MR)}, false);
colBL.addEventListener('click', function() {makeUserMove(userLet, BL)}, false);
colBM.addEventListener('click', function() {makeUserMove(userLet, BM)}, false);
colBR.addEventListener('click', function() {makeUserMove(userLet, BR)}, false);
function makeUserMove(userLet, cell) {
	if (state == "uTurn" && cell.innerHTML != userLet && cell.innerHTML != compLet) {
	cell.innerHTML = userLet;
	state = "cTurn"
	testWin();
	timeOut = setTimeout(makeCompMove, 1500, compLet);
	} else {
		myTurn.style.color = ("white");
	}
}

function makeCompMove(compLet) {
	if (state == "cTurn") {
	state = "uTurn";
	myTurn.style.color = ("");
	//Take Middle if not taken
	if (MM.innerHTML == '&nbsp;') {
		MM.innerHTML = compLet;
	}
	//------------------------------------Make winning play if open------------------------------------------------
	// win diagonals
	else if (MM.innerHTML == compLet && TR.innerHTML == compLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (MM.innerHTML == compLet && BL.innerHTML == compLet && TR.innerHTML == '&nbsp;' ) {
		TR.innerHTML = compLet;
	} else if (MM.innerHTML == compLet && TL.innerHTML == compLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (MM.innerHTML == compLet && BR.innerHTML == compLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet
	}
	//win vertical left col
	else if (TL.innerHTML == compLet && ML.innerHTML == compLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (BL.innerHTML == compLet && ML.innerHTML == compLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet;
	} else if (TL.innerHTML == compLet && BL.innerHTML == compLet && ML.innerHTML == '&nbsp;') {
		ML.innerHTML = compLet;
	} 
	//win vertical middle col
	else if (TM.innerHTML == compLet && MM.innerHTML == compLet && BM.innerHTML == '&nbsp;') {
		BM.innerHTML = compLet;
	} else if (BM.innerHTML == compLet && MM.innerHTML == compLet && TM.innerHTML == '&nbsp;') {
		TM.innerHTML = compLet;
	}
	//win vertical right col
	else if (TR.innerHTML == compLet && MR.innerHTML == compLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (BR.innerHTML == compLet && MR.innerHTML == compLet && TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (TR.innerHTML == compLet && BR.innerHTML == compLet && MR.innerHTML == '&nbsp;') {
		MR.innerHTML = compLet;
	} 
	//win horizontal top row
	else if (TL.innerHTML == compLet && TM.innerHTML == compLet && TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (TR.innerHTML == compLet && TM.innerHTML == compLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet;
	} else if (TR.innerHTML == compLet && TL.innerHTML == compLet && TM.innerHTML == '&nbsp;') {
		TM.innerHTML = compLet;
	} 
	//win horizontal middle row
	else if (ML.innerHTML == compLet && MM.innerHTML == compLet && MR.innerHTML == '&nbsp;') {
		MR.innerHTML = compLet;
	} else if (MR.innerHTML == compLet && MM.innerHTML == compLet && ML.innerHTML == '&nbsp;') {
		ML.innerHTML = compLet;
	}
	//win horizontal bottom row
	else if (BL.innerHTML == compLet && BM.innerHTML == compLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (BR.innerHTML == compLet && BM.innerHTML == compLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (BR.innerHTML == compLet && BL.innerHTML == compLet && BM.innerHTML == '&nbsp;') {
		BM.innerHTML = compLet;
	} 
	//------------------------------------Block Winning Play if open------------------------------------------------
	// block diagonals
	else if (MM.innerHTML == userLet && TR.innerHTML == userLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (MM.innerHTML == userLet && BL.innerHTML == userLet && TR.innerHTML == '&nbsp;' ) {
		TR.innerHTML = compLet;
	} else if (MM.innerHTML == userLet && TL.innerHTML == userLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (MM.innerHTML == userLet && BR.innerHTML == userLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet
	}
	//block vertical left col
	else if (TL.innerHTML == userLet && ML.innerHTML == userLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (BL.innerHTML == userLet && ML.innerHTML == userLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet;
	} else if (TL.innerHTML == userLet && BL.innerHTML == userLet && ML.innerHTML == '&nbsp;') {
		ML.innerHTML = compLet;
	} 
	//block vertical middle col
	else if (TM.innerHTML == userLet && MM.innerHTML == userLet && BM.innerHTML == '&nbsp;') {
		BM.innerHTML = compLet;
	} else if (BM.innerHTML == userLet && MM.innerHTML == userLet && TM.innerHTML == '&nbsp;') {
		TM.innerHTML = compLet;
	}
	//block vertical right col
	else if (TR.innerHTML == userLet && MR.innerHTML == userLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (BR.innerHTML == userLet && MR.innerHTML == userLet && TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (TR.innerHTML == userLet && BR.innerHTML == userLet && MR.innerHTML == '&nbsp;') {
		MR.innerHTML = compLet;
	} 
	//block horizontal top row
	else if (TL.innerHTML == userLet && TM.innerHTML == userLet && TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (TR.innerHTML == userLet && TM.innerHTML == userLet && TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet;
	} else if (TR.innerHTML == userLet && TL.innerHTML == userLet && TM.innerHTML == '&nbsp;') {
		TM.innerHTML = compLet;
	} 
	//block horizontal middle row
	else if (ML.innerHTML == userLet && MM.innerHTML == userLet && MR.innerHTML == '&nbsp;') {
		MR.innerHTML = compLet;
	} else if (MR.innerHTML == userLet && MM.innerHTML == userLet && ML.innerHTML == '&nbsp;') {
		ML.innerHTML = compLet;
	}
	//block horizontal bottom row
	else if (BL.innerHTML == userLet && BM.innerHTML == userLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} else if (BR.innerHTML == userLet && BM.innerHTML == userLet && BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (BR.innerHTML == userLet && BL.innerHTML == userLet && BM.innerHTML == '&nbsp;') {
		BM.innerHTML = compLet;
	}
	//block count-clockwise
	else if (MM.innerHTML == userLet && BR.innerHTML == userLet && TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (BM.innerHTML == userLet && MR.innerHTML == userLet && BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	} 
	//else
	else if (TL.innerHTML == '&nbsp;') {
		TL.innerHTML = compLet;
	} 
	else if (TM.innerHTML == '&nbsp;') {
		TM.innerHTML = compLet;
	} else if (TR.innerHTML == '&nbsp;') {
		TR.innerHTML = compLet;
	} else if (ML.innerHTML == '&nbsp;') {
		ML.innerHTML = compLet;
	} else if (MM.innerHTML == '&nbsp;') {
		MM.innerHTML = compLet;
	} else if (MR.innerHTML == '&nbsp;') {
		MR.innerHTML = compLet;
	} else if (BL.innerHTML == '&nbsp;') {
		BL.innerHTML = compLet;
	} else if (BM.innerHTML == '&nbsp;') {
		BM.innerHTML = compLet;
	} else if (BR.innerHTML == '&nbsp;') {
		BR.innerHTML = compLet;
	}
	testWin();
	}//end if(cTurn);
}

function testWin() {
	// test horizontal wins
	if (TL.innerHTML != '&nbsp;' && TL.innerHTML == TM.innerHTML && TM.innerHTML == TR.innerHTML) {
		if (TM.innerHTML == compLet) {
			winner = "The Internets";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (ML.innerHTML != '&nbsp;' && ML.innerHTML == MM.innerHTML && MM.innerHTML == MR.innerHTML) {
		if (MM.innerHTML == compLet) {
			winner = "freeCodeCamp";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (BL.innerHTML != '&nbsp;' && BL.innerHTML == BM.innerHTML && BM.innerHTML == BR.innerHTML) {
		if (BM.innerHTML == compLet) {
			winner = "Michael Scott";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	// test vertical wins
	if (TL.innerHTML != '&nbsp;' && TL.innerHTML == ML.innerHTML && ML.innerHTML == BL.innerHTML) {
		if (ML.innerHTML == compLet) {
			winner = "Your Internet";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (TM.innerHTML != '&nbsp;' && TM.innerHTML == MM.innerHTML && MM.innerHTML == BM.innerHTML) {
		if (MM.innerHTML == compLet) {
			winner = "Donald Trump";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (TR.innerHTML != '&nbsp;' && TR.innerHTML == MR.innerHTML && MR.innerHTML == BR.innerHTML) {
		if (MR.innerHTML == compLet) {
			winner = "Hillary Clinton";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	// test diagonal wins
	if (TL.innerHTML != '&nbsp;' && TL.innerHTML == MM.innerHTML && MM.innerHTML == BR.innerHTML) {
		if (MM.innerHTML == compLet) {
			winner = "The Computers";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (TR.innerHTML != '&nbsp;' && TR.innerHTML == MM.innerHTML && MM.innerHTML == BL.innerHTML) {
		if (MM.innerHTML == compLet) {
			winner = "Tom Brady";
			openModalWin(winner);
		} else {
			winner = "You";
			openModalWin(winner);
		}
	}
	if (TL.innerHTML != '&nbsp;' && 
		TM.innerHTML != '&nbsp;' &&
		TR.innerHTML != '&nbsp;' &&
		ML.innerHTML != '&nbsp;' &&
		MM.innerHTML != '&nbsp;' &&
		MR.innerHTML != '&nbsp;' &&
		BL.innerHTML != '&nbsp;' &&
		BM.innerHTML != '&nbsp;' &&
		BR.innerHTML != '&nbsp;') {
			openModalWin("Nobody");
		}
}

function openModalWin(winner) {
	whoWon.innerHTML = winner + " Won the Game.";
	$("#Modal-Win").modal({
		show: true
	})
}

function clearBoard() {
	TL.innerHTML = '&nbsp;';
	TM.innerHTML = '&nbsp;';
	TR.innerHTML = '&nbsp;';
	ML.innerHTML = '&nbsp;';
	MM.innerHTML = '&nbsp;';
	MR.innerHTML = '&nbsp;';
	BL.innerHTML = '&nbsp;';
	BM.innerHTML = '&nbsp;';
	BR.innerHTML = '&nbsp;';
	openModal();
}