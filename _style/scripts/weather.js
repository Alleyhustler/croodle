$.get("https://api.weather.gov/gridpoints/TSA/35,95/forecast/hourly?units=us", function (json) {
  $(".wtemp").html(json.properties.periods[0].temperature + json.properties.periods[0].temperatureUnit);
  $(".wweather").html(json.properties.periods[0].shortForecast);
  $(".winddirection").html(json.properties.periods[2].windDirection);

  $(".wwind").html(json.properties.periods[0].windSpeed);
});
$.get("https://api.weather.gov/alerts/active/zone/ COUNTIES", function (json) {
  $(".alerts").html("<div class='flex' style='margin-top:5px;'>" + "<div class='cont'>alerts</div>" + "<div class='cont flex-item'>" + "<b><em>" + json.features[0].properties.event + "</em></b>" + "</div>" + "</div>");
});

// $.get("https://api.wea ther.gov/gridpoints/TSA/35,95/forecast/hourly?units=us", function (json) {
//   $(".wtemp").html(json.properties.periods[0].temperature + json.properties.periods[0].temperatureUnit);

// var grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91];

// var sum = 0;
// for (index = 0; index < grades.length; index++){
// sum += grades[index];
// 	console.log(sum);
// 	}
// var average = sum/grades.length;
// 	console.log("The average is " + average);
// document.getElementById('grades-avg').innerHTML=average;

// });
