<?php
require_once('../../../../wp-load.php');

$homeurl = $_POST['homeurl'];
$name = $_POST['name'];

$str = '';

$str .= '<div class="row">';
$args = array( 'post_type' => 'persona', 'posts_per_page' => 3 );
$the_query = new WP_Query( $args ); 
if ( $the_query->have_posts() ): 
while ( $the_query->have_posts() ) : 
$the_query->the_post(); 

$str .= '<div class="col-md-4">';
$str .= get_the_title();
$str .= '</div>';

endwhile;
endif;
wp_reset_postdata();
$str .= '</div>';

//'http://nobel.coweb.co.il/wp-json/wp/v2/persona?lang=en&filter[s]='
//echo 'http://nobel.coweb.co.il/wp-json/wp/v2/persona?lang=en&filter[s]=paul';
//echo $homeurl.'/wp-json/wp/v2/persona?lang=en&filter[s]='.$name;
echo $str;


?> 
