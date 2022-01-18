 $(document).ready(function() {
	 $("#forminfo").submit(function(){
		
		 var dados = jQuery( this ).serialize();
		 
		$.ajax({
			url: 'controllers/response.php',
			cache: false,
			type: "POST",  
			data: dados,

			success: function(msg){
				
				$("#results").empty();
				$("#results").append(msg);
			}
			
		});
		 
		 return false;
	 });
 
 });