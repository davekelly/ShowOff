
$(document).ready(function(){

	var mockupDir 	= 'mockups';
	var firstImage 	= '';
	aa.imageCount 	= aa.mockups.length;
	aa.currentIndex = 0;

	// Setup initial state
	if( aa.imageCount > 0)
	{
		$('span#imageTotal').text( aa.imageCount );
		$('span#imageNumber').text( aa.currentIndex + 1 );
		$('#holder').html('<img src="' + mockupDir + '/' + aa.mockups[aa.currentIndex] + '" />'); 
		$('.previous').hide();
	}

	// no nav if single image
	if( aa.imageCount <= 1)
	{
		$('nav').hide();
	}

	// Prev & Next buttons
	$('a').click(function()
	{

		$('.alert').fadeOut('fast');
		
		var $this = $(this);

		if( $this.hasClass('next')){
			$('.previous').show();
			var maxImgIndex = aa.imageCount - 1;
			if( aa.currentIndex < maxImgIndex){			
				aa.currentIndex++;			
			}
			// lose next button if @ end of 
			if( aa.currentIndex == maxImgIndex ){
				$('.next').hide();
			}
		}else if( $this.hasClass('previous')){
			$('.next').show();
			if( aa.currentIndex > 0 ){			
				aa.currentIndex--;			
			}
			// lose prev button if on first
			if( aa.currentIndex == 0 ){
				$('.previous').hide();
			}
		}	

		// do image transitions
		$('#holder').find('img').fadeOut('slow');
		$('#holder').html('<img src="' + mockupDir + '/' + aa.mockups[ aa.currentIndex ] + '" />').css({'display': 'none'}).fadeIn('slow'); 			
		
		var imageNumber = aa.currentIndex + 1;
		$('span#imageNumber').text( imageNumber );
		$('html, body').animate({scrollTop: $("#wrapper").offset().top}, 800);

		return false;
	});

}); 