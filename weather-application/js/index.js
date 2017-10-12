"use strict";

$(document).ready(function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var latitute = position.coords.latitude;
			var longitude = position.coords.longitude;
			$.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitute, function (json) {
				var response = json.weather[0].description;
				$("#currentTemp").html("<h2> " + Math.round("" + json.main.temp) + "*C </h2>");
				$("#city").html("" + json.name);
				$("#weatherIcon").html("<img id=\"actualIcon\" src=\"" + json.weather[0].icon + "\" class=\"img-responsive filter\">");
				$("#maxTemp").html('<span class="glyphicon glyphicon-arrow-up white"></span> <h2> ' + ("" + json.main.temp_max) + "*C </h2>");
				$("#minTemp").html('<span class="glyphicon glyphicon-arrow-down white"></span> <h2> ' + ("" + json.main.temp_min) + "*C </h2>");
				$("#wind").html('<img src="https://image.ibb.co/jbcfeQ/weather_windy_256.png" class="img-responsive filter" id="myWind"> <p> ' + Math.round("" + json.wind.speed) + " mph</p>");
				$("#visibility").html('<span class="glyphicon glyphicon glyphicon-sunglasses white"></span> <p> ' + Math.round(("" + json.visibility) / 1609.344) + " miles </p>");
				var riseUtcSeconds = "" + json.sys.sunrise;
				var riseDate = new Date(0);
				riseDate.setUTCSeconds(riseUtcSeconds);
				var setUtcSeconds = "" + json.sys.sunset;
				var setDate = new Date(0);
				setDate.setUTCSeconds(setUtcSeconds);
				$("#sunrise-sunset").html('<img src="https://image.ibb.co/cn9TeQ/172009_200.png" class="img-responsive filter" id="mySun"> <p>' + riseDate.getHours() + ":" + riseDate.getMinutes() + ":" + riseDate.getSeconds() + " am <br />" + setDate.getHours() + ":" + setDate.getMinutes() + ":" + setDate.getSeconds() + " pm </p>");
				$("#farBtn").on("click", function () {
					var curCel = Math.round("" + json.main.temp);
					var curMaxCel = "" + json.main.temp_max;
					var curMinCel = "" + json.main.temp_min;
					var curFar = Math.round(curCel * (9 / 5) + 32);
					var curMaxFar = Math.round(curMaxCel * (9 / 5) + 32);
					var curMinFar = Math.round(curMinCel * (9 / 5) + 32);
					$("#currentTemp").html("<h2> " + curFar + "*F </h2>");
					$("#maxTemp").html('<span class="glyphicon glyphicon-arrow-up white"></span> <h2> ' + curMaxFar + "*F </h2>");
					$("#minTemp").html('<span class="glyphicon glyphicon-arrow-down white"></span> <h2> ' + curMinFar + "*F </h2>");
				});
				$("#celBtn").on("click", function () {
					var curCel = Math.round("" + json.main.temp);
					var curMaxCel = "" + json.main.temp_max;
					var curMinCel = "" + json.main.temp_min;
					var curFar = Math.round(curCel * (9 / 5) + 32);
					var curMaxFar = Math.round(curMaxCel * (9 / 5) + 32);
					var curMinFar = Math.round(curMinCel * (9 / 5) + 32);
					$("#currentTemp").html("<h2> " + curCel + "*C </h2>");
					$("#maxTemp").html('<span class="glyphicon glyphicon-arrow-up white"></span> <h2> ' + curMaxCel + "*C </h2>");
					$("#minTemp").html('<span class="glyphicon glyphicon-arrow-down white"></span> <h2> ' + curMinCel + "*C </h2>");
				});
			});
		});
	}
});