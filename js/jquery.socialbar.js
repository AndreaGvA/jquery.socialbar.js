(function($) {
	function _debug(msg){
		if(window.console.debug) {
			console.debug(msg);
		} else {
			alert (msg);
		}
	};
	
	jQuery.SocialBar = function(options) {
		var defaults = {
			open_html: '<div id="bar" style="display:none;"><div id="inner-bar"><span>Seguici su</span></div></div>',
			closed_html: '<div id="bar-closed" style="display:none;"><div id="inner-bar-b"><a class="social_open" id="inner-bar-open" >Apro la barra</a></div></div>',
			facebook: '<a href="http://www.facebook.com/" target="_blank" class="facebook">Segui su facebook</a>',
			twitter: '<a href="http://twitter.com/" target="_blank" class="twitter_icon">Segui su twitter</a>',
			google: '<a href="https://plus.google.com/" target="_blank" class="google">Segui su google</a>',
			feed: '<span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Feed Rss</span><a href="#" class="rss">Rss Feed</a>',
			nl: '<span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  Newsletter</span><a class="nl">Newsletter</a><input type="text" value="Inserisci la tua email" class="input_nl"><input name="button" class="red_button_nl" value="invia">', 
			debug:false,
			fade: 800
		};
		
		var o = jQuery.extend(defaults, options);
		$(document).ready(function(){
			var attivo=$('#social_check').html();
			
			if(attivo=="" || attivo==1) {
				var start=true;
			} else {
				var start=false
			}
			
			jQuery('body').append(o.open_html);
			jQuery('body').append(o.closed_html);
			if(o.debug==true){ _debug("social bar inserita"); }
			// Se facebook è attivo
			if(o.facebook!=""){
				jQuery('#inner-bar').append(o.facebook);
				if(o.debug==true){ _debug("fb on"); }
			}
			if(o.twitter!=""){
				jQuery('#inner-bar').append(o.twitter);
				if(o.debug==true){ _debug("tw on"); }
			}
			if(o.google!=""){
				jQuery('#inner-bar').append(o.google);
				if(o.debug==true){ _debug("gg on"); }
			}
			if(o.feed!=""){
				jQuery('#inner-bar').append(o.feed);
				if(o.debug==true){ _debug("feed on"); }
			}
			if(o.nl!=""){
				jQuery('#inner-bar').append(o.nl);
				if(o.debug==true){ _debug("nl on"); }
			}
			jQuery('#inner-bar').append('<a class="social_close" id="inner-bar-close" >Chiudi la barra</a>');
			
			jQuery('#inner-bar-close').bind('click', function(){
				jQuery('#bar').fadeOut(o.fade);
				
				jQuery('#bar-closed').fadeIn(o.fade);
			});
			
			jQuery('#inner-bar-close').bind('click', function(){
				jQuery('#bar').fadeOut(o.fade);
				jQuery('#bar-closed').fadeIn(o.fade);
				// Get the src of the image
				$.post("_aj_social_bar_active.php", {"id": 0});
			});
			jQuery('#inner-bar-open').bind('click', function(){
				jQuery('#bar-closed').fadeOut(o.fade);
				jQuery('#bar').fadeIn(o.fade);
				$.post("_aj_social_bar_active.php", {"id": 1});
			});
			
			
			if(start==true){
				setTimeout(function(){
				  jQuery('#bar').fadeIn(o.fade);
				  if(o.debug==true){ _debug("fade in"); }
				}, 1000);
			} else {
				setTimeout(function(){
				  jQuery('#bar-closed').fadeIn(o.fade);
				  if(o.debug==true){ _debug("fade in closed"); }
				}, 1000);
			}
			//alert('Social Bar');
		});

		
	};

})(jQuery)
