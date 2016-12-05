<?php 
get_header(); 
get_template_part('lib/site', 'nav-top'); 
$url = esc_url( get_template_directory_uri() ); 
$readmore = get_field('readmore','option');
$medalimg = get_field('medal','option'); 
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