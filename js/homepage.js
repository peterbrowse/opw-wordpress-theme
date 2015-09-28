var web_worker_url = 'http://worker.onepixelwide.co.uk',
//var web_worker_url = 'http://localhost:5000',
	request_search = '/request/search',
	request_details = '/request/details',
	tracks = '',
	track_selection = '',
	sequences = [],
	imageLoader = new PxLoader(),
	soundLoader = new PxLoader(),
	imagesReady = false,
	soundReady = false,
	audioLoaded = false,
	track = '',
	audioPlayer = soundManager.setup({
		url: '/swf//',
		onready: function() {
		  soundReady = true;
		}	
	});

$(document).ready(function(){
	$('.track_search_form').on('submit', function(e) {
		e.preventDefault();
		
		$('.track_search').attr('disabled', 'disabled');
		$('.track_search_message').hide();
		$('.track_search_results, .track_search_message').empty();
		$('.track_search_loading_image').show();
		
		var input_value = $('.track_search').val();
		
		$.get(web_worker_url + request_search, {track_search : input_value}, function(response) {
			tracks = response;
			if(tracks.length < 1) {
				$('.track_search_loading_image').hide();
				$('.track_search_message').text('No tracks found...');
				$('.track_search_message').show();
			} else {
				tracks.forEach(function(track) {
					var item_html = '<div class="track_search_result">';
						item_html += '<img src="' + track.album.images[2].url + '" />';
						item_html += '<p class="song">' + track.name + '<br />';
						item_html += '<span>' + track.artists[0].name + '</span></p>';
						item_html += '</div>';
					
					$('.track_search_results').append(item_html);
				});
				$('.track_search_loading_image').hide();
			}
			$('.track_search').removeAttr('disabled');
		});
		
		return false;
	});
	
	$(document).on('click', '.track_search_result', function(e) {
		var $selection = $(this).index('.track_search_result');
		$track_selection = tracks[$selection];
		
		$('.track_search').attr('disabled', 'disabled');
		$('.track_search_message').hide();
		$('.track_search_results, .track_search_message').empty();
		$('.track_search_loading_image').show();
		
		$.get(web_worker_url + request_details, {track : $track_selection}, function(response) {
			if(!!response.error) {
				$('.track_search_loading_image').hide();
				$('.track_search_message').text(response.error);
				$('.track_search_message').show();
				$('.track_search').removeAttr('disabled');	
			} else {
				$track_selection.audio_summary = response;
				if(soundReady) {
					audioPlayer.stop();
					if(soundManager.getSoundById('track')) {
						audioPlayer.destroySound('track');
					}
					audioPlayer.createSound({
						id: 'track',
						url: $track_selection.preview_url,
						autoLoad: true,
						onload: function() {
							this.play({
								onfinish: function() {
									this.destruct();
								}
							});
							$('.track_search_loading_image').hide();
							$('.track_search').removeAttr('disabled');
	
							console.log($track_selection);
						}
					});
				}
				
/*
				audioPlayer
				
				soundLoader.addSound($track_selection.preview_url);
				soundLoader.addCompletionListener(function(){
					if(soundReady) {
						
						
						audioPlayer.play('track', { onfinish: function() {
								this.destruct();
							}
						});
					}
				});
				
				soundLoader.start();
*/
			}
		});
	});
	
	sequences_info.sequences.forEach(function(seq, i) {
		var path = sequences_info.aws_link;
		sequences[i] = imageLoader.addImage(path + seq.sequence_file_name + '.' + seq.sequence_file_type);
		var fpm = 24 * 60;
		var fps = Math.round(fpm / seq.sequence_tempo);
		$(sequences[i]).attr('name', fps);
		$(sequences[i]).attr('id', seq.sequence_file_name);
	});
	
	imageLoader.addProgressListener(function(e) {
	    console.log(e.completedCount + ' / ' + e.totalCount); 
	}); 
	
	imageLoader.addCompletionListener(function() { 
		console.log('Preload complete');
		imagesReady = true;
		$('.test_area').looper(sequences[0], {
			frame_height: 200,
			frame_width: 356,
			loop_container_class: 'loop_container'
		});
	});
	
	imageLoader.start();
});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}