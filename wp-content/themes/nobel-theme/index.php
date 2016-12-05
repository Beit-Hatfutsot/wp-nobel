<?php 
get_header(); 
get_template_part('lib/site', 'header'); 
get_template_part('lib/site', 'nav-top'); 
?>
<section class="container">
<?php 
if ( have_posts() ) : while ( have_posts() ) : the_post();
	if ( is_single() ) : 
	?>
	<article>
		<h1><?php the_title() ;?></h1>
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail(); ?>
		<?php endif; ?>
		<?php the_content(); ?>
		<?php wp_link_pages(); ?>
		<?php comments_template(); ?>
	</article>
	<?php
	else : 
	?>
   <article>
		<h1><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'nobeltheme' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
		<?php if ( has_post_thumbnail() ) : ?>
		   <?php the_post_thumbnail(); ?>
		<?php endif; ?>
		<?php the_content(); ?>
		<?php wp_link_pages(); ?>
		<?php  if ( comments_open() ) : ?>
	  <p class="text-right">
		  <a class="btn btn-success" href="<?php the_permalink(); ?>#comments"><?php comments_number(__('Leave a Comment','nobeltheme'), __('One Comment','nobeltheme'), '%' . __(' Comments','nobeltheme') );?> <span class="glyphicon glyphicon-comment"></span></a>
	  </p>
		<?php endif; ?>
   </article>
 <?php  endif; ?>
<?php endwhile; ?>
	<?php if (function_exists('page_navi')) { ?>
		<?php page_navi(); ?>
	<?php } else {  ?>
	<nav class="wp-prev-next">
		<ul class="pager">
			<li class="previous"><?php next_posts_link() ?></li>
			<li class="next"><?php previous_posts_link() ?></li>
		</ul>
	</nav>
	<?php } ?>
<?php 
endif; 
?>
</section>
<?php
get_template_part('lib/site', 'footer');
get_footer();
?>