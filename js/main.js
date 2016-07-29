$(document).ready(function(){

		$('#registration-form').validate({
	    rules: {
		  checkbox1: "required",
		  checkbox2: "required",
		  checkbox3: "required",
		  checkbox4: "required"
	    },
	    	highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });

});