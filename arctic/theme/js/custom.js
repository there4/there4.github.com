jQuery(document).ready(function(){

	'use strict';
	
	jQuery.noConflict();
		
	/* Responsive */
	/* --------------------------------------------- */	
	
	 jQuery('.navigation_title').click(function () {
		 var nav = jQuery('#navigation nav');
		 var search = jQuery('#search');
		 if(nav.hasClass('showing')){
			 nav.removeClass('showing').addClass('hiding');
		 }else{
			 nav.removeClass('hiding').addClass('showing');
		 }
		 if(search.hasClass('showing')){
			 search.removeClass('showing').addClass('hiding');
		 }else{
			 search.removeClass('hiding').addClass('showing');
		 }
	 });
	jQuery(window).resize(function(){
		var winwidth = jQuery(window).innerWidth();
		if(winwidth > 980){
			jQuery('#navigation nav').removeClass('showing').removeClass('hiding');
			jQuery('#search').removeClass('showing').removeClass('hiding');      
    	}
	});
	
	/* --------------------------------------------- */
			
	/* Extra Category Buttons */
	/* --------------------------------------------- */
	
	jQuery('#more').click(function() { 
		jQuery('#categories_unlisted').slideToggle();
                jQuery('#more i').toggleClass('fa-rotate-180');
	});
	
	/* --------------------------------------------- */
	
	
	/* Accordian Expandors */
	/* --------------------------------------------- */
	
	jQuery('#latest_list').hide();
	jQuery('#latest_header').click(function() { 
		jQuery('#latest_list').slideToggle(); 
	});
	
	jQuery('#categories_list').hide();
	jQuery('#categories_header').click(function() { 
		jQuery('#categories_list').slideToggle(); 
	});
	
	jQuery('#month_list').hide();
	jQuery('#month_header').click(function() { 
		jQuery('#month_list').slideToggle(); 
	});
	
	jQuery('#year_list').hide();
	jQuery('#year_header').click(function() { 
		jQuery('#year_list').slideToggle(); 
	});
	
	/* --------------------------------------------- */
	
	/* Related Posts */
	/* --------------------------------------------- */
	
	jQuery('#left .related_post_box_media_read_more').hide();
	jQuery('#left').bind('mouseenter', function() {
		jQuery('#left .related_post_box_media_read_more').stop(true).fadeIn(400);
	});
	jQuery('#left').bind('mouseleave', function() {
		jQuery('#left .related_post_box_media_read_more').stop(true).fadeOut(400);
	});
	
	jQuery('#middle .related_post_box_media_read_more').hide();
	jQuery('#middle').bind('mouseenter', function() {
		jQuery('#middle .related_post_box_media_read_more').stop(true).fadeIn(400);
	});
	jQuery('#middle').bind('mouseleave', function() {
		jQuery('#middle .related_post_box_media_read_more').stop(true).fadeOut(400);
	});	
	
	jQuery('#right .related_post_box_media_read_more').hide();
	jQuery('#right').bind('mouseenter', function() {
		jQuery('#right .related_post_box_media_read_more').stop(true).fadeIn(400);
	});
	jQuery('#right').bind('mouseleave', function() {
		jQuery('#right .related_post_box_media_read_more').stop(true).fadeOut(400);
	});	
	
	/* --------------------------------------------- */

	
	/* BlurJS */
	/* --------------------------------------------- */

    jQuery('#post_media_permalink').blurjs({
        source: '#post_media_permalink_container',
        radius: 30,
        overlay: 'rgba(71, 88, 114, .2)',
        cache: false
    });
	jQuery('#post_media_permalink').animate({ opacity: 1 }, { duration: 1500 });

	/* --------------------------------------------- */
	

	/* Image Slider - FlexSlider */
	/* --------------------------------------------- */
	
	jQuery('.flexslider').flexslider({
		animation: 'fade',
		directionNav: true,
		controlNav: false,
		touch : true,
		animationSpeed : 750,
		nextText : '',
		prevText : '',
		slideshow: true,                
		slideshowSpeed: 5000
	});
	
	/* --------------------------------------------- */

});