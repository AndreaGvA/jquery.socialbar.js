<? session_start(); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
	<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>jquery.socialbar.js</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">

		<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/socialbar.css">
		<script src="js/vendor/modernizr-2.6.2.min.js"></script>
	</head>
	<body>
		<!-- Add your site or application content here -->
		<div id="social_check"><?=$_SESSION['social_bar']?></div>
		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script>
			window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')
		</script>
		<script src="js/plugins.js"></script>
		<script src="js/jquery.socialbar.js"></script>
		<script src="js/main.js"></script>

	</body>
</html> 
