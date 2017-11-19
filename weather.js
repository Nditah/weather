// Weather.js

$(document).ready( function() {
	//alert("Whatz up!") ;
	$("#submitCity").click( function() {
		
		const city = $("#city").val() ; //London,uk
		// city = city + "," + country ;
		const apiId = "e991e1db6b5fdbc1115d0be452700281" ;
		const units = "metric" ; // standard, imperial 
		
		if(city != "" ){
			$.ajax({ 
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&APPID=" + apiId ,
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					let info = extract(data);
					$("#show").html(info) ;
					$("#city").val('') ;
				}
				
			}) ;
			
		}else{
			$("#error").html(' <div class="alert alert-warning alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> City field cannot be empty.</div> ') ;
		}
		
	});
	
});

function format_time(time_to_show){
	// var time_to_show = 1509968436; // unix timestamp in seconds
	var t = new Date(time_to_show * 1000);
	var formatted = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
	return formatted ;
}

function extract(data){
	// img http://openweathermap.org/img/w/10d.png 
	let icon = data.weather[0].icon ;
	let image = "<img src='http://openweathermap.org/img/w/" + icon + ".png' />";
	return "<h2> Current Weather for " + data.name + ", " + data.sys.country + "</h2> " +
					"<table class='table table-striped table-hover table-condensed table-sm' style='text-align:left;'> " + 
					"<tr><th> COORD.LON </th><td>" + data.coord.lon + "</td></tr>" +
					"<tr><th> COORD.LAT </th><td>" + data.coord.lat + "</td></tr>" +
					"<tr><th> WEATHER.ID </th><td>" + data.weather[0].id + "</td></tr>" +
					"<tr><th> WEATHER.MAIN </th><td>" + data.weather[0].main + "</td></tr>" +
					"<tr><th> WEATHER.DESCRIPTION </th><td>" + data.weather[0].description + image + "</td></tr>" +
					"<tr><th> TEMPERATURE </th><td>" + data.main.temp + " Celsius</td></tr>" +
					"<tr><th> PRESSURE </th><td>" + data.main.pressure + " hPa</td></tr>" +
					"<tr><th> HUMIDITY </th><td>" + data.main.humidity + " %</td></tr>" +
					"<tr><th> TEMP_MIN </th><td>" + data.main.temp_min + "&deg;C</td></tr>" +
					"<tr><th> TEMP_MAX  </th><td>" + data.main.temp_max  + "&deg;C</td></tr>" +
					"<tr><th> SEA_LEVEL </th><td>" + data.main.sea_level + " hPa</td></tr>" +
					"<tr><th> GRND_LEVEL </th><td>" + data.main.grnd_level + "</td></tr>" +
					"<tr><th> WIND.SPEED </th><td>" + data.wind.speed + "</td></tr>" +
					"<tr><th> WIND.DEG </th><td>" + data.wind.deg + "&deg; </td></tr>" +
					"<tr><th> CLOUDS.ALL </th><td>" + data.clouds.all + " %</td></tr>" +
					"<tr><th> TIME OF DATA </th><td>" + format_time(data.dt) + " UTC</td></tr>" +
					"<tr><th> SYS.MESSAGE</th><td>" + data.sys.message + "</td></tr>" +
					"<tr><th> SYS.COUNTRY</th><td>" + data.sys.country + "</td></tr>" +
					"<tr><th> SYS.SUNRISE </th><td>" + format_time(data.sys.sunrise) + " UTC</td></tr>" +
					"<tr><th> SYS.SUNSET </th><td>" + format_time(data.sys.sunset) + " UTC</td></tr>" +
					"<tr><th> CITY ID </th><td>" + data.id + "</td></tr>" +
					"<tr><th> NAME </th><td>" + data.name + "</td></tr></table>" ;

}