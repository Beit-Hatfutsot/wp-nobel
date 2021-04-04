<?php
/**
 * Configuration functions
 *
 * @author		Nir Goldberg
 * @package		functions
 * @version		1.0
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Theme version
 * Used to register styles and scripts
 */
if ( function_exists( 'wp_get_theme' ) ) {

	$theme_data		= wp_get_theme();
	$theme_version	= $theme_data->get( 'Version' );

}
else {

	$theme_data		= get_theme_data( trailingslashit( get_stylesheet_directory() ) . 'style.css' );
	$theme_version	= $theme_data[ 'Version' ];

}

/**
 * constants
 */
define( 'VERSION',		$theme_version );
define( 'HOME',			home_url( '/' ) );
define( 'SITE_URL',		get_site_url() );
define( 'TEMPLATE',		get_stylesheet_directory_uri() );
define( 'CSS_DIR',		TEMPLATE . '/css/' );
define( 'JS_DIR',		TEMPLATE . '/js/' );