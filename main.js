AOS.init();
$(document).ready(function() {	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 500);

});

$(function () {
  // $('.animate-rotate-1').animatedHeadline({
  //     animationType: 'rotate-1'
  // });

  // $('.animate-type').animatedHeadline({
  //     animationType: 'type'
  // });

  // $('.animate-rotate-2').animatedHeadline({
  //     animationType: 'rotate-2'
  // });

  // $('.animate-loading-bar').animatedHeadline({
  //     animationType: 'loading-bar'
  // });

  $('.animate-slide').animatedHeadline({
      animationType: 'slide'
  });

  // $('.animate-clip').animatedHeadline({
  //     animationType: 'clip'
  // });

  // $('.animate-zoom').animatedHeadline({
  //     animationType: 'zoom'
  // });

  // $('.animate-rotate-3').animatedHeadline({
  //     animationType: 'rotate-3'
  // });

  // $('.animate-scale').animatedHeadline({
  //   animationType: 'scale'
  // });

  // $('.animate-push').animatedHeadline({
  //     animationType: 'push'
  // });
});



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

