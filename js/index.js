$(document).ready(function(){
	$(".li1").mouseenter(function(){
		$(".anm1").addClass("animated bounce")
	});
	$(".li1").mouseleave(function(){
		$(".anm1").removeClass("animated bounce")
	});
	$(".li2").mouseenter(function(){
		$(".anm2").addClass("animated bounce")
	});
	$(".li2").mouseleave(function(){
		$(".anm2").removeClass("animated bounce")
	});
	$(".li3").mouseenter(function(){
		$(".anm3").addClass("animated bounce")
	});
	$(".li3").mouseleave(function(){
		$(".anm3").removeClass("animated bounce")
	});
	$(".li4").mouseenter(function(){
		$(".anm4").addClass("animated tada")
	});
	$(".li4").mouseleave(function(){
		$(".anm4").removeClass("animated tada")
	});
});