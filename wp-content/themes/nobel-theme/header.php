<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="content-type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta name="description" content="<?php echo esc_attr(get_bloginfo('description')); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
	<title><?php wp_title( '|', true, 'right' ); ?></title>	
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <?php wp_head(); ?>

	<?php
		/**
		 * gtm head
		 */
		gtm_head();
	?>

</head>
<body <?php body_class(); ?>>

	<?php
		/**
		 * gtm body
		 */
		gtm_body();
	?>