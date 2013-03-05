;(function($) {

	$.fn.menuArrow = function(options) {
		var opts = $.extend({}, $.fn.menuArrow.defaults, options);

		return this.each(function() {
			var $this = $(this);
			$this.append("<div class='nav-arrow no-mobile'>"+opts.image+"</div></div>");
			
			$("nav ul li").hover(function() {

				var pos = $(this).children("a").position();
				var act_pos=$(".active").position();
				var width = $(this).children("a").width();
				
				var move = pos.left + (width / 2) - act_pos.left + 5;

				if ($(this).children("a").hasClass(opts.active_class)) {

				} else {
					$(".nav-arrow").animate({
						left : move
					}, {
						duration : opts.duration,
						queue : false
					}, function() {
						// Animation complete.
					});
				}

			});

			$("nav ul li").mouseout(function() {

				var pos = $("a."+opts.active_class).position();
				var width = $("a."+opts.active_class).width();
				var move = pos.left + (width / 2) - pos.left + 5;
				
				$(".nav-arrow").animate({
					left : move
				}, {
					duration : opts.duration,
					queue : false
				}, function() {
					// Animation complete.
				});
			});

		});

		// private function for debugging
		function debug($obj) {
			if (window.console && window.console.log) {
				window.console.log($obj);
			}
		}

	};

	// default options
	$.fn.menuArrow.defaults = {
		duration : 500,
		image : "<img src='img/active.png'>",
		active_class : "active"
	};

})(jQuery);