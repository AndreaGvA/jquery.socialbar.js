# jQuery.socialbar.js
_________________
**Un metodo jQuery per una barra Social**

[Guarda la DEMO](http://smarthub.smartgap.it/demo/socialbar/index.php)

#### Come usare:

Copiare la cartella delle immagini nel proprio progetto, includere il file **socialbar.css**, **jQuery**, il file **jquery.socialbar.js** nella propria pagina e lanciare lo script:

```
<link rel="stylesheet" href="css/socialbar.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.socialbar.js"></script>

$(document).ready(function(){
	$.SocialBar();
});
```

è possibile specificare le seguenti opzioni 

```
$(document).ready(function(){
	$.SocialBar({
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
	);
});
```
