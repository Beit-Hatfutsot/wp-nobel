		<div class="strip-search-row row-2" data-row_num="2">
		
			<div class="strip-search-row-inner">
				<div class="strip-search-control clearfix">
					<div class="strip-search-right">
						<div class="table">
							<div class="table-cell icon"><?php 
								$img = '';
								$img = get_field('strip_two_icon','option'); 
								if($img):
									echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
								else:
									echo '';
								endif;
								?></div>
							<div class="table-cell text"><?php the_field('strip_two_title','option'); ?></div>
						</div>
					</div>
					<div class="strip-search-middle-right">
						<div class="region-select-wrap">
							<select class="form-control region-select">
							<option data-lat=""><?php the_field('strip_two_button_2','option'); ?></option>
							<?php 
							$args = array( 'post_type' => 'regions', 'posts_per_page' => -1 );
							$the_query = new WP_Query( $args ); 
							if ( $the_query->have_posts() ): 
							while ( $the_query->have_posts() ) : 
							$the_query->the_post(); 
							?>
							<option data-lat="<?php the_field('region_lat'); ?>" data-long="<?php the_field('region_long'); ?>" data-zoom="<?php the_field('region_zoom'); ?>"><?php the_title(); ?></option>
							<?php
							endwhile;
							endif;
							wp_reset_postdata();
							?>
							</select>
						</div>
					</div>
					<div class="strip-search-middle-left">
						<div id="btn-map" class="button"><?php the_field('strip_two_button','option'); ?></div>
					</div>
					<div class="strip-search-left">
						<button class="icon">
							<?php 
								$img = '';
								$img = get_field('strip_two_img','option'); 
								if($img):
									echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="open-btn open-btn-2 active">';
								else:
									echo '';
								endif;
							?>
							<?php 
								$img = '';
								$img = get_field('strip_two_img_close','option'); 
								if($img):
									echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="close-btn close-btn-2">';
								else:
									echo '';
								endif;
							?>
						</button>
					</div>
					<div class="btn_continate_error hide"><?php the_field('btn_continate_error','option'); ?></div>
				</div>
			</div>
			
			<div class="strip-search-row-2-results clearfix" style="height: 0px; overflow:hidden;">

				<div id="map" style="width:800px;" ></div>

				<div id="ltlgcoords" style="position: absolute;top: 0;left: 0;display:none;" >
					<span>lat</span>
					<span id="latcoords"></span>
					<span>lon</span>
					<span id="loncoords"></span>
				</div>
				
				<div class="section-results-by-map col-md-12 clearfix">
			
					<?php if(get_field('title_results_map','option')): ?>
					<h4 id="title-results-row-2" class="title-results clearfix">
						<div class="title-results-text"><?php the_field('title_results_map','option'); ?></div>
						<div class="title-results-search" id="num-results-2" style="display: none;"><?php the_field('text_found','option'); ?> <span>0</span> <?php the_field('text_results','option'); ?></div>
					</h4>
					<?php endif; ?>
					
					<div class="results-by-map clearfix"></div>
					
				</div>
				
				<div id="results-by-map-not-found" class="col-md-12">
					<h4 class="title-results title-no-results"><?php the_field('results_map_not_found','option'); ?></h4>
				</div>
				
				
			</div>
			
			<div id="strip-2-slider" class="strip-slider" style="display: none;">
			
				<div class="strip-slider-inner">
					
					<div class="slider-single">
					<div class="slider-single-inner">
					
						<article class="strip-resualt strip-page popupheight col-md-12 clearfix">
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
									<a class="state-box" data-home="<?php echo home_url(); ?>"><?php echo $terms[0]->name; ?></a>
								</div>
								<div class="persona-category">
									<span><?php the_field('pre_category','option'); ?></span>
									<a class="category-box" data-home="<?php echo home_url(); ?>"><?php echo $terms[0]->name; ?></a>
								</div>
								<div class="persona-category">
									<span><?php the_field('pre_year','option'); ?></span>
									<a class="year-box" data-home="<?php echo home_url(); ?>"><?php echo $terms[0]->name; ?></a>
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
		