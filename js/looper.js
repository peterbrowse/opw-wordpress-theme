

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
    	this.loop_fps				= this.img.name;
    	this.loop_tempo				= this.img.alt;
    	this.loop_frames			= this.img.lang;
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
	    	container.css('display','inline-block');
	    	container.data('fps', klass.loop_fps);
	    	container.data('tempo', klass.loop_tempo);
    	},
    	attachAnimator: function() {
	    	var klass = this;
	    	var container = $('#' + klass.loop_id);
	    	container.motio({
		    	startPaused: 1,
		    	width: klass.frame_width,
		    	height: klass.frame_height,
		    	frames: klass.loop_frames,
		    	fps: 24
	    	});
    	}
    };
    
    $.fn.looper = function (img, options) {
    	var settings = $.extend({}, img, options);
    	return new Looper(this, img, settings);
    };
}(jQuery));