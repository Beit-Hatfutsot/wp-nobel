	<div class="strip-search-row row-3" data-row_num="3">
	
		<div class="strip-search-row-inner">
			<div class="strip-search-control clearfix">
				<div class="strip-search-right">
					<div class="table">
						<div class="table-cell icon"><?php 
							$img = get_field('strip_three_icon','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
							else:
								echo '';
							endif;
							?></div>
						<div class="table-cell text"><?php the_field('strip_three_title','option'); ?></div>
					</div>
				</div>
				<div class="strip-search-middle-right">
					<div class="slider-wrap">
					<div class="slider-background-text">
						<div class="year-bg year-bg-first">1905</div>
						<div class="year-bg year-bg-last"><?php echo date("Y"); ?></div>
					</div>
					<div class="slider-year">
						<div id="slider-3" dir="rtl"></div>
					</div>
					
					</div>
					
				</div>
				<div class="strip-search-middle-left">
					<div id="btn-year" class="button"><span id="years-display" ></span><?php the_field('strip_three_button','option'); ?></div>
				</div>
				<div class="strip-search-left">
					<button class="icon">
						<?php 
							$img = '';
							$img = get_field('strip_three_img','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="open-btn open-btn-3 active">';
							else:
								echo '';
							endif;
						?>
						<?php 
							$img = '';
							$img = get_field('strip_three_img_close','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="close-btn close-btn-3">';
							else:
								echo '';
							endif;
						?>
						
					</button>
				</div>
			</div>
		</div>
		
		<div class="strip-search-row-3-results clearfix" data-tmpurl="<?php echo esc_url( get_template_directory_uri() ); ?>">
		
			<div class="section-results-by-years col-md-12 clearfix">
			
				<?php if(get_field('title_results_year')): ?>
				<h4 id="title-results-row-3" class="title-results clearfix">
					<div class="title-results-text"><?php the_field('title_results_year','option'); ?></div>
					<div class="title-results-search" id="num-results-3" style="display: none;"><?php the_field('text_found','option'); ?> <span>0</span> <?php the_field('text_results','option'); ?></div>
				</h4>
				<?php endif; ?>
				
				<div class="results-by-years clearfix"></div>
			</div>
			
			<div id="results-by-years-not-found" class="col-md-12">
				<h4 class="title-results title-no-results"><?php the_field('results_year_not_found','option'); ?></h4>
			</div>
			
		</div>
		
		<div id="strip-3-slider" class="strip-slider" style="display: none;">
			
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
						<div class="single-person-box"></div>
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