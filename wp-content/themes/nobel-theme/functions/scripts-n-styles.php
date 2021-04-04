<?php
/**
 * Scripts and styles functions
 *
 * @author		Nir Goldberg
 * @package		functions
 * @version		1.0
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_action( 'login_enqueue_scripts',	'bh_login_scripts_n_styles' );

/**
 * bh_login_scripts_n_styles
 *
 * used before authentication
 *
 * @param	N/A
 * @return	N/A
 */
function bh_login_scripts_n_styles() {

	wp_register_style( 'admin-login',	CSS_DIR . 'admin/login.css',	array(),	VERSION );

}