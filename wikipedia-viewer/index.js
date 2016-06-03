$(document).ready(function(){
  
  
    var $div1 = $(".input_effect");
    var $div2 = $(".under_effect");
    var $input = $("#search");

  
  $input.focus(function(){
    $div1.css("transform","translateY(-20px)");
    $div1.css("webkit-transform","translateY(-20px)");
    $div2.css("width","200px");    
  });
  $input.blur(function(){
    if($input.val().length === 0){
      $div1.css("transform","translateY(0);");
      $div1.css("webkit-transform","translateY(0)");
      $div2.css("width","0");
    }
  })
  
  function getResult(word) {
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+word+'&limit=10&namespace=0&format=json&callback=?';
    $.getJSON(url, function (data) {
      $(".list").html("");
      for(var i = 0; i <= 3; i++) {
        $(".list").append(
          "<a href='"+data[3][i]+"' target='_blank'><div class='result'><h5>"+data[1][i]+"</h5><p>"+data[2][i]+"</p></div></a>"
        )
      }
    });
  } 
    $("#search").keyup(function (e)       {
       $(".list").show("slow");
        getResult($('#search').val());
      
    });
});