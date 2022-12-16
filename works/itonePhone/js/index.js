var button_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");
$(".i5").click(
  function(){
    $(".phone").css("width","");
    $(".screen").css("height","");
    $(".cloud1").css("left","45px");
    $(".cloud1").css("top","87px");
    $(".cloud2").css("left","62px");
    $(".cloud2").css("top","13px");
    $(".cloud3").css("left","97px");
    $(".cloud3").css("top","-69px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i6").click(
  function(){
    $(".phone").css("width","270px");
    $(".screen").css("height","350px");
    $(".cloud1").css("left","61px");
    $(".cloud1").css("top","100px");
    $(".cloud2").css("left","78px");
    $(".cloud2").css("top","25px");
    $(".cloud3").css("left","105px");
    $(".cloud3").css("top","-56px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i7").click(
  function(){
    $(".phone").css("width","300px");
    $(".screen").css("height","400px");
    $(".cloud1").css("left","70px");
    $(".cloud1").css("top","143px");
    $(".cloud2").css("left","86px");
    $(".cloud2").css("top","65px");
    $(".cloud3").css("left","115px");
    $(".cloud3").css("top","-16px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

var page=0;
var screen_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");
$(".screen").click(
  function(){
    page += 1;
    if(page>2){
       page =0;
       }
    $(".pages").css("left","-"+page*100+"%");
    screen_audio.play();
  }
);

var button_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");
$(".button").click(
  function(){
    page = 0;
    $(".pages").css("left","-"+page*100+"%");
    button_audio.play();
  }
);

$(".turn").click(
  function(){
    $(".phone").css("transform","rotate(360deg)");
  }
);

var wiggle_audio=new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");
$(".wiggle").click(
  function(){
    wiggletime=0;
    wiggle_audio.play();
  }
);

var wiggletime=21;
setInterval(
  function(){
    if(wiggletime<=20){
    wiggletime+=1;
    if(wiggletime%2==0){
       $(".phone").css("left","40px");
       }else{
         $(".phone").css("left","-40px");
       }
      }
    if(wiggletime==21){
      $(".phone").css("left","");
    }
  }
  ,70);