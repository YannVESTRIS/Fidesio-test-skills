// JavaScript Document
var strFieldDefaultVal = "Votre email";

$(document).ready ( function () {
	//Set fields default values
	$("input[type='text']").val(strFieldDefaultVal);
	//Emptying fields on focus
	$("input[type='text']").focus(function () {
		if ($(this).val() === strFieldDefaultVal) {
			$(this).val('');
		}
	});
	//Populate fields on blur
	$("input[type='text']").blur (function () {
		if (!$(this).val()) {
			$(this).val(strFieldDefaultVal);
		}	
	});
});