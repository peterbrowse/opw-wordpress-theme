

(function ($) {
    "use strict";
    
    function Looper(element, img, settings) {
    	this.element = element;
    	this.img = img;
    	this.settings = settings;
    	this.debug = false;
    	
    	this.frame_height 			= this.settings.frame_height;
    	this.frame_width			= this.settings.frame_width;
    	this.loop_id				= this.img.id;
    	this.loop_fs				= this.img.name;
    	this.loop_container_class	= this.settings.loop_container_class;
        
        this.init();

        return this;
    };
    
    Looper.prototype = {
    	init: function () {
    		var klass = this;
    		
    		klass.createContainer();
    		klass.styleContainer();
    		klass.attachAnimator();
    	},
    	createContainer: function () {
	    	var klass = this;
	    	var container = '<div class="' + klass.loop_container_class + '" id="' + klass.loop_id + '"></div>';
	    	$(klass.element).append(container);
    	},
    	styleContainer: function () {
	    	var klass = this;
	    	var container = $('#' + klass.loop_id);
	    	container.height(klass.frame_height + 'px');
	    	container.width(klass.frame_width + 'px' );
	    	container.css('background-image', 'url(' + klass.img.src + ')');
	    	container.show();
    	},
    	attachAnimator: function() {
	    	
    	}
    };
    
    $.fn.looper = function (img, options) {
    	var settings = $.extend({}, img, options);
    	return new Looper(this, img, settings);
    };
}(jQuery));