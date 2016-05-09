// Local JS for Vizualize Data with a Bar Chart

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 

//-----------Get GDP Data----------
var gdpDataUrl = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
var data1 = [];
var dataY = [];
var dataAll = [];
$.get(gdpDataUrl, function(json) {
	console.log(json);
	for (var i = 0; i < json.data.length; i++) {
	data1.push(json.data[i][1]);
	dataY.push(json.data[i][0]);
	dataAll.push(json.data[i]);
	}
	var yLen = dataY.length;
	for (var j = 0; j < yLen; j++) {
		dataY[j] = dataY[j].slice(0,4);
	}
	//console.log(dataAll);
	//console.log(data1);
	//console.log(dataY);
	makeChart(data1, dataY, dataAll);
}, 'json');

//---------Make Vertical Bar Chart-----------	
function makeChart(data1, dataY, dataAll) {
	var w = 800;
	var h = 600;
	var barPadding = 1;
	var padding = 30;
	
	var xScale = d3.scale.linear()
		.domain([0, dataY.length])
		.range([(padding*2), w - padding * 2]);
	
	var xScaleAx = d3.scale.linear()
		.domain([d3.min(dataY), d3.max(dataY)])
		.range([padding*2, w - padding * 2]);
		
	var yScale = d3.scale.linear()
		.domain([0, d3.max(data1)])
		.range([padding, h - padding*2]);
	
	var yScaleAx = d3.scale.linear()
		.domain([d3.max(data1), d3.min(data1) - 1000])
		.range([padding, h - padding]);

	
	// ----x Axis defined----	
	var xAxis = d3.svg.axis()
		.scale(xScaleAx)
		.orient("bottom")
		.ticks(20); // Set ticks between min/max ticks
		
	//----y Axis defined----
	var yAxis = d3.svg.axis()
		.scale(yScaleAx)
		.orient("left")
		.ticks(15);
	
	//create tooltip
	var tip = d3.tip()
		.attr("class", "d3-tip")
		.offset([-10, 0])
		.html(function(d) { return '<span>' + d[0] + ', $' + Math.floor(d[1])+ ' Billion</span>';});
	
	var svg = d3.select("#chart").append("svg")
		.attr("width", w)
		.attr("height", h)
		
	svg.call(tip); //call tooltip
	
	svg.selectAll("rect")
		.data(data1)
		.enter()
		.append("rect")
		.attr("x", function(d,i) {return xScale(i); })
		.attr("y", function(d) {return h - padding - yScale(d);})
		.attr("width", w/data1.length/* - barPadding*/)
		.attr("height", function(d) {return yScale(d);})
		.attr("fill", "rgba(100,149,237, 0.6)")
		.data(dataAll)
		.on("mouseover", tip.show)
		.on("mouseout", tip.hide);
		//.text(function(d) { return d; });
	//----x Axis inserted----
	svg.append("g")
		.attr("class", "axis") // axis class assigned to the g element
		.attr("transform", "translate(0," + (h - padding) + ")")
		.call(xAxis);
	//----y Axis inserted----
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + (padding*2)+",0)")
		.call(yAxis);
		
	svg.append("text")
		.attr("x", 400)
		.attr("y", 598)
		.style("text-anchor", "middle")
		.style("fill", "orange")
		.style("font-size", "8px")
		.text("Units: Billions of Dollars Seasonal Adjustment: Seasonally Adjusted Annual Rate Notes: A Guide to the National Income and Product Accounts of the United States (NIPA)");
	
	 svg.append("text")
		.attr("transform", "translate(64,200) rotate(-90)")
        .attr("y", 0)
        .attr("x", 0)
        .attr("dy", "1em")
		.style("fill", "orange")
        .style("text-anchor", "middle")
        .text("Gross Domestic Product, USA (Billions)");

}

}); //end document.ready
