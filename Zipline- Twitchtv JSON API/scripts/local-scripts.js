//Local JavaScript for Twitchtv JSON API


$(document).ready(function() {
	
var twitchUrl = "https://api.twitch.tv/kraken/streams";
	
	$.getJSON(twitchUrl, function(data) {
		for (i = 0; i < 25; i++) {
			/*console.log(data.streams[i]);
			console.log(data.streams[i].channel.display_name);
			console.log(data.streams[i].preview.small);
			console.log(data.streams[i].channel.followers);
			console.log(("title: ") + data.streams[i].channel.title);
			console.log(("game: ") + data.streams[i].game);
			console.log(("URL: ") + data.streams[i].channel.url);*/
			var bC = document.getElementById("body-C"); //body container tag
			
			//Create Channel Container
			var cC = document.createElement("div");
			cC.setAttribute("class", "channel-container box");
			
			//Create Image
			var previewImg = document.createElement("img");
			var imgUrl = data.streams[i].preview.small;
			previewImg.setAttribute("src", imgUrl);
			previewImg.setAttribute("class", "channel-img");
			cC.appendChild(previewImg);
			
			//Create Middle Container
			var mC = document.createElement("div");
			mC.setAttribute("class", "channel-middle");
			cC.appendChild(mC);
				
				//Create Channel Name info
				var channelNameP = document.createElement("p");
				var channelNameText = document.createTextNode(data.streams[i].channel.display_name);
				channelNameP.appendChild(channelNameText);
				mC.appendChild(channelNameP);
				
				//Create Followers info
				var followersP = document.createElement("p");
				var followersV = document.createTextNode(("Followers: ") + (data.streams[i].channel.followers));
				followersP.appendChild(followersV);
				mC.appendChild(followersP);
			
			//Create Right Container
			var rC = document.createElement("div");
			rC.setAttribute("class", "channel-right");
			cC.appendChild(rC);
				
				//Create Current Stream Title + "a" + link url
				var currentStreamP = document.createElement("p");
				var currentStreamA = document.createElement("a");
				var currentStreamUrl = data.streams[i].channel.url;
				var currentStreamUrlS = currentStreamUrl.toString();
				currentStreamA.href = currentStreamUrlS;
				var currentStreamText;
				if (data.streams[i].channel.title != undefined) {
					currentStreamText = document.createTextNode(data.streams[i].channel.title); 
				} else {
					currentStreamText = document.createTextNode(data.streams[i].game);
				}
				currentStreamA.appendChild(currentStreamText);
				currentStreamP.appendChild(currentStreamA);
				rC.appendChild(currentStreamP);
				
				//Create Current Viewers
				var currentViewersP = document.createElement("p");
				var currentViewersV = document.createTextNode(("Current Viewers: ") + data.streams[i].viewers);
				currentViewersP.appendChild(currentViewersV);
				rC.appendChild(currentViewersP);
			
			//Append Current cC to Body
			bC.appendChild(cC);
			
		}
	}, "jsonp"); //end getJSON(twitchURL)
var fccUrl = "https://api.twitch.tv/kraken/streams/freecodecamp";
	$.getJSON(fccUrl, function(data) {
		/*console.log(data);
		console.log(data.display_name);
		console.log(data.followers);
		console.log(data.url);
		console.log(data.title);
		console.log(data.game);
		console.log(data.views);
		*/
		// add current followers
		var fccContainer = document.getElementById("fCC-container");
		var fccContainerM = document.getElementById("fccContainerM");
		var fccP2 = document.createElement("p");
		if (data.followers != undefined) {
		var fccP2Text = document.createTextNode(("Followers: ") + (data.followers));
		} else {
			var fccP2Text = document.createTextNode("_");
		}
		fccP2.appendChild(fccP2Text);
		fccContainerM.appendChild(fccP2);
		
		// create right container
		var fccContainerR = document.createElement("div");
		fccContainerR.setAttribute("class", "channel-right");
		fccContainer.appendChild(fccContainerR);
		
		// create current stream title + "a" + url
		var currentStreamFP = document.createElement("p");
		var currentStreamFA = document.createElement("a");
		if (data.url != undefined) {
		var currentStreamFUrl = data.url;
		var currentStreamFUrlS = currentStreamFUrl.toString();
		currentStreamFA.href = currentStreamFUrlS;
		}
		var currentStreamFText;
		if (data.title != undefined) {
			currentStreamFText = document.createTextNode(data.title);
		} else if (data.game != undefined) {
			currentStreamFText = document.createTextNode(data.game);
		} else {
			currentStreamFText = document.createTextNode("Offline");
		}
		currentStreamFA.appendChild(currentStreamFText);
		currentStreamFP.appendChild(currentStreamFA);
		fccContainerR.appendChild(currentStreamFP);
		
		// create views
		var viewsP = document.createElement("p")
		if (data.views != undefined) {
		var fccViews = document.createTextNode(("Views: ") + (data.views));
		} else {
			fccViews = document.createTextNode("_");
		}
		viewsP.appendChild(fccViews);
		fccContainerR.appendChild(viewsP);
		
	}, "jsonp"); //end getJSON(fccUrl)
	
	

}); //end document.ready