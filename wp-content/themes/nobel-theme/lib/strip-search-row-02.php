<style>	
.section-results-by-taxomony {
    display: block; 
}
</style>
<?php 
	//global $template;
	//$str_trim = dirname(__FILE__) . '/';
	//$str_trim = trim($str_trim,'lib');
	//$template_text_1 = trim($template,$str_trim);
	//$template_text = str_replace("xonomy-","",$template_text_1);
	$template_text = 'winning_country';
	$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); 
	  $args = array('post_type' => 'persona',
		'posts_per_page' => -1,
		'orderby' => 'title',
		'order' => 'ASC',
        'tax_query' => array(
            array(
                'taxonomy' => $template_text,
                'field' => 'slug',
                'terms' => $term->name,
            ),
        ),
     );
	
	$loop = new WP_Query($args);
	$count = $loop->post_count;

	?>

	<div class="strip-search-row row-0 clearfix" data-row_num="0">
		
		<div class="strip-search-row-0-results clearfix" data-tmpurl="<?php echo esc_url( get_template_directory_uri() ); ?>">
		
			<div class="section-results-by-taxomony clearfix" data-moreresultstext="<?php the_field('moreresultstext','option'); ?>">
				<?php if(get_field('title_results','option')): ?>
				<h4 id="title-results-row-0" class="title-results clearfix">
					<div class="title-results-search" id="num-results-0"><?php the_field('text_found','option'); ?> <span><?php echo $count; ?></span> <?php the_field('text_results','option'); ?></div>
				</h4>
				<?php endif; ?>
				<div class="results-phrase">
				<div class="results-from-ajax clearfix">
				<?php
				
				$count_slide = 1;
				$count_results = 1;
				if($loop->have_posts()) :
					while($loop->have_posts()) : $loop->the_post();
					
						$winning_category = get_the_terms($loop->id, 'winning_category');
						$winning_country = get_the_terms($loop->id, 'winning_country');
						$winning_year = get_the_terms($loop->id, 'winning_year');
						
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
						if ($count_results%6 == 1){  
							echo  '<div class="results-slide clearfix" data-slidenum="'.$count_slide.'">';
							$count_slide++;
						}	
						?>
						<div class="col-xs-4 single-result-box" data-slidepopup="<?php echo $count_results; ?>" data-gender="<?php the_field('gender'); ?>" data-persona_img="<?php the_field('persona_img'); ?>"  data-short_movie_mp4="<?php the_field('short_movie_mp4'); ?>" data-born_date="<?php the_field('born_date'); ?>" data-deceased="<?php the_field('deceased'); ?>" data-wining_year="<?php the_field('wining_year'); ?>" 
						data-winning_category_name="<?php echo $winning_category_name; ?>" 
						data-winning_category_slug="<?php echo $winning_category_slug; ?>" 
						data-winning_country_name='<?php echo $winning_country_name; ?>' 
						data-winning_country_slug='<?php echo $winning_country_slug; ?>' 
						data-winning_year_name='<?php echo $winning_year_name; ?>' 
						data-winning_year_slug='<?php echo $winning_year_slug; ?>' 
						data-map_lat="<?php the_field('map_lat'); ?>" 
						data-map_long="<?php the_field('map_long'); ?>" 
						data-map_area="<?php the_field('map_area'); ?>">
						<div class="single-result">
						<div class="inner">
						<div class="img"><img src="<?php the_field('persona_img'); ?>"/></div>
						<h5><?php the_title(); ?></h5>
						<?php 
						
						
						if(($winning_year_name != '')&&($winning_category_name != '')){
							echo '<div>'.$winning_category_name.', '.$winning_year_name.'</div>';
						}else{
							if($winning_year_name == ''){
								echo '<div>'.$winning_category_name.'</div>';
							}
							if($winning_category_name == ''){
								echo '<div>'.$winning_year_name.'</div>';
							}
						}
						?>
						<div><?php the_field('country_active'); ?></div>
						<div class="data-title hide"><?php the_title(); ?></div> 
						<div class="data-content hide"><?php the_content(); ?></div>
						<div class="data-pre_text_title hide"><?php the_field('pre_text_title');?></div> 
						</div>
						</div>
						</div>
						<?php 
						if ($count_results%6 == 0){ 
							echo '</div>';
						}
						$count_results++;
						
					endwhile;
				 endif;
				 
				 if ($count_results%6 != 1){
					echo '</div>';
				}
				
				$count_slide--;
				
				if($count_slide > 1){
					echo  '<div class="numbers">';
					if($count_slide > 2){
					echo  '<span class="number-last">&laquo;</span>';
					}
					echo  '<span class="number-right">&lsaquo;</span>';
					for( $i = 1 ; $i <= $count_slide ; $i++ ){
						if($i == 1){
						echo  '<span class="number active" data-slidenum="'.$i.'">'.$i.'</span>';
						}else{
						echo  '<span class="number" data-slidenum="'.$i.'">'.$i.'</span>';
						}
					}
					echo  '<span class="number-left">&rsaquo;</span>';
					if($count_slide > 2){
					echo  '<span class="number-first">&raquo;</span>';
					}
					echo  '</div>';
				}
				
				?>
				
				</div>
				</div>
				
			</div>
			<?php if($count == 0): ?>
			<div id="results-by-taxonomy-not-found" class="col-md-12">
				<h4 class="title-results title-no-results"><?php the_field('results_phrase_not_found','option'); ?></h4>
			</div>
			<?php endif; ?> 
		</div>
		
		<div id="strip-0-slider" class="strip-slider" style="display: none;" data-count="<?php echo $count; ?>">
			<div class="strip-slider-inner">
			
				<div class="slider-single">
				<div class="slider-single-inner">
				
					<article class="strip-resualt strip-page  col-md-12 clearfix">
						<div class="title-row title-aqua">
							<div class="inner">
								<span class="title-span"></span>
							</div> 
						</div>
						<div class="row persona-popup-row">
						<div class="persona-popup-content">
							<div class="persona-categories clearfix">
								<div class="persona-category">
									<span><?php the_field('pre_state','option'); ?></span>
									<a class="state-box"></a>
								</div>
								<div class="persona-category">
									<span><?php the_field('pre_category','option'); ?></span>
									<a class="category-box"></a>
								</div>
								<div class="persona-category">
									<span><?php the_field('pre_year','option'); ?></span>
									<a class="year-box"></a>
								</div>
							</div>
							<h2 class="video-title" data-pretextwonyear="<?php the_field('pre_text_won_year','option'); ?>" data-pretextwonyearwoman="<?php the_field('pre_text_won_year_wom','option'); ?>"></h2>	
							<div class="video-pessona-wrap"></div>
							<div class="content-pessona"></div>
						</div>
						</div>
					</article>
					

					<div class="close-popup"></div>
					<div class="slide-next-btn"></div>
					<div class="slide-prev-btn"></div>
						
				</div>
				</div>
				
			</div>
		</div>
		
	</div>
	