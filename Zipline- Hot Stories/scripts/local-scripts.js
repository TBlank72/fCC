//Local JavaScript for JavaScript Calculator

//----------Initializing Variables-------------
$(document).ready(function() {

var d = new Date();
document.getElementById("today").innerHTML = d.toDateString();

var hotStoriesUrl = "http://www.freecodecamp.com/news/hot"
$.get(hotStoriesUrl, function(hotStories) {
    hotStories.forEach(function(hotStory) {
		var headline = hotStory.headline;
		var storyLink = hotStory.link;
		var authorPicture = hotStory.author.picture;
		var authorName = hotStory.author.username;
		if (authorName === undefined) {authorName = "unknown"};
		var upVotes = hotStory.rank;
		//var comments = hotStory.comments.length;
		var timePosted = new Date(hotStory.timePosted).toGMTString().slice(0,-13);
		timePosted = "Posted on: " + timePosted;
		
		storyCreator(headline, storyLink, authorPicture, authorName, upVotes, timePosted);
		
	}); //end hotStories.forEach
}); //end get(hotStoriesUrl)

function storyCreator(headline, storyLink, authorPicture, authorName, upVotes, timePosted) {
	var authorProfile = "http://www.freecodecamp.com/"+authorName;
	var div = document.createElement("div");
	var div1 = document.createElement("div");
	var a11 = document.createElement("a");
	var img111 = document.createElement("img");
	var div2 = document.createElement("div");
	var div21 = document.createElement("div");
	var p211 = document.createElement("p");
	var a211 = document.createElement("a");
	var p212 = document.createElement("p");
	var a212 = document.createElement("a");
	var div22 = document.createElement("div");
	var div221 = document.createElement("div");
	var a2211 = document.createElement("a");
	var p2211 = document.createElement("p");
	var p2212 = document.createElement("p");
	var p222 = document.createElement("p");
	
	div.className = "post";
	div1.className = "author";
	img111.className = "author-picture";
	div2.className = "post-description";
	div21.className = "headline";
	p211.className = "text-left";
	p211.setAttribute("id", "headline-text");
	p212.className = "text-left";
	p212.setAttribute("id", "author-name");
	div22.className = "post-info";
	p2211.setAttribute("id", "comments");
	p2212.setAttribute("id", "upVotes");
	p222.className = "timePosted";
	
	a11.setAttribute("href", storyLink);
	a11.setAttribute("target", "_blank");
	img111.setAttribute("src", authorPicture);
	
	a211.setAttribute("href", storyLink);
	a211.setAttribute("target", "_blank");
	var a211Text = document.createTextNode(headline.substr(0,20) + "...");
	a211.appendChild(a211Text);
	
	a212.setAttribute("href", authorProfile);
	a212.setAttribute("target", "_blank");
	var a212Text = document.createTextNode("by - " + authorName);
	a212.appendChild(a212Text);
	
	a2211.setAttribute("target", "_blank");
	var p2212Text = document.createTextNode("\u2665 " + upVotes);
	p2212.appendChild(p2212Text);
	
	var p222Text = document.createTextNode(timePosted);
	p222.appendChild(p222Text);
	
	a11.appendChild(img111);
	div1.appendChild(a11);
	div.appendChild(div1);
	
	p211.appendChild(a211);
	div21.appendChild(p211);
	p212.appendChild(a212);
	div21.appendChild(p212);
	div2.appendChild(div21);
	
	div221.appendChild(p2212);
	div221.appendChild(p2211);
	div221.appendChild(a2211);
	div22.appendChild(div221);
	div2.appendChild(div22);
	
	div22.appendChild(p222);
	div2.appendChild(div22);
	
	div.appendChild(div2);
	
	$("#posts").append(div);
} //end storyCreator

}); //end document.ready

// Start of Elapsed Days
$(document).ready(function() {
	elapsedDays();
	
	function elapsedDays() {
		var oneDay = 24*60*60*1000;
		var creationDate = new Date("2016-01-21");
		var today = new Date();
		var elapsedDays = Math.round(Math.abs((today.getTime() - creationDate.getTime())/(oneDay)));
		
		var day;
		if (elapsedDays === 1 || elapsedDays === 0) {
			day = "day";
		} else {
			day = "days";
		}
		
		creationDate = creationDate.toString().slice(0,15);
		
		$("#elapsedDays").append("<h4><small>Created " + elapsedDays + " " + day + " ago since " + creationDate + "</small></h4>");
	} //end function elapsedDays()
		
});//end document.ready











