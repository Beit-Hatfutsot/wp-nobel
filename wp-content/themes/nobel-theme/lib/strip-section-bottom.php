<section class="container bg-gray">
	<div class="strip-bottom-title"><?php the_field('home_first_title_cc'); ?></div>
	<div class="section-bottom clearfix">
	<?php 
	$readmore = get_field('readmore','option');
	//$medalimg = acf_option_img('medal');
	$count = 0;
	$args = array( 'post_type' => 'persona', 'posts_per_page' => 3, 'orderby' => 'rand' );
	$the_query = new WP_Query( $args ); 
	if ( $the_query->have_posts() ): 
	while ( $the_query->have_posts() ) : 
	$the_query->the_post(); 
	$count++;
	$classcolor = '';
	if($count==1)
			$classcolor = 'title-orange';
	if($count==2)
			$classcolor = 'title-aqua';
	if($count==3)
			$classcolor = 'title-red';
	?>
	<article class="col-sm-4 ">
		
		<header class="thumbnail-warp thumbnail-warp-2">
			<a href="<?php the_permalink(); ?>" class="<?php echo $classcolor; ?>">
			<?php
			$img = '';
			$img = get_field('persona_img'); 
			?>
			<img src="<?php echo $img; ?>" class="thumbnail-img">
			<?php  /*
			<h1 class="thumbnail-title">
				<?php the_title(); ?><?php echo $medalimg; ?>
			</h1> */
			?>
			</a>
		</header>
		<section>
			<div class="title-row <?php echo $classcolor; ?>">
				<div class="inner"><span><?php the_title(); ?></span></div>
			</div>
			<p><?php echo new_content(356); ?></p>
			<a class="readmore" href="<?php the_permalink(); ?>"><?php echo $readmore; ?></a>
		</section>
	</article>
	<?php
	endwhile;
	endif;
	wp_reset_postdata();
	?>
	</div>
</section>