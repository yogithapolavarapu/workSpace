
$(document).ready(function(){
  $('#jump_to_profile_area').smoothScroll({speed:1000});
  $("button").click(
	
	function(){
		var area = $(this).attr("href");
		$(".content").hide();
		$(area).show("slow");
  	});
  
  $("#aboutme").click();
  
});
