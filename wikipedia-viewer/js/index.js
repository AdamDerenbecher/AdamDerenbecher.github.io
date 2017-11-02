"use strict";

$(document).ready(function () {
	$("#myForm").focus(function () {
		$("#myForm").animate({
			width: "80%",
			marginTop: 0
		}, "slow");
	});
	$("input").focus(function () {
		$("#myForm").animate({
			width: "80%",
			border: "solid",
			top: "10px"
		}, "slow");
	});
	$("#myForm").submit(function () {
		$("#resultDiv").html("\n\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h5 class=\"mb-1\">List group item heading</h5>\n      <small>3 days ago</small>\n    </div>\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n    <small>Donec id elit non mi porta.</small>\n  </a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h5 class=\"mb-1\">List group item heading</h5>\n      <small class=\"text-muted\">3 days ago</small>\n    </div>\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n    <small class=\"text-muted\">Donec id elit non mi porta.</small>\n  </a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h5 class=\"mb-1\">List group item heading</h5>\n      <small class=\"text-muted\">3 days ago</small>\n    </div>\n    <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n    <small class=\"text-muted\">Donec id elit non mi porta.</small>\n  </a>\n</div>\n\t\t\t\t\t\t\t\t\t\t\t\t ");
		$("#resultDiv").slideDown("slow");
		return false;
	});
});