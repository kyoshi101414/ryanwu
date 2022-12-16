$(function(){
	$(".box1").mouseenter(function(){
	$("#box_icon1").attr("src","images/gsbImg1.png");
	});
	$(".box1").mouseleave(function(){
	$("#box_icon1").attr("src","images/sbImg1.png");
	});

	$(".box2").mouseenter(function(){
	$("#box_icon2").attr("src","images/gsbImg2.png");
	});
	$(".box2").mouseleave(function(){
	$("#box_icon2").attr("src","images/sbImg2.png");
	});

	$(".box3").mouseenter(function(){
	$("#box_icon3").attr("src","images/gsbImg3.png");
	});
	$(".box3").mouseleave(function(){
	$("#box_icon3").attr("src","images/sbImg3.png");
	});

	$(".box4").mouseenter(function(){
	$("#box_icon4").attr("src","images/gsbImg4.png");
	});
	$(".box4").mouseleave(function(){
	$("#box_icon4").attr("src","images/sbImg4.png");
	});

	$(".box5").mouseenter(function(){
	$("#box_icon5").attr("src","images/gsbImg5.png");
	});
	$(".box5").mouseleave(function(){
	$("#box_icon5").attr("src","images/sbImg5.png");
	});

	$(".box6").mouseenter(function(){
	$("#box_icon6").attr("src","images/gsbImg6.png");
	});
	$(".box6").mouseleave(function(){
	$("#box_icon6").attr("src","images/sbImg6.png");
	});

	$(".box7").mouseenter(function(){
	$("#box_icon7").attr("src","images/gsbImg7.png");
	});
	$(".box7").mouseleave(function(){
	$("#box_icon7").attr("src","images/sbImg7.png");
	});
});


//menu_bar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}