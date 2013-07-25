/*!
 * jQuery plugin urlActive
 *
 * Plugin to add a style to the link id according to url
 * Developed by Andrew Esteves
 * http://andrewesteves.com.br
 *
 * Copyright 2013 Hagile agência digital
 * http://hagile.com.br
 * Released under the MIT license
 * http://pt.wikipedia.org/wiki/MIT_License
 *
 */
 (function($){

  $.fn.urlActive = function( options ){

 		// Variables
 		var defaults, settings, current, total, slash, link, ext, myLink, url, withExt, minusExt, id;

 		// Defaults values class
 		defaults = { 'myClass' : 'active' };

 		// if there is no value passed as a parameter, we can deal with default values $.extend
 		settings = $.extend( {}, defaults, options );

 		// Get current page location
 		current = $(location).attr("href");

 		// Count characters from current url
 		total = current.length;

 		// Find the last slash from current plus one to jump the slash
 		slash = current.lastIndexOf("/") + 1; 

 		// Change the current if it hasn't an extension
 		link = current.substring(slash, total);

 		// Get the current extension value
 		ext = current.indexOf(".");

 		// Check if has an extension or not and return the value
 		myLink = ( ( ext > 0 ) ? link : ext );

 		// Has an extension
 		if( $.isNumeric(myLink)  ){
 			url = current.substr(slash, total);
 		}else{
 		// Hasn't an extension
 			withExt  = current.indexOf(".");
 			minusExt = withExt - slash;
 			url = current.substr(slash, minusExt);
 		}

 		// Handle Collection
 		return this.each(function(){
 			// Get link id
 			id = $(this).attr("id");

 			$(this).removeClass(settings.myClass);

 			// Compare treated url with id
 			if( id == url ){ $(this).addClass(settings.myClass); }
 		});

 	}

 })(jQuery);
