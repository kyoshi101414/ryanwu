//初始化
var s = skrollr.init();







$(window).scroll(function(evt){
  if ($(window).scrollTop()>0){
 $(".navbar").removeClass("navbar-top");
  }else{
    $(".navbar").addClass("navbar-top");
  }
});