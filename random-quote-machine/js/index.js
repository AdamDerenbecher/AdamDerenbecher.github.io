"use strict";

$(document).ready(function () {
	$("#getMessage").on("click", function () {
		$.getJSON("https://talaikis.com/api/quotes/random", function (json) {
			var html = json.quote + " <footer class=\"blockquote-footer\"> " + json.author + " on " + ("<cite title=\"Source Title\"> " + json.cat + " </cite> </footer>");
			$("#quote").html(html);
			var thisQuote = json.quote;
			$(".actionTweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(thisQuote.substring(0, 140)));
		});
	});
});