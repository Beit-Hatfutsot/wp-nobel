<section class="container bg-gray strip-ben-gal">
	<div class="section-main">
		<?php if(get_field('home_first_title_bb')): ?>
		<div class="strip-search-top-title"><?php the_field('home_first_title_bb'); ?></div>
		<?php endif; ?>
		<article class="strip-resualt strip-home clearfix">
			<header class="thumbnail-warp">
				<?php 
					$img = ''; 
					$img = get_field('header_left_img_bb'); 
					if($img):
						echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
					else:
						echo '';
					endif;
				?>
			</header>
			<section>
				<div class="title-row title-red">
					<div class="inner">
						<span><?php the_field('home_title_bb'); ?></span>
					</div>
				</div>
				<div class=""><?php the_field('home_content_bb'); ?></div>
				<hr />
				<div class="row">
					<div class="col-md-6 strip-res-link-ben-gal">
						<a class="readmore" href="<?php the_field('home_bottom_section_link'); ?>"><?php the_field('readmore','option'); ?></a>
					</div>
				</div>
			</section>
		</article>
	</div>
</section>		