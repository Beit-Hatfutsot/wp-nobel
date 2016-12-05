<?php 
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
	<article class="strip-resualt strip-page single-person-content col-md-12 clearfix">
		<div class="title-row title-aqua">
			<div class="inner">
				<span><?php the_title(); ?></span>
			</div>
		</div>
		<div class="persona-popup-content">
		<div class="persona-categories clearfix">
			<?php 
			global $post;
			$winning_category = get_the_terms($post->id, 'winning_category');
			$winning_country = get_the_terms($post->id, 'winning_country');
			$winning_year = get_the_terms($post->id, 'winning_year');
			
			if($winning_category){
				$winning_category_name =  $winning_category[0]->name;
				$winning_category_slug =  $winning_category[0]->slug;
			}else{
				$winning_category_name =  '';
				$winning_category_slug =  '';
			}
			if($winning_country){
				$winning_country_name =  $winning_country[0]->name;
				$winning_country_slug =  $winning_country[0]->slug;
			}else{
				$winning_country_name =  '';
				$winning_country_slug =  '';
			}
			if($winning_year){
				$winning_year_name =  $winning_year[0]->name;
				$winning_year_slug =  $winning_year[0]->slug;
			}else{
				$winning_year_name =  '';
				$winning_year_slug =  '';
			}
			?>
			<?php if($winning_country_name != ''): ?>
			<div class="persona-category">
				<span><?php the_field('pre_state','option'); ?></span>
				<a class="state-box" href="<?php echo home_url(); ?>/winning_country/<?php echo $winning_country_slug; ?>/"><?php echo $winning_country_name; ?></a>
			</div>
			<?php endif; ?>
			<?php if($winning_category_name != ''): ?>
			<div class="persona-category">
				<span><?php the_field('pre_category','option'); ?></span>
				<a class="category-box" href="<?php echo home_url(); ?>/winning_category/<?php echo $winning_category_slug; ?>/"><?php echo $winning_category_name; ?></a>
			</div>
			<?php endif; ?>
			<?php if($winning_year_name != ''): ?>
			<div class="persona-category"  style="margin-top: 2px;">
				<span><?php the_field('pre_year','option'); ?></span>
				<a class="year-box" href="<?php echo home_url(); ?>/winning_year/<?php echo $winning_year_slug; ?>/"><?php echo $winning_year_name; ?></a>
			</div>
			<?php endif; ?>
		</div>
		<h2 class="video-title">
			<?php the_title(); ?>, <?php the_field('born_date'); ?><?php if(get_field('deceased')){?> - <?php the_field('deceased'); ?>,<?php }else{ ?>,<?php } ?> <?php if(get_field('wining_year')){ ?><?php the_field('pre_text_won_year','option'); ?> <?php the_field('wining_year'); ?><?php }?><?php if(get_field('pre_text_title')){ ?>, <?php the_field('pre_text_title'); ?>.<?php }else{ ?>.<?php } ?>
		</h2>
		<?php if(get_field('short_movie_mp4')): ?>
		<video class="video-pessona" controls>
		  <source src="<?php the_field('short_movie_mp4'); ?>" type="video/mp4">
		  <source src="<?php the_field('short_movie_ogg'); ?>" type="video/ogg">
		  <source src="<?php the_field('short_movie'); ?>" type="video/3gpp">
		  Your browser does not support HTML5 video.
		</video>
		<?php endif; ?>
		<div class="content-pessona-single">
			<?php the_content(); ?>
			<?php the_field('persona_single_content','option'); ?>
		</div>
		</div>
	</article>
</div>
</section>
<section class="container bg-gray">
	<div class="section-main clearfix">
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