<?php get_header(); ?>
<div class="search_container">
	<form class="track_search_form">
		<input type="text" name="track_search" class="track_search">
	</form>
	<div class="track_search_loading_image">
		<img src="<?php echo get_template_directory_uri(); ?>/images/loader.gif" />
	</div>
	<div class="track_search_message">
	</div>
	<div class="track_search_results">
	</div>
	<div class="test_area"></div>
</div>

<?php get_footer(); ?>