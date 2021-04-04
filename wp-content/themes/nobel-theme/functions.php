<?php

// config
require_once( 'functions/config.php' );

// scripts and styles
require_once( 'functions/scripts-n-styles.php' );

// login
require_once( 'functions/login.php' );

// gtm
require_once( 'functions/gtm.php' );

////////////////////////////////////////////////////////////////////
// Theme Information
////////////////////////////////////////////////////////////////////

    $themename = "nobel-theme";
    $developer_uri = "http://nobel.coil";
    $shortname = "cw";
    $version = '2';
    load_theme_textdomain( 'nobel-theme', get_template_directory() . '/languages' );

////////////////////////////////////////////////////////////////////
// include Theme-options.php for Admin Theme settings
////////////////////////////////////////////////////////////////////

   //include 'theme-options.php';


////////////////////////////////////////////////////////////////////
// Enqueue Styles (normal style.css and bootstrap.css)
////////////////////////////////////////////////////////////////////
    function nobeltheme_theme_stylesheets()
    {
        
        wp_register_style('bootstrap.css', get_template_directory_uri() . '/css/bootstrap.css', array(), '1', 'all' );
        wp_enqueue_style( 'bootstrap.css');
        wp_enqueue_style( 'stylesheet', get_stylesheet_uri(), array(), '1', 'all' );
        wp_enqueue_style( 'stylesheet-mobile', get_template_directory_uri() . '/style-mobile.css', array(), '1', 'all' );
		wp_enqueue_style('jqueryui', 'https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css', array(), '1', 'all' );
    }
    add_action('wp_enqueue_scripts', 'nobeltheme_theme_stylesheets');

//Editor Style
//add_editor_style('css/editor-style.css');

////////////////////////////////////////////////////////////////////
// Register Bootstrap JS with jquery
////////////////////////////////////////////////////////////////////
    function nobeltheme_theme_js()
    {
        global $version;
        wp_enqueue_script('theme-js', get_template_directory_uri() . '/js/bootstrap.js',array( 'jquery' ),$version,true );
        //wp_enqueue_script('theme-jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',array( 'jquery' ),$version,true );
        wp_enqueue_script('theme-jquery', 'https://code.jquery.com/jquery-1.10.2.js"',array( 'jquery' ),$version,true );
        wp_enqueue_script('theme-jquery-ui', 'https://code.jquery.com/ui/1.10.4/jquery-ui.js',array( 'jquery' ),$version,true );
        wp_enqueue_script('theme-jquery-ui-mobile', '//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js',array( 'jquery' ),$version,true );
		//if ( is_page_template( 'template-home.php' ) ) {       
			wp_enqueue_script('google-map-api', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyABIv1NFOQ6wwuLuJHNk8bBzSxKN9tZof0&language=he',array( 'jquery' ),$version,true );
       // }
		wp_enqueue_script('theme-main', get_template_directory_uri() . '/js/main.js',array( 'jquery' ),$version,true );
        //if ( ( is_page_template( 'taxonomy-winning_year.php' ))||( is_page_template( 'taxonomy-winning_country.php' ))||( is_page_template( 'taxonomy-winning_category.php' )) ) {
			wp_enqueue_script('theme-row', get_template_directory_uri() . '/js/row0.js',array( 'jquery' ),$version,true );
		//} 
    }
    add_action('wp_enqueue_scripts', 'nobeltheme_theme_js');

////////////////////////////////////////////////////////////////////
// Add Title Tag Support with Regular Title Tag injection Fall back.
////////////////////////////////////////////////////////////////////

function nobeltheme_title_tag() {
    add_theme_support( 'title-tag' );
}

add_action( 'after_setup_theme', 'nobeltheme_title_tag' );

if(!function_exists( '_wp_render_title_tag')) {

    function nobeltheme_render_title() {
        ?>
        <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php
    }
    add_action( 'wp_head', 'nobeltheme_render_title' );

}

////////////////////////////////////////////////////////////////////
// Register Custom Navigation Walker include custom menu widget to use walkerclass
////////////////////////////////////////////////////////////////////

    require_once('lib/wp_bootstrap_navwalker.php');
    require_once('lib/bootstrap-custom-menu-widget.php');

////////////////////////////////////////////////////////////////////
// Register Menus
////////////////////////////////////////////////////////////////////

        register_nav_menus(
            array(
                'main_menu' => 'Main Menu',
                'footer_menu' => 'Footer Menu'
            )
        );

////////////////////////////////////////////////////////////////////
// Register the Sidebar(s)
////////////////////////////////////////////////////////////////////
/*
        register_sidebar(
            array(
            'name' => 'Right Sidebar',
            'id' => 'right-sidebar',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget' => '</aside>',
            'before_title' => '<h3>',
            'after_title' => '</h3>',
        ));

        register_sidebar(
            array(
            'name' => 'Left Sidebar',
            'id' => 'left-sidebar',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget' => '</aside>',
            'before_title' => '<h3>',
            'after_title' => '</h3>',
        ));
*/
////////////////////////////////////////////////////////////////////
// Register hook and action to set Main content area col-md- width based on sidebar declarations
////////////////////////////////////////////////////////////////////
/*
add_action( 'nobeltheme_main_content_width_hook', 'nobeltheme_main_content_width_columns');

function nobeltheme_main_content_width_columns () {

    global $dm_settings;

    $columns = '12';

    if ($dm_settings['right_sidebar'] != 0) {
        $columns = $columns - $dm_settings['right_sidebar_width'];
    }

    if ($dm_settings['left_sidebar'] != 0) {
        $columns = $columns - $dm_settings['left_sidebar_width'];
    }

    echo $columns;
}

function nobeltheme_main_content_width() {
    do_action('nobeltheme_main_content_width_hook');
}
*/
////////////////////////////////////////////////////////////////////
// Add support for a featured image and the size
////////////////////////////////////////////////////////////////////

    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size(300,300, true);

////////////////////////////////////////////////////////////////////
// Adds RSS feed links to for posts and comments.
////////////////////////////////////////////////////////////////////

    add_theme_support( 'automatic-feed-links' );


////////////////////////////////////////////////////////////////////
// Set Content Width
////////////////////////////////////////////////////////////////////

if ( ! isset( $content_width ) ) $content_width = 800;


////////////////////////////////////////////////////////////////////
//
//			My Functions
//
////////////////////////////////////////////////////////////////////

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 */
function _tk_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $sep $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $sep " . sprintf( __( 'Page %s', '_tk' ), max( $paged, $page ) );

	return $title;
}
add_filter( 'wp_title', '_tk_wp_title', 10, 2 );

