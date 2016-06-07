$(document).ready(function() {
 
  var workSeconds = 1500;
  var funSeconds = 300;
  var switcher = true;

  var Clock = {
    totalSeconds: 0,
    changeW: function(){
      var min = Math.floor(workSeconds / 60 % 60);      
      return min;
    },
    changeF: function(){
      var min = Math.floor(funSeconds / 60 % 60);      
      return min;
    },    
    start: function() {      
      var self = this;
      if(self.totalSeconds === 0){
          self.totalSeconds = workSeconds;
        }
      this.interval = setInterval(function() {        
        if (self.totalSeconds > 0) {
          self.totalSeconds -= 1;
        } else {
          if (switcher===true) {
            $(".info").text("Relax..");
            self.totalSeconds = funSeconds;
            switcher = false;
          } else {
            $(".info").text("Work!!!");
            self.totalSeconds = workSeconds;
            switcher = true;
          }
        }
        var sec = (self.totalSeconds % 60);
        var min = Math.floor(self.totalSeconds / 60 % 60);

        if (sec < 10) {
          sec = "0" + sec;
        }
        if (min < 10) {
          min = "0" + min;
        }
        $(".time").text(min + " : " + sec);
      }, 1000);
    },

    pause: function() {
      clearInterval(this.interval);
      delete this.interval;
    },
    resume: function() {
      if (!this.interval) {
        this.start();
      }
    }
  };
  $('#pause').click(function() {
    Clock.pause();
    $("#pause").hide();
    $("#start").show();
  });
  $('#start').click(function() {
    if(Clock.totalSeconds === 0){
      $(".info").text("Work!");
    }
    Clock.resume();
    $(".tog").toggle();
    $("#start").text("Resume");
    $(".work_thingy").css("display", "none");
    $(".hello").css("display","block");
  });
  $('#addWork').click(function() {
    workSeconds += 60;
    $("#minWork").text(Clock.changeW);
  });
  $('#subWork').click(function() {
    if (workSeconds > 60) {
      workSeconds -= 60;
    }
    $("#minWork").text(Clock.changeW);
  });$('#addBreak').click(function() {
    funSeconds += 60;
    $("#minBreak").text(Clock.changeF);
  });
  $('#subBreak').click(function() {
    if (funSeconds > 60) {
      funSeconds -= 60;
    }
    $("#minBreak").text(Clock.changeF);
  });
  $("#stop").click(function(){
    Clock.pause();
    $(".time").text("-- : --");
    $(".hello").css("display","none");
    $(".work_thingy").css("display", "block");
    if($("#start").css('display') == 'none'){
      $(".tog").toggle();
    }
    $("#start").text("Start");
    workSeconds = $("#minWork").text() * 60;
    funSeconds = $("#minBreak").text() * 60;
    Clock.totalSeconds = 0;
   
    $(".info").text("");
  });
});