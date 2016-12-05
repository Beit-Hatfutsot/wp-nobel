<footer class="container bg-gray">
	<hr class="separator bg-aqua border-radius"/>
	<div class="footer-top">
		<div class="footer-top-row">
			<?php the_field('footer_top','option'); ?>
			<div class="text-center"><a href="<?php the_field('footer_adv_link','option'); ?>" target="_blank"><?php 
				$img = ''; 
				$img = get_field('footer_adv_img','option'); 
				if($img):
					echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
				else:
					echo '';
				endif;
				?></a></div>
		</div>
		<div class="footer-top-icons clearfix">
			<div class="col-sm-6 icons-companies">
				<?php
				if( have_rows('footer_icons_right_rl','option') ):
				while ( have_rows('footer_icons_right_rl','option') ) : the_row();
				?>
				<a href="<?php the_sub_field('footer_right_link'); ?>" target="_blank"><?php 
					$img = ''; 
					$img = get_sub_field('footer_right_img'); 
					if($img):
						echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
					else:
						echo '';
					endif;
					?></a>
				<?php 
				endwhile;
				endif;
				?>
			</div>
			<div class="col-sm-6 icons-social">
				<?php
				if( have_rows('footer_icons_left_rl','option') ):
				while ( have_rows('footer_icons_left_rl','option') ) : the_row();
				?>
				<a href="<?php the_sub_field('footer_link'); ?>" target="_blank"><?php 
				$img = ''; 
				$img = get_sub_field('footer_img'); 
				if($img):
					echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
				else:
					echo '';
				endif;

				?></a>
				<?php 
				endwhile;
				endif;
				?>
			</div>
		</div>
	</div>
	<hr class="separator bg-aqua border-radius"/>
	<div class="footer-bottom">
		<?php the_field('footer_bottom','option'); ?>
	</div>
</footer>