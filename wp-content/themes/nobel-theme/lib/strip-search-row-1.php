	<div class="strip-search-row row-1 clearfix" data-row_num="1">
		
		<div class="strip-search-row-inner clearfix">
			<div class="strip-search-control clearfix">
				<div class="strip-search-right">
					<div class="table">
						<div class="table-cell icon"><?php 
							$img = '';
							$img = get_field('strip_one_icon','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
							else:
								echo '';
							endif;
							?></div>
						<div class="table-cell text"><?php the_field('strip_one_title','option'); ?></div>
					</div>
				</div>
				<div class="strip-search-middle-right">
					<input id="input-phrase" class="form-control" type="text" placeholder="<?php the_field('strip_one_search','option'); ?>"/>
					<button id="btn-phrase" class="button button-search"><?php the_field('strip_one_button_search','option'); ?></button>
				</div>
				<div class="strip-search-middle-left">
					<button id="btn-letters" class="button button-third"><?php the_field('strip_one_button_first','option'); ?></button>
					<button id="btn-categories" class="button button-twothird"><?php the_field('strip_one_button_second','option'); ?></button>
				</div>
				<div class="strip-search-left">
					<button class="icon">
						<?php 
							$img = '';
							$img = get_field('strip_one_img','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="open-btn open-btn-1 active">';
							else:
								echo '';
							endif;
						?>
						<?php 
							$img = '';
							$img = get_field('strip_one_img_close','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'" class="close-btn close-btn-1">';
							else:
								echo '';
							endif;
						?>
					</button>
				</div>
				<div class="btn_search_error hide"><?php the_field('btn_search_error','option'); ?></div>
			</div>
		</div>
		
		<div class="strip-search-row-1-results clearfix" data-tmpurl="<?php echo esc_url( get_template_directory_uri() ); ?>">
		
			<div class="section-categories col-md-12 clearfix">
				<?php if(get_field('title_category','option')): ?><h4 class="title-category"><?php the_field('title_category','option'); ?></h4><?php endif; ?>
				<?php if(get_field('text_category','option')): ?><p class="text-category"><?php the_field('text_category','option'); ?></p><?php endif; ?>
				<ul class="list-category clearfix">
					<?php
					$args = array(
					  'taxonomy'     => 'winning_category',
					  //'orderby'      => $orderby,
					  'show_count'   => 0,
					  'pad_counts'   => 0,
					  //'hierarchical' => $hierarchical,
					  'title_li'     => '',
					  'hide_empty'   => 0,
					  'show_count' => 1,
					);
					
					$terms = get_terms($args);
					
					foreach ($terms as $item) {
						echo '<li data-category_term_id="'.$item->term_id.'">'.$item->name.'</li>';
					}
					
					?>
				</ul>
			</div>
			<div class="section-letters col-md-12 clearfix">
				<?php if(get_field('title_letters','option')): ?><h4 class="title-letters"><?php the_field('title_letters','option'); ?></h4><?php endif; ?>
				<?php if(get_field('text_letters','option')): ?><p class="text-letters"><?php the_field('text_letters','option'); ?></p><?php endif; ?>
				
				<?php 
				$persona_names = array();
				$args = array( 'post_type' => 'persona', 'posts_per_page' => -1 );
				$the_query = new WP_Query( $args ); 
				if ( $the_query->have_posts() ): 
				while ( $the_query->have_posts() ) : 
				$the_query->the_post(); 
				$first_name = get_field('first_name');
				$chars = preg_split( '/(?<!^)(?!$)/u', $first_name );
				array_push($persona_names, $chars[0]);
				endwhile;
				endif;
				wp_reset_postdata();
				$persona_names_array = array_unique($persona_names);
				$list_letters = get_field('list_letters','option');
				$list_letters_array = explode(" ", $list_letters);
				?>
				<ul class="list-letters">
				<?php 
				foreach ($list_letters_array as $letter) { 
					$class = '';
					if (in_array($letter, $persona_names_array)) {
						$class = 'full';
					} else {
						$class = 'empty';
					}
					?>
					<li data-letter="<?php echo $letter; ?>" class="<?php echo $class; ?>"><?php echo $letter; ?></li>
					<?php 
				} 
				?>
				</ul>
			</div>
			<div class="section-results col-md-12 clearfix" data-moreresultstext="<?php the_field('moreresultstext','option'); ?>">
				<?php if(get_field('title_results','option')): ?>
				<h4 id="title-results-row-1" class="title-results clearfix">
					<div class="title-results-text"><?php the_field('title_results','option'); ?></div>
					<div class="title-results-search" id="num-results-1" style="display: none;"><?php the_field('text_found','option'); ?> <span>0</span> <?php the_field('text_results','option'); ?></div>
				</h4>
				<?php endif; ?>
				<div class="results-phrase"></div>
			</div>
			
			<div id="results-phrase-not-found" class="col-md-12">
				<h4 class="title-results title-no-results"><?php the_field('results_phrase_not_found','option'); ?></h4>
			</div>
			 
		</div>

		<div id="strip-1-slider" class="strip-slider" style="display: none;">
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
		