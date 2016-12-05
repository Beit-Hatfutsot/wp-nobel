<?php 
get_header(); 
get_template_part('lib/site', 'header'); 
get_template_part('lib/site', 'nav-top'); 
?>
<section class="container bg-gray">
	<div class="section-main">
	<?php if(get_field('dedication','option')): ?>
	<div class="dedication"><?php the_field('dedication','option'); ?></div>
	<?php else: ?>
	<hr class="separator-3"/>
	<?php endif; ?>
		<div class="archive-inner tax-inner clearfix">
		<div class="persona-categories clearfix">
			<div class="persona-category">
				<?php the_field('pre_year','option'); ?>
				<?php
				global $post;
				$terms = get_the_terms($post->id, 'winning_year');
				?>
				<a id="taxonomy-winning-year" class="year-box" data-category_term_id="<?php echo $terms[0]->name; ?>"><?php echo $terms[0]->name; ?></a>
			</div>
		</div>
		<?php get_template_part('lib/strip','search-row-03'); ?>
		</div>
		<div class="strip-search-top-title"><?php the_field('home_search_title','option'); ?></div>
		<?php get_template_part('lib/strip','search-row-1'); ?>
		<?php get_template_part('lib/strip','search-row-2'); ?>
		<?php get_template_part('lib/strip','search-row-3'); ?>
	</div>
</section>
<?php
get_template_part('lib/site', 'footer');
get_footer();
?>