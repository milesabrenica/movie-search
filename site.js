function movieFunction(){
	$('#results').html("");

	var userInput = $("#searchform").val();

	$.ajax({
		type: "GET", 
		dataType: "jsonp",
		url: "http://api.themoviedb.org/3/search/movie",
		data: "api_key=51a0abce642402e7b8d43b2081302e77&query="+userInput,
		success: function(serverResponse){
			console.log(serverResponse);
			
			var posterImg = "";
				
			for(var i = 0; i < serverResponse.results.length; i++){  					
			
			serverResponse.results[i].poster_path;  
			
			if(serverResponse.results[i].poster_path == null) {
					posterImg = "img/placeholder.png";
				} 

				else{
					posterImg = "http://image.tmdb.org/t/p/w154"+serverResponse.results[i].poster_path;
				}


			$("#results").append('<div class="movie"><img class="poster" src="'+posterImg+'"><div class="title">'+serverResponse.results[i].title+'</div></div>');	
			};
		}
	});	
}

$(document).ready(function(){

	$("#submit").click(function(){
		movieFunction();
	});

	$('#searchform').keypress(function (e) {
	  if (e.which == 13) {
	  	movieFunction();	
	  }
	});
});


