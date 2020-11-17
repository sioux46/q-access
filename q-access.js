
// q-access.js

$(window).on("load", function() {
	var version = navigator.platform + ' ' + navigator.userAgent;
	$.ajax({
		url: 'connection_count.php',
		type:'post',
		data: {'version':version}
	});
});
//***********************************************  R E A D Y **********************
$(document).ready(function() {

//	BODY
	$("body").css({"margin-left":"3%", "margin-right":"3%"});
	$("p").css({"font-size":"1.15em"});  // .addClass("text-info")

	$(".my-container").css({"margin-left":"auto", "margin-right":"auto", "max-width":700});

	$("blockquote").css({"font-size":16});
//	DATE & TIME	& VERSION
	$("#_date").css({"display":"none"}).attr({"name":"_date", "value":dateTime().date});
	$("#_time").css({"display":"none"}).attr({"name":"_time", "value":dateTime().time});
	$("#_version")
				.css({"display":"none"})
				.attr({
					"name":"_version",
					"value":navigator.platform + ' ' + navigator.userAgent});
//------------------------------------------------------------------
	$("input").attr({"autocomplete":"off"});

//	REP-GROUP
	$(".rep-group").css({
					"border":"5px solid #E8E8E8",
					"border-right":0,
					"border-bottom":0,
					"border-left":0,
					"padding":6,
					"margin-top":8,
					"margin-right":0,
					"margin-left":0,
					"margin-bottom":12,
					"background":"#F4F4F4"});
//	RADIO
	$(".scale-radio-group, .scale-radio-group4, .scale-radio-group3, .scale-radio-group6")
					.addClass("row");
	$(".scale-radio-group input, .scale-radio-group4 input, .scale-radio-group3 input, .scale-radio-group6 input")
					.attr({"type":"radio"});
	$(".scale-radio-group div, .scale-radio-group4 div, .scale-radio-group3 div, .scale-radio-group6 div")
					.css({"padding":0, "text-align":"center"});

	$(".scale-radio-group div").addClass("col-xs-2");
	$(".scale-radio-group4 div").addClass("col-xs-3");
	$(".scale-radio-group3 div").addClass("col-xs-4");
	$(".scale-radio-group6 div").addClass("col-xs-2");
	$(".scale-radio-group").find("div").filter(":nth-child(4n+1)").addClass("col-xs-offset-2");

	$(".scale-label-group").addClass("row");
	$(".scale-label-group").find("label").addClass("col-xs-6");
	$(".scale-label-group").find("label").filter(":nth-child(2n+0)").css({"text-align":"right"});
//	INPUT
	$(".scale-text-input-group, .scale-number-input-group").addClass("row");
	$(".scale-text-input-group input, .scale-number-input-group input")
			.addClass("col-xs-6").addClass("col-xs-offset-1")
			.css({"padding":0});
	$(".scale-text-input-group input").attr({"type":"text"});
	$(".scale-number-input-group input").attr({"type":"number", "min":1});
	$(".scale-date-input-group input").attr({"type":"date"});
//	CHECKBOX
	$(".scale-checkbox-group input").attr({"type":"checkbox", "value":"1"});
	$(".scale-checkbox-group").addClass("row");
//	$(".scale-checkbox-group input").addClass("col-xs-3").css({ "text-align":"center"});
	$(".scale-checkbox-group div").addClass("col-xs-1")
								  .addClass("col-xs-offset-1")
								  .css({"text-align":"right"});
	$(".scale-checkbox-group label").addClass("col-xs-10").css({"padding":0});
//------------------------------------------------------------------
//	HEADER
	$("h2").css({"color":"#FFF", "background":"#222", "padding":10});
	$("h3").css({"color":"#222", "background":"#EEE", "padding":4});
//--------------------------------------------------------------------
//	BLOQUAGE RETURN
	$(window).keydown(function(event) {
		if(event.keyCode == 13) {
		  event.preventDefault();
		}
	});

});



//**************************************************************************************
//    F U N C T I O N S
//**************************************************************************************
function verifForm(event) {						//  AVANT SUBMIT
	if (event.type == 'submit') {
		$("button[type='submit']").attr({"disabled":"disabled"});
		return true;
	}
	else return false;
}
//**************************************************************************************
function dateTime() {
	var dt = new Date();
	var date = dt.getDate().toString();
	if (date.length == 1) date = '0' + date;
	var month = (dt.getMonth() + 1).toString();
	if (month.length == 1) month = '0' + month;
	var year = dt.getYear() + 1900;
	
	date = year + '-' + month + '-' + date;
	var time = dt.toTimeString().match(/^(.{8})/)[1];
	return {date:date, time:time};
}