//
//	add option page
//
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> '',
		'redirect'	=> false,
		'position' => 3
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Header Settings',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Persona Settings',
		'menu_title'	=> 'Persona',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));
	
	/*acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Testimony Settings',
		'menu_title'	=> 'Testimony',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));*/
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Search Settings',
		'menu_title'	=> 'Search',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));
	/*
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Read More Settings',
		'menu_title'	=> 'Read More',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));*/
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Newsletter Settings',
		'menu_title'	=> 'Newsletter',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));
	
}




//
//	Dashboard number of columns
//
function wpse_dashboard_columns() {
    add_screen_option(
        'layout_columns',
        array(
            'max'     => 4,
            'default' => 1
        )
    );
}
add_action( 'admin_head-index.php', 'wpse_dashboard_columns' );




//
//	Content Length Shortening Function
//
function new_content($charlength) {
	$return_string = '';
	$excerpt = get_the_content();
	$excerpt = preg_replace("/<.*?>/", " ", $excerpt);
	$charlength++;
	if(strlen($excerpt)>$charlength) {
		$subex = substr($excerpt,0,$charlength-5);
		$exwords = explode(" ",$subex);
		$excut = -(strlen($exwords[count($exwords)-1]));
		if($excut<0) {
			$return_string = substr($subex,0,$excut);
		} else {
			$return_string = $subex;
		}
		$return_string .= "...";
	} else {
		$return_string = $excerpt;
	}
	return $return_string;
}


