/**
 *
 *	All the custom js code for theme goes here.
 *
 **/
 
 jQuery(document).ready(function() {
	 jQuery('#searchform').hide();
	 jQuery('#search-icon').on('click', function() {
		 jQuery('#searchform').fadeIn();
		 jQuery('#search-icon').fadeOut(100);
	 });
 });
 
 jQuery(function(){
	jQuery('.nav-menu').slicknav();
});