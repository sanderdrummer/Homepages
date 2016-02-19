<!DOCTYPE html>
<html lang="de">
<head>
	<title>Serious Games Uni Ulm</title>
	{{ HTML::style('css/bootstrap.min.css'); }}
	{{ HTML::style('css/css.css'); }}
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
	@yield('content')
	{{ HTML::script('js/bootstrap.min.js'); }}
</body>
</html>