//
// Show File name in admin bar
//
function show_me_the_template(){
	if ( ! is_admin() ) if (current_user_can( 'manage_options' )) if ( is_admin_bar_showing() ) {
		global $template, $wp_admin_bar;
		//get_currentuserinfo();
		$str_trim = dirname(__FILE__) . '/';
		$template_text = trim($template, $str_trim);
		$template_text = str_replace($str_trim," File Name: ",$template);
		if ( is_admin_bar_showing() ) {
			$wp_admin_bar->add_menu( array(
			'parent' => false,
			'id' => 'template',
			'title' => $template_text,
			'href' => '#'
			));
		}
	}
}
add_action('admin_bar_menu', 'show_me_the_template', 124);




//
//	Theme Option page
//
// This tells WordPress to call the function named "setup_theme_admin_menus"
// when it's time to create the menu pages.
/*
add_action("admin_menu", "setup_theme_admin_menus");
function setup_theme_admin_menus() {
	// Check that the user is allowed to update options
	if (!current_user_can('manage_options')) {
		wp_die('You do not have sufficient permissions to access this page.');
	}

    add_menu_page('rmk & conv', 'rmk & conv', 'manage_options', 
        'tut_theme_settings', 'theme_settings_page','',133);

}
 
// We also need to add the handler function for the top level menu
function theme_settings_page() {
?>
<div dir="ltr" style="padding: 30px">
	<style>h1{text-align: center} h2{text-indent: 20px}</style>
	<h1>Google rmk & conv</h1>
	<div class="wrap"  dir="ltr">
		<form method="post" action="options.php">
            <?php wp_nonce_field('update-options') ?>
			<p>
				<h2>Conversion Code:</h2>
				<textarea type="text" name="conversion" size="500" style="width: 100%; max-width: 100%; min-height: 300px;"><?php echo get_option('conversion'); ?></textarea>
			</p>
			<p>
				<h2>Remarketing Code:</h2>
				<textarea type="text" name="remarketing" size="500" style="width: 100%; max-width: 100%; min-height: 300px;"><?php echo get_option('remarketing'); ?></textarea>
			</p>			
            <p><input type="submit" name="Submit" value="Save" style="width:100px; font-size: 20px; line-height: 24px; padding: 4px;" /></p>
            <input type="hidden" name="action" value='update' />
            <input type="hidden" name="page_options" value='conversion,remarketing' />
        </form>
    </div>	
</div>
<?php
}
*/
//
//     Feature Image
//
function thumbnail_img(){
	if ( has_post_thumbnail() ) : 

		$image = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
		$image_alt = get_post_meta(get_post_thumbnail_id() , '_wp_attachment_image_alt', true); 

		return '<img src="'.$image[0].'" alt="'.$image_alt.'" class="thumbnail-img" />';
	else:
		return '';
	endif;
}

//
//     ACF Images functions
//
function acf_img($field,$class){
	$img = ''; 
	$img = get_field($field); 
	if($img):
		if($class):
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="'.$class.'">';
		else:
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
		endif;
	else:
		return '';
	endif;
}
function acf_sub_img($field,$class){
	$img = ''; 
	$img = get_sub_field($field); 
	if($img):
		if($class):
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="'.$class.'">';
		else:
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
		endif;
	else:
		return '';
	endif;
}
function acf_option_img($field,$class){
	$img = ''; 
	$img = get_field($field,'option'); 
	if($img):
		if($class):
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="'.$class.'">';
		else:
			return '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
		endif;
	else:
		return '';
	endif;
}



//
//	Remove Editor 
//
/**/
add_action( 'init', 'remove_editor_init' );

function remove_editor_init() {
    // If not in the admin, return.
    if ( ! is_admin() ) {
       return;
    }

    // Get the post ID on edit post with filter_input super global inspection.
    $current_post_id = filter_input( INPUT_GET, 'post', FILTER_SANITIZE_NUMBER_INT );
    // Get the post ID on update post with filter_input super global inspection.
    $update_post_id = filter_input( INPUT_POST, 'post_ID', FILTER_SANITIZE_NUMBER_INT );

    // Check to see if the post ID is set, else return.
    if ( isset( $current_post_id ) ) {
       $post_id = absint( $current_post_id );
    } else if ( isset( $update_post_id ) ) {
       $post_id = absint( $update_post_id );
    } else {
       return;
    }

    // Don't do anything unless there is a post_id.
    if ( isset( $post_id ) ) {
       // Get the template of the current post.
       $template_file = get_post_meta( $post_id, '_wp_page_template', true );

       // Example of removing page editor for page-your-template.php template.
       if (  'template-home.php' === $template_file ) {
           remove_post_type_support( 'page', 'editor' );
           // Other features can also be removed in addition to the editor. See: https://codex.wordpress.org/Function_Reference/remove_post_type_support.
       }
    }
}




