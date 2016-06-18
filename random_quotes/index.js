$(document).ready(function(){
  
  var quotes=[
    {
      quote:"Despite all that we've done, all those we've lost, we're still here. You're not alone.",
      character:"- Hayley, The Originals",
                    show:"url(http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/05/20/originals-season-3-spoilers.jpg)"
    },
    {
      quote:"Love will make you strong. It will make you the man that I know you want to be, and you have to remember that because I won't be here to remind you.",
      character:"- Camille, The Originals",
      show:"url(http://alloyentertainment.com/wp-content/uploads/2012/12/leah-pipes-the-originals.jpg)"
    },
    
    {
      quote:"What's worth dying for, if not love?",
      character:"- Klaus Mikaelson, The Originals",
      show:"url(http://images6.fanpop.com/image/photos/37000000/Klaus-Mikaelson-the-originals-tv-show-37049254-1366-768.png)"
    },
    {
      quote:"You know, difficulties aside, I value my family above everything. I am sorry that yours failed you. ",
      character:"- Elijah Mikaelson, The Originals",
      show:"url(http://images6.fanpop.com/image/photos/36000000/The-Originals-Wallpaper-the-originals-36002540-1920-1080.jpg)"
    },
    {
      quote:"Love is the ultimate con.",
      character:"- Mozzie, White Collar",
      show:"url(http://vignette3.wikia.nocookie.net/whitecollar/images/5/59/Mozzie_and_Neal.jpg/revision/latest/scale-to-width-down/640?cb=20130328040442)"
    },
    {
      quote:"You have to rob the robbers.",
      character:"- Neal Caffrey, White Collar",
      show:"url(http://images4.fanpop.com/image/photos/18300000/Neal-Caffrey-white-collar-18308773-2048-1362.jpg)"
    },
    {
      quote:"We met and we talked and it was epic. But the sun came up and reality set in",
      character:"-Elena Gilbert, The Vampire Diaries",
      show:"url(http://www.nerdophiles.com/wp-content/uploads/2015/05/altervista-org.jpg)"
      
    },
    {
      quote:"We choose our own path. Our values and our actions, they define who we are.",
      character:"-Stefan Salvatore, The Vampire Diaries",
      show:"url(https://tribzap2it.files.wordpress.com/2015/10/stefan-salvatore-paul-wesley-the-vampire-diaries-season-7.jpg)"
    },
    {
      quote:"I don't side with anyone. You piss me off. I want you dead.",
      character:"-Damon Salvatore, The Vampire Diaries",
      show:"url(http://wallpapercave.com/wp/WJ9Kkpi.jpg)"
    },
    {
      quote:"You brood too much... My actions, they belong to me. I own them",
      character:"-Damon Salvatore, The Vampire Diaries",
      show:"url(http://images5.fanpop.com/image/photos/24800000/Damon-Salvatore-damon-salvatore-24872728-1280-800.jpg)"
    },
    {
      quote:"Always stay one step ahead of your enemy." ,
      character:"Katherine pierce-The Vampire Diaries",
      show:"url(http://67.media.tumblr.com/9ee7da51f39e9968a3777d78879dba30/tumblr_mm80ofSSDn1s1juseo2_500.gif)"
    },{
      quote:" Do you honestly believe that I don`t have a plan B? And if that fails a plan C and a plan D. You know how the alphabet works don`t you.",
      character:"Katherine Pierce-The Vampire Diaries",
      show:"url(http://data.whicdn.com/images/61003647/large.gif)"
    },
    {
      quote:" Trust is earned. I can`t just magically hand it over.",
      character:"-Elena Gilbert,The Vampire Diaries",
      show:"url(http://images4.fanpop.com/image/photos/21500000/2x20-The-Last-Day-elena-gilbert-21542897-1280-720.jpg)"
    },
    {
      quote:"Trust me, if there's one thing I know - it's desire.",
      character:"Lucifer MorningStar,Lucifer",
      show:"url(http://www.desktopimages.org/pictures/2015/0714/1/tom-ellis-as-lucifer-in-tv-series-wallpaper-144189.jpg)"
    }
  ]
  function getQuote(){
    return Math.floor(Math.random() * quotes.length);
  }
function placeQuote(){
  var random=getQuote(); $("#quote").html(quotes[random].quote); $("#character").html(quotes[random].character);
  $("body").css("background-image",quotes[random].show);
  
  
  
  
  
      $("#twitter_share").click(function() { var url= "https://twitter.com/intent/tweet?url=yogithapolavarapu.github.io/workSpace/random_quotes&text=" + document.getElementById('quote').innerHTML+document.getElementById('character').innerHTML;
      window.open(url);

    });
  }
        window.onload = placeQuote(); /* call doStuff on window load */
  $('#quoteGen').click(placeQuote); /* call doStuff on #quoteGen click */

});
