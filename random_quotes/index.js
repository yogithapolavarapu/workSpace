$(document).ready(function(){
  
  var quotes=[
    {
      quote:"Despite all that we've done, all those we've lost, we're still here. You're not alone.",
      character:"- Hayley, The Originals",
                    show:"url(http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/05/20/originals-season-3-spoilers.jpg)"
    },
    {
      quote:" I’m not so good with the advice. Can I interest you in a sarcastic comment?",
      character:" -Chandler, F.R.I.E.N.D.S",
      show:"url(https://i.ytimg.com/vi/4M4ZNGl5UAg/maxresdefault.jpg)"
    },
    {
      quote:"I didn't leave Hell just to step into another one.",
      character:"-Lucifer MorningStar, Lucifer",
      show:"url(http://images.fashionnstyle.com/data/images/full/138380/lucifer.png)"
    },
    
    {
      quote:"Love will make you strong. It will make you the man that I know you want to be, and you have to remember that because I won't be here to remind you.",
      character:"- Camille, The Originals",
      show:"url(http://alloyentertainment.com/wp-content/uploads/2012/12/leah-pipes-the-originals.jpg)"
    },
    {
      quote:"The danger of getting hurt is positively thrilling.",
      character:"-Lucifer MorningStar, Lucifer",
      show:"url(http://www.blastr.com/sites/blastr/files/Lucifer-promo-screenshot-Tom-Ellis.png)"
    },
    {
      quote:"What's worth dying for, if not love?",
      character:"- Klaus Mikaelson, The Originals",
      show:"url(http://images6.fanpop.com/image/photos/37000000/Klaus-Mikaelson-the-originals-tv-show-37049254-1366-768.png)"
    },
    {
      quote:"There is only one bad word: taxes.",
      character:"- Ron Swanson, Parks and Recreation",
      show:"url(http://www.wired.com/wp-content/uploads/images_blogs/underwire/2014/01/705598-parks_and_recreation_5056431f846b0.jpg)"
    },
    {
      quote:"I like my money where I can see it - hanging in my closet.",
      character:" - Carrie Bradshaw",
      show:"url(http://images4.fanpop.com/image/photos/24000000/SJP-as-Carrie-carrie-bradshaw-24028793-500-335.png)"

    },
    {
      quote:"True evil only comes from corrupting something truly good.",
      character:"-Dread Docs, Teen Wolf",
      show:"url(http://vignette3.wikia.nocookie.net/teenwolf/images/4/41/Teen_Wolf_Season_5_Episode_4_Condition_Terminal_Dread_Doctors_Book.png/revision/latest?cb=20150727142042)"
    },
    {
      quote:"You know, difficulties aside, I value my family above everything. I am sorry that yours failed you. ",
      character:"- Elijah Mikaelson, The Originals",
      show:"url(http://images6.fanpop.com/image/photos/36000000/The-Originals-Wallpaper-the-originals-36002540-1920-1080.jpg)"
    },
    {
      quote:"People don't have power over us. We give it to them.",
      character:" - Dr.Martin, Lucifer",
      show:"url(http://www.yourtvlink.com/wp-content/uploads/2016/03/rachael1-1060x596.jpg)"
    },
    {
      quote:"Act like a child, get treated like a child. ",
      character:"- Chloe Decker, Lucifer",
      show:"url(https://tribzap2it.files.wordpress.com/2016/02/tom-ellis-lauren-german-lucifer.jpg)"

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
      quote:"I healed when we were all together again, when we were a pack.",
      character:"- Scott McCall, Teen Wolf",
      show:"url(http://www.newlovetimes.com/wp-content/uploads/2015/11/Scott-mccall.jpg)"

    },
    {
      quote:"We met and we talked and it was epic. But the sun came up and reality set in",
      character:"-Elena Gilbert, The Vampire Diaries",
      show:"url(http://www.nerdophiles.com/wp-content/uploads/2015/05/altervista-org.jpg)"
      
    },
    {
      quote:"If you want to get the band back together, Scott, you don't leave out the drummer.",
      character:"- Stilles, Teen Wolf",
      show:"url(https://d.wattpad.com/story_parts/157730213/images/13fa098c78c5e5bd.jpg)"

    },
    {
      quote:"We choose our own path. Our values and our actions, they define who we are.",
      character:"-Stefan Salvatore, The Vampire Diaries",
      show:"url(https://tribzap2it.files.wordpress.com/2015/10/stefan-salvatore-paul-wesley-the-vampire-diaries-season-7.jpg)"
    },
    {
      quote:"What do I do about this? How do you want me to fix this? Okay, Scott just tell me how to fix this, alright? Tell me what you want me to do!",
      character:"Stilles, Teen Wolf",
      show:"url(http://s9.favim.com/orig/131117/dylan-dylan-ox27brien-hot-sexy-beast-Favim.com-1068521.png)"

    },
    {
      quote:"I don't side with anyone. You piss me off. I want you dead.",
      character:"- Damon Salvatore, The Vampire Diaries",
      show:"url(http://wallpapercave.com/wp/WJ9Kkpi.jpg)"
    },
    {
      quote:"You brood too much... My actions, they belong to me. I own them",
      character:"-Damon Salvatore, The Vampire Diaries",
      show:"url(http://images5.fanpop.com/image/photos/24800000/Damon-Salvatore-damon-salvatore-24872728-1280-800.jpg)"
    },
    {
      quote:"I think I need to figure out what's going on with me before I help anyone else.",
      character:"-Kira Yukimura,Teen Wolf",
      show:"url(http://www.mochimag.com/wp-content/uploads/2014/03/arden-cho_2.jpg)"
    },
    {
      quote:"Always stay one step ahead of your enemy." ,
      character:"-Katherine pierce,The Vampire Diaries",
      show:"url(http://67.media.tumblr.com/9ee7da51f39e9968a3777d78879dba30/tumblr_mm80ofSSDn1s1juseo2_500.gif)"
    },
    {
      quote:"You seriously need to find something better than a baseball bat.",
      character:"Lydia Martin, teenwolf",
      show:"url(http://static.tumblr.com/726b71143b2840da1ec9c44285e4eea9/duperhi/dvqnbo4xc/tumblr_static_cmh55nott5448o480co8c0gc0.jpg)"

    },
    {
      quote:"Our sons are trained to be soldiers...our daughters, for leaders.",
      character:" - Chris Argent, Teen Wolf",
      show:"url(http://static2.hypable.com/wp-content/uploads/2013/09/Teen-Wolf-Season-3-Chris-Argent-JR-Bourne.jpg)"
    },
    {
      quote:" Do you honestly believe that I don`t have a plan B? And if that fails a plan C and a plan D. You know how the alphabet works don`t you.",
      character:"-Katherine Pierce, The Vampire Diaries",
      show:"url(http://data.whicdn.com/images/61003647/large.gif)"
    },
    {
      quote:"When your best friend gets told by his girlfriend that they're taking a break...you get your best friend drunk.",
      character:"- stilles Stillinski, Teen Wolf",
      show:"url(http://images6.fanpop.com/image/photos/35300000/3x12-Lunar-Ellipse-scott-and-stiles-35351764-1916-1076.jpg)"
    },

    {
      quote:" Trust is earned. I can't just magically hand it over.",
      character:"-Elena Gilbert,The Vampire Diaries",
      show:"url(http://pre13.deviantart.net/ec57/th/pre/f/2013/302/c/4/nina_dobrev_as_elena_gilbert_by_2micc-d6rs2ni.jpg)"
    },
    {
      quote:"Welcome to the real world. It sucks. You’re gonna love it!",
      character:"- Monica Geller, F.R.I.E.N.D.S",
      show:"url(http://cdn.hitfix.com/photos/6065798/f4asdasdasd.jpg)"
    },
    {
      quote:"Trust me, if there's one thing I know - it's desire.",
      character:"- Lucifer MorningStar,Lucifer",
      show:"url(http://www.desktopimages.org/pictures/2015/0714/1/tom-ellis-as-lucifer-in-tv-series-wallpaper-144189.jpg)"
    },
    {
      quote:"It’s a moo point. It’s like a cow’s opinion; it doesn’t matter. It’s moo.",
      character:"- Joey Tribbiani, F.R.I.E.N.D.S",
      show:"url(https://i.ytimg.com/vi/YjQ1xD6UL-4/maxresdefault.jpg)"
    }
  ]
  function getQuote(){
    return Math.floor(Math.random() * quotes.length);
  }
function placeQuote(){
  var random=getQuote(); 
  $("#quote").html(quotes[random].quote); 
  $("#character").html(quotes[random].character);
  $("body").css("background-image",quotes[random].show);
  
  
  
  
  
      $("#twitter_share").click(function() { var url= "https://twitter.com/intent/tweet?url=http://yogithapolavarapu.github.io/workSpace/random_quotes/&text=" + document.getElementById('quote').innerHTML+document.getElementById('character').innerHTML;
      window.open(url);

    });
  }
        window.onload = placeQuote(); /* call doStuff on window load */
  $('#quoteGen').click(placeQuote); /* call doStuff on #quoteGen click */

});
