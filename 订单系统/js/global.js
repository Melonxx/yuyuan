$(function(){
			$('.down-list input').on('click',function(event){
				if($('.platform-list ul').css('display') == 'block'){
                    $('.platform-list ul').css('display','none');
				}
				$('.down-list ul').toggle();
				if($('#a123').hasClass('rotate')){
					$('#a123').removeClass('rotate');
				}else{
					$('#a123').addClass('rotate');
				}
				event.stopPropagation();
			}).parents().on('click',function(){
				$('.down-list ul').hide();
			})
			$('.down-list ul li').on('click',function(){
				$('.down-list input').val($(this).html());
				$('.down-list ul').hide();
                $('#a123').removeClass('rotate');
			})
			/*
			$('.down-list input').on('click',function(event){
				 event.stopPropagation();
			}).parents().on('click',function(){
				$('.down-list ul').hide();
			})
			*/

		})
$(function(){
			$('.platform-list input').on('click',function(event){
				if($('.down-list ul').css('display') == 'block'){
                    $('.down-list ul').css('display','none');
				}
				$('.platform-list ul').toggle();
				if($('.platform-list svg').hasClass('rotate')){
					$('.platform-list svg').removeClass('rotate');
				}else{
					$('.platform-list svg').addClass('rotate');
				}
				event.stopPropagation();
			}).parents().on('click',function(){
				$('.platform-list ul').hide();
			})
			$('.platform-list ul li').on('click',function(){
				$('.platform-list input').val($(this).html());
				$('.platform-list ul').hide();
				$('.platform-list svg').removeClass('rotate');

			})
		})
$(function(){
	$('input:radio').css('vertical-align','-0.1em');
	$('input:checkbox').css('vertical-align','-0.1em');
        })