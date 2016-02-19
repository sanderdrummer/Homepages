<?php

	// Version
	define('VERSION', '4');

	// define brand
	define('BRAND', 'Respond');
	define('BRAND_CSS', '');
	define('BRAND_LOGO', '/images/respond-icon.png');
	define('BRAND_ICON', '/images/respond-icon.png');
	define('COPY', 'Made by Matthew Smith in Manchester, MO');
	define('EMAIL', 'info@tp-itservice.com');

	// DB connection parameters
	define('DB_HOST', 'rdbms.strato.de');
	define('DB_NAME', 'DB1681979');
	define('DB_USER', 'U1681979');
	define('DB_PASSWORD', '7klr97508');
	
	// debugging
	define('DEBUG', true);

	if(DEBUG){
		error_reporting(E_ALL);
		ini_set('display_errors', '1');
	}
	
	// S3 deployment options
	
	// enables copying site to S3 for deployment
	define('ENABLE_S3_DEPLOYMENT', false);
	
	// stores all uploaded files on S3
	define('FILES_ON_S3', false);
	
	// default bucket
	define('BUCKET_NAME', 'ctc-band.com');
	define('S3_LOCATION', 'us-east-1');
	define('S3_URL', 'http://{{bucket}}.s3-website-us-east-1.amazonaws.com/{{site}}');
	define('S3_KEY', 'AWS ACCESS KEY');
	define('S3_SECRET', 'AWS SECRET KEY');
	
	// URLs
	define('APP_URL', 'http://cms.ctc-band.com');
	define('API_URL', 'http://cms.ctc-band.com/api');
	define('SITES_URL', 'http://cms.ctc-band.com/sites');
	define('SITE_URL', 'http://test-site.ctc-band.com/');
	define('TERMS_URL', 'http://test-site.ctc-band.com/page/terms-of-service');
	define('PRICING_URL', 'http://test-site.ctc-band.com/page/terms-of-service');
	
	// webhooks URL
	define('WEBHOOKS_URL', '');

	// default mode (hash, hashbang, html5, static)
	define('DEFAULT_URL_MODE', 'static');
	
	// image prefix (the protocol to use for accessing images, prefixes the domain name)
	define('IMAGE_PREFIX', 'http://');

	// locations
	define('APP_LOCATION', '../');
	define('SITES_LOCATION', '../sites');
	
	// setup default language for the site
	define('DEFAULT_LANGUAGE', 'en');
	
	// default the name on create
	define('DEFAULT_NAME_ON_CREATE', true);
	
	// setup the default text direction for the site (ltr, rtl, auto)
	define('DEFAULT_DIRECTION', 'ltr');
	
	// determines whether the user can change the default language while creating the site
	define('CHANGE_DEFAULT_LANGUAGE', false);
	
	// passcode
	define('PASSCODE', 'iloverespond');
	
	// JWT key
	define('JWT_KEY', 'iloverespond');
	
	// paypal
	define('PAYPAL_EMAIL', '');
	define('PAYPAL_USE_SANDBOX', false);
	define('PAYPAL_CURRENCY', 'USD');
	define('PAYPAL_LOGO', '');
	
	// stripe keys
	define('STRIPE_SECRET_KEY', '');
	define('STRIPE_PUBLISHABLE_KEY', '');
	
	// plans
	define ('SUBSCRIPTION_PLANS', serialize (array (
			array(
				'id' 		=> 'respond-starter',
				'desc' 		=> 'Starter - $5/mo',
				'price' 	=> 5,
				'interval'	=> 'M'  // M = month, D = day, W = week, Y = year
			),
			array(
				'id' 		=> 'respond-basic',
				'desc' 		=> 'Basic - $15/mo',
				'price' 	=> 15,
				'interval'	=> 'M'
			),
			array(
				'id' 		=> 'respond-pro',
				'desc' 		=> 'Professional - $30/mo',
				'price' 	=> 30,
				'interval'	=> 'M'
			)
		
	    )));
	
	// Cross Origin Resource Sharing (CORS)
	define ('CORS', serialize (array (
	    'http://cms.ctc-band.com '
	    )));
	    
	// advanced SMTP settings (see https://github.com/Synchro/PHPMailer)
	define('IS_SMTP', false);
	define('SMTP_HOST', 'smtp.mailserver.com');
	define('SMTP_AUTH', true);
	define('SMTP_USERNAME', '');
	define('SMTP_PASSWORD', '');
	define('SMTP_SECURE', 'tls');
	
	// key used to encrypt site SMTP passwords
	define('SMTPENC_KEY', 'iloverespond');
	    
    // set what emails should be sent out and a reply-to email address
	define('REPLY_TO', '');
	define('REPLY_TO_NAME', '');
	define('SEND_WELCOME_EMAIL', false);
	define('SEND_PAYMENT_SUCCESSFUL_EMAIL', false);
	define('SEND_PAYMENT_FAILED_EMAIL', false);
	
    // start page (sets the default page (route state) a user sees after logon)
	define('START_PAGE', 'app.pages');
	
	// set the default theme (directory name: themes/simple => simple)
	define('DEFAULT_THEME', 'simple');
	define('THEMES_FOLDER', 'themes');
	
	// allowed filetypes (NOTE: gif, png, jpg, and svg are enabled by default)
	define('ALLOWED_FILETYPES', 'ico, css, js, pdf, doc, docx, zip');
	
	// advanced configurations
	define('IMAGE_AUTO_RESIZE', true);
	define('IMAGE_MAX_WIDTH', 1024);
	define('IMAGE_MAX_HEIGHT', 768);
	
	// thumb width and height
	define('THUMB_MAX_WIDTH', 400);
	define('THUMB_MAX_HEIGHT', 400);
	
	// set default as UTC
	date_default_timezone_set('UTC');
	
?>