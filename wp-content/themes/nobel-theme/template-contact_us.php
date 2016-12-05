<?php // Template Name: Contact Us
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
	<article class="clearfix">
		<h1><?php the_title(); ?></h1>
		<div class=""><?php the_content(); ?></div>
		<div class="contactus-icons clearfix">
		<?php
		if( have_rows('contactus_social_icons') ):
		while ( have_rows('contactus_social_icons') ) : the_row();
		?>
			<div class="col-md-6">
				<div class="clearfix">
					<div class="col-md-2"><a href="<?php the_sub_field('icon_link');?>" target="_blank"><?php 
						$img = ''; 
						$img = get_sub_field('story_img'); 
						if($img):
							echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
						else:
							echo '';
						endif;
						?></a></div>
					<div class="col-md-10"><?php the_sub_field('icon_text'); ?></div>
				</div>
			</div>
		<?php
		endwhile;
		endif;
		?>
		</div>
		<?php if( have_rows('contactus_direction') ): ?>
		<div class="contactus-map clearfix">
		<div class="row">
			<div class="col-md-5">
				<?php while ( have_rows('contactus_direction') ) : the_row(); ?>
				<div class="table">
					<div class="table-cell table-cell-icon"><?php 
							$img = ''; 
							$img = get_sub_field('direction_icon'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
							else:
								echo '';
							endif;
						?></div>
					<div class="table-cell"><?php the_sub_field('direction_text'); ?></div>
				</div>
				<?php endwhile; ?>
			</div>
			<div class="col-md-7">
				<iframe class="contactus-iframe" src="<?php the_field('contact_iframe'); ?>"></iframe>
			</div>
		</div>
		</div>
		<?php endif; ?>
		<div class="contactus-form clearfix">
			<div class="inner row">
				<h3><?php the_field('contact_form_title'); ?></h3>
				<?php echo do_shortcode(get_field('contact_form')); ?>
			</div>
		</div>
	</article>
	
	<div style="display: none;">
	<?php get_template_part('lib/strip','search-row-1'); ?>
	<?php get_template_part('lib/strip','search-row-2'); ?>
	<?php get_template_part('lib/strip','search-row-3'); ?>
	</div>
</div>
</section>

<?php
//get_template_part('lib/strip', 'section-bottom');
get_template_part('lib/site', 'footer');
get_footer();
?>