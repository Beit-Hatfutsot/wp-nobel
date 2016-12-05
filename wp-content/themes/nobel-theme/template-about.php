<?php // Template Name: About
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
	<article class="strip-resualt strip-page col-md-12 clearfix">
		<div class="title-row title-red">
			<div class="inner">
				<span><?php the_title(); ?></span>
			</div>
		</div>
		<div class="about-content"><?php the_content(); ?></div>
	</article>
</div>
</section>
<?php if( have_rows('story_image_rl') ): ?>
<section class="container bg-gray">
<div class="section-main">
	<?php if(get_field('story_title')): ?>
	<h3 class="about-title"><?php the_field('story_title'); ?></h3>
	<?php else: ?>
	<br /><br />	
	<?php endif; ?>
	<div class="story-images-wrap clearfix">
	<?php while ( have_rows('story_image_rl') ) : the_row(); ?>
		<div class="col-md-4 story-image">
			<?php 
			$img = ''; 
			$img = get_sub_field('story_img'); 
			if($img):
				echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
			else:
				echo '';
			endif;
			?>
			<div class="story-img-text"><?php the_sub_field('story_img_text'); ?></div>
		</div>
	<?php endwhile; ?>
	</div>
	<div style="display: none;">
	<?php get_template_part('lib/strip','search-row-1'); ?>
	<?php get_template_part('lib/strip','search-row-2'); ?>
	<?php get_template_part('lib/strip','search-row-3'); ?>
	</div>
</div>
</section>
<?php endif; ?>
<?php
get_template_part('lib/site', 'footer');
get_footer();
?>