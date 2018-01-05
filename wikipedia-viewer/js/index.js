//make sure all of this script is ready when webpage loads
$(document).ready(function() {
	//when the search button is clicked
	$("#searchButton").click(function() {
		var searchTerm = $("#searchBox").val();
		var resultsApiUrl = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&namespace=0&limit=10";
		console.log("you searched for : " + "\n" + searchTerm);
		$.get(resultsApiUrl,
			    function(data, status) {
						console.log("The results of your search are : " + "\n" + JSON.stringify(data));
						var resultCount = data[1].length;
						console.log("The number of your results are : " + "\n" + resultCount);
						function getImage(myData) {
							var placeHolder = myData.query.pages;
							var resultImage = placeHolder[Object.keys(placeHolder)[0]].thumbnail.source;
							return resultImage;
						} //getImage function
						for (var i = 0; i < resultCount; i++) {
							console.log("getting result for this number : " + i);
							var getUrl = "https://cors-anywhere.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&titles=" +
							data[1][i] +
							"&prop=pageimages&format=json&pithumbsize=100";
							$.get(getUrl,
									function(data) {
										var imgUrl = getImage(data);
										console.log(imgUrl);
									}
							)
						} // for loop
				} // results function
		); //results get
	}); //button
}); //ready