//
// Numeric Page Navi (built into the theme by default)
//
function page_navi($before = '', $after = '') {
	global $wpdb, $wp_query;
	$request = $wp_query->request;
	$posts_per_page = intval(get_query_var('posts_per_page'));
	$paged = intval(get_query_var('paged'));
	$numposts = $wp_query->found_posts;
	$max_page = $wp_query->max_num_pages;
	if ( $numposts <= $posts_per_page ) { return; }
	if(empty($paged) || $paged == 0) {
		$paged = 1;
	}
	$pages_to_show = 7;
	$pages_to_show_minus_1 = $pages_to_show-1;
	$half_page_start = floor($pages_to_show_minus_1/2);
	$half_page_end = ceil($pages_to_show_minus_1/2);
	$start_page = $paged - $half_page_start;
	if($start_page <= 0) {
		$start_page = 1;
	}
	$end_page = $paged + $half_page_end;
	if(($end_page - $start_page) != $pages_to_show_minus_1) {
		$end_page = $start_page + $pages_to_show_minus_1;
	}
	if($end_page > $max_page) {
		$start_page = $max_page - $pages_to_show_minus_1;
		$end_page = $max_page;
	}
	if($start_page <= 0) {
		$start_page = 1;
	}
		
	echo $before.'<ul class="pagination">'."";
	if ($paged > 1) {
		$first_page_text = "&raquo;";
		echo '<li class="prev"><a href="'.get_pagenum_link().'" title="First">'.$first_page_text.'</a></li>';
	}
		
	$prevposts = get_previous_posts_link('&larr; Previous');
	if($prevposts) { echo '<li>' . $prevposts  . '</li>'; }
	else { echo '<li class="disabled"><a href="#">&larr; Previous</a></li>'; }
	
	for($i = $start_page; $i  <= $end_page; $i++) {
		if($i == $paged) {
			echo '<li class="active"><a href="#">'.$i.'</a></li>';
		} else {
			echo '<li><a href="'.get_pagenum_link($i).'">'.$i.'</a></li>';
		}
	}
	echo '<li class="">';
	next_posts_link('Next &rarr;');
	echo '</li>';
	if ($end_page < $max_page) {
		$last_page_text = "&laquo;";
		echo '<li class="next"><a href="'.get_pagenum_link($max_page).'" title="Last">'.$last_page_text.'</a></li>';
	}
	echo '</ul>'.$after."";
}


//
// remove the p from around imgs (http://css-tricks.com/snippets/wordpress/remove-paragraph-tags-from-around-images/)
//
function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');



if ( is_admin() ) {
	$lang_temp = ICL_LANGUAGE_CODE;
	if (( $lang_temp == 'he' ) || ( $lang_temp == 'ar' ) || ( $lang_temp == 'fa' ) || ( $lang_temp == 'ku' ) || ( $lang_temp == 'ms' ) || ( $lang_temp == 'ml' ) || ( $lang_temp == 'pa' ) || ( $lang_temp == 'so' ) || ( $lang_temp == 'yi' ) || ( $lang_temp == 'ur' ) ){
		add_editor_style('editorstylertl.css');
	}else{
		add_editor_style('editorstyleltr.css');
	}
}


//
// ACF - Set post publish date by custom field
//

add_action('save_post', 'change_content');
global $post;
global $wpdb;
function change_content($post_id) {
	$datefield = get_post_meta($post_id,'wining_year',true);
	//$post_date = date("Y-m-d H:i:s", strtotime($datefield));
	if($datefield != ''){
	$post_date = $datefield."-01-01 00:00";
	$my_post = array();
	$my_post['ID'] = $post_id;
	$my_post['post_date'] = $post_date;
	 
	remove_action('save_post', 'change_content');
	wp_update_post( $my_post );
	add_action('save_post', 'change_content');
	}
}


?>