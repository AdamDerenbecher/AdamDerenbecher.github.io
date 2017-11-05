"use strict";

$(document).ready(function () {
	$("input").focus(function () {
		$("#myForm").animate({
			width: "80%",
			border: "solid"
		}, "slow");
	});

	var resultHtml;

	$("#searchButton").click(function f() {
		$("#myForm").animate({
			width: "80%",
			border: "solid",
			top: "10px"
		}, "slow");
		$.ajax({
			url: "https://en.wikipedia.org/w/api.php",
			data: {
				format: "json",
				action: "opensearch",
				search: $("#searchBox").val(),
				namespace: 0,
				limit: 10
			},
			dataType: "jsonp",
			success: function success(data) {
				var resultCount = data[1].length;
				var searchTerm = data[0];

				resultHtml = "<div class=\"list-group\">";

				var i;
				for (i = 1; i < resultCount; i++) {
					var resultTitle = data[1][i];
					var resultDesc = data[2][i];
					var resultLink = data[3][i];

					var oneResult = "\n\t\t\t\t\t\t  <a href=\"" + resultLink + "\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex w-100 justify-content-between\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"mb-1\">" + resultTitle + "</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"mb-1\">" + resultDesc + "</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t";

					resultHtml += oneResult;
				}

				resultHtml += "</div>";
				$("#myForm").animate({
					width: "80%",
					marginTop: 0
				}, "slow");

				$("#resultDiv").html("" + resultHtml);
				$(".pre-scrollable").css("max-height", "80%");
				$("#resultDiv").slideDown("slow");
			}
		});

		return false;
	});
});