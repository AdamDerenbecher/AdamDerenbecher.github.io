"use strict";

$(document).ready(function () {
	$("#myForm").focus(function () {
		$("#myForm").animate({ width: "80%",
			marginTop: 0 }, "slow");
	});
	$("input").focus(function () {
		$("#myForm").animate({ width: "80%",
			border: "solid",
			top: "10px" }, "slow");
	});
});