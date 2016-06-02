
$(document).ready(function() {

//http://ip-api.com/docs/api:json
   var location = "http://ip-api.com/json";
 
  //{"as":"","city":"","country":"","countryCode":"","isp":"","lat":,"lon":,"org":"","query":"","region":"","regionName":"","status":"success","timezone":"","zip":""}  
  
  
  
 
    //an array list of suitable backgrounds taken from around the web
  
  var background = {
    sunny: "url(https://i.kinja-img.com/gawker-media/image/upload/s--sSIGUMGc--/c_fit,fl_progressive,q_80,w_636/18ixgahxuvfgvjpg.jpg)",
    night: "url(http://7-themes.com/data_images/out/47/6929611-park-bench-at-night.jpg)",
    cloudyS: "url(http://static1.squarespace.com/static/560f44f6e4b042344e71beec/t/56245a54e4b0d232542bec10/1445223005165/M8PLLYRHYR.jpg?format=1500w)",
    cloudyN: "url(http://wallpapershome.com/images/pages/pic_hs/836.jpg)",
    bigCloud: "url(http://static1.squarespace.com/static/562eb53fe4b02eaf02fa7768/t/563059f8e4b033c8289f47b6/1446009355152/Ocean+Sunset.jpg?format=2500w)",
    rain: "url(http://newtopwallpapers.com/wp-content/uploads/2013/04/Rain-Falling-on-Trees.jpeg)",
    rainN:"url(https://0.s3.envato.com/files/32036621/rainy-night-window-pr.jpg)",
    
    storm: "url(http://cdn.pcwallart.com/images/lightning-storm-at-sea-wallpaper-2.jpg)",
    snow: "url(http://www.handisport-vosges.fr/images/fond-page/fond3.jpg)",
    mist: "url(http://kingofwallpapers.com/fog/fog-008.jpg)"    
  };
    
    
  $.getJSON(location, function(data) {
    var latitude = data.lat;
    var longitude = data.lon;

      /*example:{"coord":
{"lon":145.77,"lat":-16.92},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
"base":"cmc stations",
"main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
"wind":{"speed":5.1,"deg":150},
"clouds":{"all":75},
"rain":{"3h":3},
"dt":1435658272,
"sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
"id":2172797,
"name":"Cairns",
"cod":200}
*/
   /*open weather api: https://openweathermap.org/current#geo-->
*/ $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=7abcac641aa6aa0fce567a27bf2258a6" + "&units=metric", function(data) {

  
  //celsius value
      var temperatureCelsius = Math.round(data.main.temp);
  
  //convert celsius to fahrenhet
      var temperatureFahrenheit = Math.round(temperatureCelsius * 1.8 + 32);
      var icontag = data.weather[0].icon;
      var icon = "http://openweathermap.org/img/w/" + icontag + ".png";

      $("#city").html(data.name);
      $("#degreesCelsius").html(temperatureCelsius + " °C");
      $("#degreesFahrenheit").html(temperatureFahrenheit + " °F");
      $("#description").html(data.weather[0].main);
      $("#icon").attr("src", icon);
            //icontags  //http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes



      switch(icontag){
        case "01d":
          $("body").css("background-image", background.sunny);
          break;
        case "01n":
          $("body").css("background-image", background.night);
          break;
        case "02d":
        case "03d":
          $("body").css("background-image", background.cloudyS);
          break;
        case "02n":
        case "03n":
          $("body").css("background-image", background.cloudyN);
          break;
        case "04d":
        case "04n":
          $("body").css("background-image", background.bigCloud);
          break;
        case "09d":
        case "09n":
        case "10d":

          $("body").css("background-image", background.rain);
          break;

        case"10n":
          $("body").css("background-image",background.rainN);
        case "11d":
        case "11n":
          $("body").css("background-image", background.storm);
          break;
        case "13d":
        case "13n":
          $("body").css("background-image", background.snow);
          break;
        case "50d":
        case "50n":
          $("body").css("background-image", background.mist);
          break;
      }
      
      $(".app").click(function() {
        $(".temperature").toggle();
      });
    });
  });
});