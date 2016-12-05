/*
$(function(){
	console.log('load');
	
	//slide number
	count_1 = 0;
	slidepopup_1 = 0;
	numslide_old_1 = 1;
	
	count_1 = $('#strip-1-slider').attr('data-count');
	slides_num_1 = $('.row-1 .number').length;
	
	if(count_1>0){
		if(count_1<4){
			$('.row-1 .results-from-ajax').addClass('one-row');
		}
		$('#title-results-row-1').show();
	}
	

	


	
	//slide right
	$('.row-1 .slide-next-btn').click(function(){
			
		//slidepopup_1 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		
		slidepopup_1++;
		
		data_slidenum_1 = $('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]').closest('.results-slide').attr('data-slidenum');
		display_1 = $('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]').closest('.results-slide').css('display');
	
		if(display_1 == 'none'){
			numslide_1 = data_slidenum_1;
			if(numslide_1!=numslide_old_1){
				$('.row-1 .results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
				$('.row-1 .results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
				numslide_old_1 = numslide_1;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
			}
		}	
		
		swich_slide_1($('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]'));
	});

	//slide left
	$('.row-1 .slide-prev-btn').click(function(){
		
		//slidepopup_1 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		slidepopup_1--;
		
		data_slidenum_1 = $('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]').closest('.results-slide').attr('data-slidenum');
		display_1 = $('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]').closest('.results-slide').css('display');
	
		if(display_1 == 'none'){
			numslide_1 = data_slidenum_1;
			if(numslide_1 != numslide_old_1){
				$('.row-1 .results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
				$('.row-1 .results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
				numslide_old_1 = numslide_1;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
			}
		}	
		
		swich_slide_1($('.row-1 .single-result-box[data-slidepopup="'+slidepopup_1+'"]'));
	});

	//pagination - numbers
	$('.row-1 .number').click(function(){
	
		slidenumObj_1 = $(this);
		numslide_1 = slidenumObj_1.attr('data-slidenum');
		if(numslide_1 != numslide_old_1){
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
			numslide_old_1 = numslide_1;
			slidenumObj_1.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_1.addClass('active');
		}
		
	});	
	//pagination - arrow right
	$('.row-1 .number-right').click(function(){
	
		if(slides_num_1 > numslide_old_1){
			numslide_1 = numslide_old_1;
			slidenumObj_1 = $(this);
			numslide_1++;
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
			numslide_old_1 = numslide_1;
			slidenumObj_1.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_1.closest('.numbers').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
		}
		
	});	
	//pagination - arrow left
	$('.row-1 .number-left').click(function(){
	
		if(numslide_old_1 > 1 ){
			numslide_1 = numslide_old_1;
			slidenumObj_1 = $(this);
			numslide_1--;
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
			numslide_old_1 = numslide_1;
			slidenumObj_1.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_1.closest('.numbers').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow left
	$('.row-1 .number-first').click(function(){
	
		if(numslide_old_1 != 1 ){
			numslide_1 = 1;
			slidenumObj_1 = $(this);
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
			numslide_old_1 = numslide_1;
			slidenumObj_1.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_1.closest('.numbers').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow right
	$('.row-1 .number-last').click(function(){
	
		if(numslide_old_1 != slides_num_1 ){
			numslide_1 = slides_num_1;
			slidenumObj_1 = $(this);
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_1+'"]').fadeOut();
			slidenumObj_1.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_1+'"]').fadeIn();
			numslide_old_1 = numslide_1;
			slidenumObj_1.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_1.closest('.numbers').find('.number[data-slidenum="'+numslide_old_1+'"]').addClass('active');
		}
		
	});
	
	//slide popup
	$('.row-1 .single-result-box .img img').click(function(){
		swich_slide_1( $(this).closest('.single-result-box'));
	});
	//close slide popup
	$('.row-1 .close-popup').click(function(){
		$('#strip-1-slider').hide();
		$(this).closest('.slider-single-inner').find('.video-pessona-wrap').html('');
	});
	function swich_slide_1(slideObj){
	
		slidepopup_1 = slideObj.attr('data-slidepopup');
		title = slideObj.find('.data-title').html();
		content = slideObj.find('.data-content').html();
		persona_img = slideObj.attr('data-persona_img');
		short_movie_mp4 = slideObj.attr('data-short_movie_mp4');
		born_date = slideObj.attr('data-born_date');
		deceased = slideObj.attr('data-deceased');
		wining_year = slideObj.attr('data-wining_year');
		pre_text_title = slideObj.find('.data-pre_text_title').html();
		winning_category_name = slideObj.attr('data-winning_category_name');
		winning_category_slug = slideObj.attr('data-winning_category_slug');
		country_active = slideObj.attr('data-country_active');
		 
		if(deceased !=  ''){
			date_live = born_date+' - '+deceased;
		}else{
			date_live = born_date;
		}
	    	
		$('#strip-1-slider').find('.title-span').html(title);
		$('#strip-1-slider').find('.state-box').html(country_active);
		$('#strip-1-slider').find('.state-box').attr('href',homeurl+'/winning_country/'+country_active);
		$('#strip-1-slider').find('.category-box').html(winning_category_name);
		$('#strip-1-slider').find('.category-box').attr('href',homeurl+'/winning_category/'+winning_category_slug);
		$('#strip-1-slider').find('.year-box').html(wining_year);
		$('#strip-1-slider').find('.year-box').attr('href',homeurl+'/winning_year/'+wining_year);
		$('#strip-1-slider').find('.video-title').html(title+', '+date_live+' - '+pretextwonyear+' '+wining_year+', '+pre_text_title);
		$('#strip-1-slider').find('.content-pessona').html(content);
		$('#strip-1-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup_1);
		$('#strip-1-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');
		show_hide_btns_1(slidepopup_1,count_1);
		$('#strip-1-slider').show();
		
	}
	
	function show_hide_btns_1(current,count){
	 
		if((current == count)&&(current == 1)){
			$('.slide-next-btn').hide();
			$('.slide-prev-btn').hide();
		}else{
			if(current == 1){
				$('.slide-prev-btn').hide();
			}else{
				$('.slide-prev-btn').show();
			}
			if(current == count){
				$('.slide-next-btn').hide();
			}else{
				$('.slide-next-btn').show();
			}			
		}
		
	}

	
});
*/