<?php // Template Name: Home
get_header(); 
get_template_part('lib/site', 'nav-top'); 
$url = esc_url( get_template_directory_uri() ); 
$readmore = get_field('readmore','option');
$img = ''; 
$img = get_field('medal','option'); 
if($img):
	$medalimg =  '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
else:
	$medalimg =  '';
endif;
?>
<section class="container bg-gray">
<div class="section-main">
	<?php if(get_field('dedication','option')): ?>
	<div class="dedication"><?php the_field('dedication','option'); ?></div>
	<?php else: ?>
	<hr class="separator-3"/>
	<?php endif; ?>
	<?php 
			
			$count = 0;
			$myposts = get_posts( 'numberposts=5&order=asc&orderby=rand&suppress_filters=0&post_type=persona' );
			foreach ( $myposts as $post ) : setup_postdata( $post );
			$count++;
			$img = '';
			$img = get_field('persona_img'); 
			//$link = get_permalink();
			//$title = get_the_title();
			if($count == 1)
			{
				$img1 =  $img;
				$link1 = get_permalink( );
			}
			if($count == 2)
			{
				$img2 =  $img;
				$link2 = get_permalink( );	
			}
			if($count == 3)
			{
				$img3 =  $img;
				$link3 = get_permalink( );		
			}
			if($count == 4)
			{
				$img4 = $img;
				$link4 =get_permalink( );		
			}
			if($count == 5)
			{
				$img5 = $img;
				$link5 = get_permalink( );		
			}
			endforeach;
			wp_reset_postdata();
			?>
	<article class="strip-resualt strip-home strip-home-top clearfix">
		<header class="thumbnail-warp-home">
			<div class="homebox-wrap clearfix">
			<div class="homebox"></div>
			<a class="homebox" style="background-image:url(<?php echo $img1; ?>)"  href="<?php echo $link1; ?>" ></a> 
			<div class="homebox"></div>
			<a class="homebox" style="background-image:url(<?php echo $img2; ?>)"  href="<?php echo $link2;  ?>" ></a> 
			<a class="homebox" style="background-image:url(<?php echo $img3; ?>)"  href="<?php echo $link3;  ?>" ></a> 
			<div class="homebox"></div>
			<a class="homebox" style="background-image:url(<?php echo $img4; ?>)"  href="<?php echo $link4;  ?>" ></a> 
			<div class="homebox"></div>
			<div class="homebox"></div>
			<a class="homebox" style="background-image:url(<?php echo $img5; ?>)"  href="<?php echo $link5; ?>"  ></a>
			<div class="homebox"></div>
			<div class="homebox"></div>
			</div>
		</header>
		<section>
			<div class="title-row title-aqua">
				<div class="inner">
					<span><?php the_field('home_title'); ?></span>
				</div>
			</div>
			<div class=""><?php the_field('home_content'); ?></div>
		</section>
	</article>
	
	<div class="strip-search-top-title"><?php the_field('home_search_title','option'); ?></div>
	<?php get_template_part('lib/strip','search-row-1'); ?>
	<?php get_template_part('lib/strip','search-row-2'); ?>
	<?php get_template_part('lib/strip','search-row-3'); ?>
</div>
</section>
<?php
get_template_part('lib/strip', 'section-bottom');
get_template_part('lib/strip', 'section-eli-ben-gal');
get_template_part('lib/site', 'footer');
get_footer();
?>