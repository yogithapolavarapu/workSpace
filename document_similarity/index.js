//remove duplicates from inputs : percentage out of bounds




$(document).ready(function(){
  clear();
  //array to store words
  var array=[],storage=[];
  var k=0;
  //contents storage
  var content1=[],content2=[];
 var input1,input2;
 
//similarity checking  
  function checkSimilar(){
      //read the texts
    input1= $("textarea#screen1").val();
    input2=$("textarea#screen2").val();
  //to convert newlines or tabs or white spaces into another text
   input1= input1.replace(/(\r\n|\n|\r)/gm," ");
   input2= input2.replace(/(\r\n|\n|\r)/gm," ");
    
       console.log(input1);
 
    // check if user entered text in both areas
    if(input1 ===  "" || input2 === ""){
      alert("Please fill both the text areas");
      $("#level").html("Either or both areas was not filled");
    }
 //if not go ahead with checking
    else{               $("#level").html("Checking Similarity..");

  //get a variable count to raise to it for every match
         
    var count=0;
    //use split to enter the statement in words
    var array=input1.split(' ');
         
    //store the contents into an other
    for(var i=0;i<array.length;i++){
      content1[i]=array[i];
    }
console.log(content1);
    //remove duplicates
         $.unique(content1);
         console.log(content1);
         //using split to enter the statement into words
    var array=input2.split(' ');
         
    //store the contents into an other 
    for(var i=0;i<array.length;i++){
      content2[i]=array[i];
    }
         
         //remove duplicates from content2
         $.unique(content2);
         console.log(content2);
        //take the least length of both documents as the mnimal length
        console.log(content1.length);
        console.log(content2.length); if(content1.length>content2.length){
         var minLength=content1.length;
          }
         else{
           var minLength= content2.length;
         }
           
    //compare both content1 and content 2 for similarities
    for(var i=0;i<minLength;i++){
      for(var j=0;j<minLength;j++){
        if(content1[i]===content2[j]){
          //store the word
          storage[k]=content1[i];
          k=k+1;
          //raise count if match
          count=count+1;
        }
      }
    }console.log(count);
         console.log(minLength);
    //turning it into a 2digit value
    count=count*200/(content1.length+content2.length);
    level(count);
         console.log(storage);
         $("#words").html(storage);
         storage=[];
         content1=[];
         content2=[];
         console.log(content1);
         console.log(storage)
         console.log(count);
    }
  }
  
  function level(count){
    $('#percentage').html(count+"%");
    if(count>75){
      $('#level').html('similarity level:high');
    }
    else if(count>50){
       $('#level').html('Similarity level:medium');
    }
    else{
        $('#level').html('similarity level :low');
    }
  }
  
  $('#phrase_check').click(function(){
   
  checkSimilar();
  }); 
  function clear(){
    $('#screen1').val("");
    $('#screen2').val("");
     $('#level').html("");
    $('#percentage').html("");
    $('#words').html("");
  }
  $('#clear').click(function(){
    clear();
  });
});
