var data;

fetch("https://api.punkapi.com/v2/beers",{
	method:"GET",

}).then(function(response){
		if (response.ok){
	return response.json();
}

}).then(function(json){
	data = json;
		
}).catch(function (error){
	 console.log("Request failed:" + error.message);
});
