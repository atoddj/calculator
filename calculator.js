//calculator.js
var calculation;
$("a").click(function(){
	var value = $(this).html();
	if (value=="=") {
		//perform math when equal sign is clicked
		calculation = Number(eval($("#calcInput").val())); // learned about eval function
		$("#calcInput").val(calculation);

	} else if(value=="CLR") {
		$("#calcInput").val('');
	} else {
		$("#calcInput").val($('#calcInput').val() + value); // sets calculator display
	}
	
});