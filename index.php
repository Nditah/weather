<!doctype html>
<html lang="en">
  <head>
    <title>Weather App</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		
<style>

#userform {
	margin: auto ;
	width: 50% ;
	text-align: center ;
	
}

input[type="input"]{
	height: 40px;
	font-size:20px;
}

#submitCity {
	height: 40px;
	font-size:20px;
	font-weight:bold;
}

#show {
	margin: auto ;
	width: 50% ;
	text-align: center ;
}
</style>
		
</head>
<body>
	
	<div class="jumbotron jumbotron-fluid row" style="margin-button:0px; color:white; background-color:#4aa1f3;">
		<div class="container text-center">
			<h1 class="display-3"> Current Weather</h1>
			<p class="lead">Get the current weather of every city </p>
		</div>
	</div>

	<div class="container">


			<h2 class="text-primary" style="text-align:center; "> Enter City Name </h2>
		<div class="row" style="text-align:center; "><span id="error"></span> </div>
				<div class="row"  style="text-align:center; margin:auto; width: 30% ;" >
		<div class="form-inline form-group " >
			<input type="text" class="form-control input" id="city" name="city" placeholder="Enter city name" required />
			&nbsp; <button type="submit" class="button btn btn-primary" id="submitCity"> Submit </button>
		</div>
		</div>
		
		<div class="row">
			<span id="error"></span>
			<div class="table table-responsive col-md-6 col-sm-12" id="show" ></div> 
		</div>
		
	</div>
	
<!-- Optional JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script src="weather.js"></script>

</body>
</html>