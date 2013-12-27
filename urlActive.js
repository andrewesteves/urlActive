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
 		var defaults, settings, current, total, slash, link, ext, myLink, url, withExt, minusExt, id, home;

 		// Defaults values class
 		defaults = { 'myClass' : 'active', 'myId' : '#menu' };

 		// if there is no value passed as a parameter, we can deal with default values $.extend
 		settings = $.extend( {}, defaults, options );

 		// Get current page location
 		current = $(location).attr("href");

 		// Count characters from current url
 		total = current.length;

 		// Find the last slash from current plus one to jump the slash
 		slash = current.lastIndexOf("/") + 1; 

 		// Get the url treated to link the id and href
 		link = current.substring(slash, total);

 		// Get the current extension value
 		ext = current.indexOf(".");

 		// Get first link ( must be the home page )
 		home = current;
 		homeActive = $(settings.myId + ' a:first').attr("href");
 		homeIndexActive = $(settings.myId + ' a:first').attr("href") + ext;

 		if(home == homeActive || home == homeIndexActive){
 			homeUrl = current.substr(slash, total);
 		}else{
 			homeWithExt  = current.indexOf(".");
 			homeMinusExt = withExt - slash;
 			homeUrl = current.substr(slash, minusExt);
 			homeUrlTotal = current.substr(slash, total);
 		}

 		// Check if has an extension or not and return the value
 		myLink = ( ( ext > 0 ) ? link : false );

 		// Hasn't an extension
 		if(!myLink){
 			url = current.substr(slash, total);
 		}else{
 		// Has an extension
 			withExt  = current.indexOf(".");
 			minusExt = withExt - slash;
 			url = current.substr(slash, minusExt);
 		}

 		// Handle Collection
 		return this.each(function(){
 			// Get link id
 			id = $(this).attr("id");

 			// Compare treated url with id
 			if( id == url ){ 
 				$(this).addClass(settings.myClass); 
 			}else if( homeUrl == '' || homeUrlTotal == link ){
 				// Add a style in the first link ( home page )
 				$(settings.myId + " a:first").addClass(settings.myClass);
 			}
 		});

 	}

 })(jQuery);
