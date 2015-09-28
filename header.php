<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<title><?php bloginfo('name');?><?php wp_title(" - ",true); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<meta property="og:title" content="<?php bloginfo('name');?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php bloginfo('wpurl');?>" />
	<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/images/favicon.ico" />
	<meta property="og:site_name" content="<?php bloginfo('name');?>" />
	<meta property="og:description" content="<?php bloginfo('description'); ?>" />
	<link href="<?php echo get_template_directory_uri(); ?>/images/favicon.gif" type="image/gif" rel="shortcut icon">
	<link href="<?php echo get_template_directory_uri(); ?>/images/favicon.gif" rel="shortcut icon">
	<link href="<?php echo get_template_directory_uri(); ?>/images/favicon.gif" type="image/gif" rel="icon">
  	<!--[if lt IE 9]>
  	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/pxloader-all.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/soundmanager2-nodebug-jsmin.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.motio.min.js"></script>
	<?php if( is_home() ) { ?>
	<script>
		var sequences_info = {
			aws_link: '<?php echo get_field('aws_bucket_link', 'option'); ?>',
			sequences: <?php echo json_encode(get_field('sequences_repeater', 'option')); ?>
		}
	</script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/looper.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/homepage.js"></script>
	<?php } ?>
</head>
<body>
	<div class="content">