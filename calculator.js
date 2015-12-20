//calculator.js
var calculation;
$("a").click(function(){
	var value = $(this).html(); // gets the value of the button pushed
	if (value=="=") { 
		calculation = Number(eval($("#calcInput").val())); //perform math when equal sign is clicked
		$("#calcInput").val(calculation); // updates display to show answer of calculation

	} else if(value=="CLR") {
		$("#calcInput").val(''); //resets the value of the calculator face
	} else {
		$("#calcInput").val($('#calcInput').val() + value); // sets calculator display if the button pushed is not clear or equal sign.
	}
});