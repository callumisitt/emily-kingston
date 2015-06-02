$(document).ready(function(){

  $("a[href^='http']").attr('target','_blank');

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var $target = $(this.hash);
	    $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
          var targetOffset = $target.offset().top - 50;
      
					$('html,body').animate({scrollTop: targetOffset}, 750);
					if ($("h2.smart-reveal").hasClass("expanded")) {
          	$("h2.smart-reveal").click();								
					};

					return false;
			}
  	}
  });

	// responsive primary menu
	$("h2.smart-reveal").click(function(e) {
		if ($(this).hasClass('expanded')){
			$(this).removeClass('expanded');
			$(this).parent().removeClass('open-responsive');
		} else {
			$(this).addClass('expanded');
			$(this).parent().addClass('open-responsive');
		};

		e.preventDefault();
	});

});