<nav class="container">
	<div class="row">
		<div class="navbar-header col-xs-2">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-top">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<div class="col-sm-3 col-xs-5 header-logo" id="header-logo" data-href="<?php echo home_url(); ?>">
			<a href="<?php echo home_url(); ?>">
				<div class="table">
					<div class="table-cell table-cellicon"><?php 
							$img = '';
							$img = get_field('header_logo','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
							else:
								echo '';
							endif;
						?></div>
					<div class="table-cell"><?php the_field('header_logo_text','option'); ?></div>
				</div>
			</a> 
		</div>
		<div class="col-sm-3 col-xs-5 header-logo header-logo-sec" >
			<a href="<?php the_field('header_logo_link','option'); ?>" target="_blank">
				<div class="table">
					<div class="table-cell table-cellicon"><?php 
							$img = '';
							$img = get_field('header_logo_sec','option'); 
							if($img):
								echo '<img src="'. $img['url'].'" alt="'.$img['alt'].'">';
							else:
								echo '';
							endif;
						?></div>
					<div class="table-cell"><?php the_field('header_logo_text_sec','option'); ?></div>
				</div>
			</a>
		</div>
		<div class="col-sm-6 header-menu">	
			<?php
			wp_nav_menu( array(
					'theme_location'    => 'main_menu',
					'depth'             => 2,
					'container'         => 'div',
					'container_class'   => 'collapse navbar-collapse navbar-top',
					'menu_class'        => 'nav navbar-nav',
					'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
					'walker'            => new wp_bootstrap_navwalker())
			);
			?>
		</div>
	</div>
	<?php do_action('wpml_add_language_selector'); ?>
	
	<?php if(get_field('header_newletter','option')): ?>
	<div class="header-newsletter">
		<div class="inner"><?php the_field('header_newletter','option');?></div>	
	</div>
	<hr class="separator bg-aqua"/>
	<?php else: ?>
	<hr class="separator-2 bg-aqua"/>
	<?php endif; ?>
	<div class="newsletter-wrap">
		<div class="newsletter-popup-content">
			<form class="widget-active_trail_newsletter-form">
			<div class="widget Active_Trail_Newsletter">
				<h2 class="widgettitle"><?php the_field('newsletter_title','option');?></h2>
				<div class="widgetcontent">
					<div class="pre-text"><?php the_field('newsletter_paragraph','option');?></div>
					
						<input class="mm_userid" name="mm_userid" type="hidden" value="59325">
						<small><?php the_field('newsletter_email_title','option');?></small>
						<input class="mm_newemail" name="mm_newemail" type="text" placeholder="<?php the_field('newsletter_email_place','option');?>" value="">
						<div class="mailErr errph hide"><?php the_field('newsletter_email_error','option');?></div>
						<div class="newsletter-groups">
							<small><?php the_field('newsletter_lang_select','option');?></small>
							<input type="checkbox" class="registrationformhe" name="mm_key[]" id="mm_key[registration-form-he-top]" value="registration-form-he">
							<label for="mm_key[registration-form-he-top]"><span>עברית</span></label>
							<input type="checkbox" class="registrationformen" name="mm_key[]" id="mm_key[registration-form-en-top]" value="registration-form-en">
							<label for="mm_key[registration-form-en-top]"><span>English</span></label>
							<input type="checkbox" class="registrationformsp" name="mm_key[]" id="mm_key[registration-form-sp-top]" value="registration-form-sp">
							<label for="mm_key[registration-form-sp-top]"><span>Español</span></label>
						</div>
						<div class="newsletterErr errph hide"><?php the_field('newsletter_check_box','option');?></div>
						<div class="newsletter-submit"><?php the_field('newsletter_btn','option');?></div>
					
					<div class="result-container">
						<div class="loader hide">
							<img src="http://www.bh.org.il/wp-content/themes/bh/images/general/ajax-loader.gif" width="16" height="16">
						</div>
						<div class="result">
							<div class="msg msg-999 hide"><?php the_field('newsletter_error_999','option');?></div>
							<div class="msg msg-1 hide"><?php the_field('newsletter_err_01','option');?></div>
							<div class="msg msg-0 hide"><?php the_field('newsletter_ok_msg','option');?></div>
						</div>
					</div>
				</div>
			</div>
			</form>
			<span class="glyphicon glyphicon-remove"></span>
			
		</div>
	</div>
</nav>