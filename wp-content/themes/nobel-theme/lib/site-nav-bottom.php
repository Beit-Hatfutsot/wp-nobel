<?php if ( has_nav_menu( 'footer_menu' ) ) : ?>
   <div class="container">
		<div class="navbar-footer">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-bottom">
				<span class="sr-only"><?php _e('Toggle navigation','nobeltheme'); ?></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<?php
		wp_nav_menu( array(
				'theme_location'    => 'footer_menu',
				'depth'             => 2,
				'container'         => 'div',
				'container_class'   => 'collapse navbar-collapse navbar-bottom',
				'menu_class'        => 'nav navbar-nav',
				'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
				'walker'            => new wp_bootstrap_navwalker())
		);
		?>
	</div>
<?php endif; ?>