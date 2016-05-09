
var quoteArray = [
	"Just when I think you couldn't possibly be any dumber, \
	you go and do somethin' like this -- and totally redeem \
	yourself! Ha Ha! <br /> <code>Dumb & Dumber (1994)</code>", 
	"Yeah I called her up, she gave me a bunch of crap about me not \
	listenin' to her enough, or somethin'. I don't know, I wasn't really \
	payin' attention. <br /> <code>Dumb & Dumber (1994)</code>",
	"Fat, drunk, and stupid is no way to go through life, son. \
	<br /> <code>Animal House (1978)</code>",
	"-Well, Michael, I underestimated you.... <br /> \
	-Yeah, well, maybe next time you will estimate me. \
	<br /> <code>The Office</code>",
	"-I. DECLARE. BANKRUPTCY! <br /> \
	-I just wanted you to know that you can't just say the word \
	bankruptcy and expect anything to happen. <br /> \
	-I didn't say it, I declared it. <br /> <code>The Office</code>",
	"I need a username, and ... I have a great one. \"LittleKidLover\" \
	That way people will know exactly where my priorities are at. <br /> \
	<code>The Office</code>",
	"If I had a gun with two bullets and I was in a room with Hitler, \
	Bin Laden, and Toby, I would shoot Toby twice. <br /> \
	<code>The Office</code>",
	"When my mother was pregnant with me, they did and ultrasound \
	and found she was having twins.  When they did another ultrasound \
	a few weeks later, they discovered that I had resorbed the other \
	fetus.  Do I regret this?   No, I believe his tissue has made me \
	stronger.  I now have the strength of a grown man and a little baby \
	<br /> <code>The Office</code>",
	]

function randomQuote() {
	var quoteId = document.getElementById("quote");
	var randNum = Math.floor(Math.random() * quoteArray.length);
	quoteId.innerHTML = quoteArray[randNum];
	/*The following doesn't update "data-text" attribute
	var tweetButton = document.getElemenentById("twitterbutton");
	tweetButton.setAttribute("data-text", quoteArray[randNum]);*/
};

var d = new Date();
		document.getElementById("today").innerHTML = 
		d.toDateString();
		
