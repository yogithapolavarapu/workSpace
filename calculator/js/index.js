var result="";
$(document).ready(function(){
  
  $(".button").click(function(){
    var number = $(this).attr("value");
    
    if(number === "C"){
      result = "";
      $(".screen").val("");
    }
    
    else if(number === "CE"){
      res = res.slice(0, -1);
      $(".screen").val(result);
    }
    
    else if(number === "=") {
      result = eval(result);
      $(".screen").val(result);
      result = "";
    }
    
    else if(number === "n"){
      result = eval(result) * -1;
      if (isNaN(result)){
        res = "";
      }
      $(".screen").val(result);
    }
    else{
      result += number;
      $(".screen").val(result);
    }
    
  });
});