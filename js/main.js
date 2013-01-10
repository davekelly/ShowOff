
$(document).ready(function(){

	var mockupDir = 'mockups';
	var firstImage = '';
	aa.imageCount = aa.mockups.length;
	aa.currentIndex = 0;

	// Setup initial state
	if( aa.imageCount > 0){
		$('span#imageTotal').text( aa.imageCount );
		$('span#imageNumber').text( aa.currentIndex + 1 );
		$('#holder').html('<img src="' + mockupDir + '/' + aa.mockups[aa.currentIndex] + '" />'); 
		$('#previous').hide();
	}

	// no nav if single image
	if( aa.imageCount <= 1){
		$('nav').hide();
	}

	$('#next').click(function(){

		$('.alert').fadeOut('fast');
		$('#previous').show();
		var maxImgIndex = aa.imageCount - 1;
		
		if( aa.currentIndex < maxImgIndex){			
			aa.currentIndex++;			
			$('#holder').find('img').fadeOut('slow');
			$('#holder').html('<img src="' + mockupDir + '/' + aa.mockups[ aa.currentIndex ] + '" />').css({'display': 'none'}).fadeIn(800); 			
			var imageNumber = aa.currentIndex + 1;
			$('span#imageNumber').text( imageNumber );
		}else{
			$('#holder').before('<div class="alert alert-error">You\'ve reached the end of the mockups</div>').fadeIn();
		}

		if( aa.currentIndex == maxImgIndex ){
			$('#next').hide();
		}
	});

	$('#previous').click(function(){
		$('.alert').fadeOut('fast');
		$('#next').show();
		if( aa.currentIndex > 0 ){			
			aa.currentIndex--;			
			$('#holder').find('img').fadeOut('slow');
			$('#holder').html('<img src="' + mockupDir + '/' + aa.mockups[ aa.currentIndex ] + '" />').css({'display': 'none'}).fadeIn('slow'); 			
			var imageNumber = aa.currentIndex + 1;
			$('span#imageNumber').text( imageNumber );
		}else{
			$('#holder').before('<div class="alert alert-error">No Previous Images to Display</div>').fadeIn();;
		}

		if( aa.currentIndex == 0 ){
			$('#previous').hide();
		}
	})
}); 
