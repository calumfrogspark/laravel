<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ isset($title) ? $title : "Dashboard" }} | James Retail</title>

    <!-- Favicon generated by: https://www.favicon-generator.org -->
    <link rel="apple-touch-icon" sizes="57x57" href="/fav.ico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/fav.ico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/fav.ico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/fav.ico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/fav.ico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/fav.ico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/fav.ico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/fav.ico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/fav.ico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/fav.ico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/fav.ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/fav.ico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/fav.ico/favicon-16x16.png">
    <link rel="manifest" href="/fav.ico/manifest.json">
    <meta name="msapplication-TileImage" content="/fav.ico/ms-icon-144x144.png">
    <!-- End of Favicon generator -->
    
    <!-- import home baked scripts and styles -->
    <link rel="stylesheet" href="/css/bundle.min.css?v=<?php echo time(); ?>" type="text/css" media="all"/>
    <script src="/js/app.min.js?v=<?php echo time(); ?>"></script>

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script> -->
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
  </head>

  <body @unless(empty($body_class)) class="{{$body_class}}" @endunless >

		<div class="loader-wrapper">
			<div class="loader">
				<img alt="James Retail Logo" src="/img/james retail logo.svg">
			</div>
			<div class="loader-section section-left"></div>
			<div class="loader-section section-right"></div>
		</div>
		
		@include('includes.header')
		<section class="yield-content">
			@yield('content')
		</section>
		
		<div class="d-none" id="vue-container">
			<example-component></example-component>
		</div>

    @include('includes.footer')
  </body>
</html>