//Local JavaScript for Local Weather App
var date = document.getElementById("today");
date.innerHTML = new Date().toDateString();

$(document).ready(function() {

  getLocation();
  var appKey = "19dd6c1db71b0beae41772bc6b2082a8";
  
  function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      console.log(location);
      
      $('#location')
        .append(location.city + ", ")
        .append(location.region);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;

    }, "jsonp");

  }

  function getWeather(loc, units) {
    lat = loc.split(",")[0] //.toString();
    lon = loc.split(",")[1] //.toString();

    var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + units + "&APPID=" + appKey;

    console.log(weatherApiUrl);

    $.get(weatherApiUrl, function(weather) {
      var windDir = convertWindDirection(weather.wind.deg);
      var temperature = weather.main.temp;
      var unitLabel;

      //label based in imperial vs metric units
      if (units === "imperial") {
        unitLabel = "F";
      } else {
        unitLabel = "C";
      }

      temperature = parseFloat((temperature).toFixed(1));

      console.log(weather);

      $('#icon')
        .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");

      $('#temp').append(temperature + " " + unitLabel);
      $('#conditions').append(weather.weather[0].description);
      $('#wind').append(windDir + " " + weather.wind.speed + " knots");

    }, "jsonp");

  };

  function convertWindDirection(dir) {
    var rose = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var eightPoint = Math.floor(dir / 45);
    return rose[eightPoint];
  }

  function getUnits(country) {
    var imperialCountries = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCountries.indexOf(country) === -1) {
      var units = 'metric';
    } else {
      units = 'imperial';
    }

    console.log(country, units);
    return units;
  }

});