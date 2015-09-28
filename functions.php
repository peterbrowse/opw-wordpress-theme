<?php

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Sequences Settings',
		'menu_title'	=> 'Sequences',
		'menu_slug' 	=> 'sequences-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'position' 		=> 7
	));
}
	
?>