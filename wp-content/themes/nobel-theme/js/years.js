/*
$(function(){
	
	count_3 = 0;
	slidepopup_3 = 0;
	numslide_old_3 = 1;
	
	count_3 = $('#strip-3-slider').attr('data-count');
	slides_num_3 = $('.row-3 .number').length;
	
	if(count_3>0){
		if(count_3<4){
			$('.row-3 .results-from-ajax').addClass('one-row');
		}
		$('#title-results-row-3').show();
	}
	

	//slide popup
	$('.row-3 .single-result-box .img img').click(function(){
		swich_slide_3($(this).closest('.single-result-box'));
	});
	
	//close slide popup
	$('.row-3 .close-popup').click(function(){
		$('#strip-3-slider').hide();
		$(this).closest('.slider-single-inner').find('.video-pessona-wrap').html('');
	});
	
	
	//slide right
	$('.row-3 .slide-next-btn').click(function(){
		
		slidepopup_3 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		
		slidepopup_3++;
		
		data_slidenum_3 = $('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]').closest('.results-slide').attr('data-slidenum');
		display_3 = $('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]').closest('.results-slide').css('display');
		
		if(display_3 == 'none'){
			numslide_3 = data_slidenum_3;
			if(numslide_3 != numslide_old_3){
				$('.row-3 .results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
				$('.row-3 .results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
				numslide_old_3 = numslide_3;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
			}
		}	
		
		swich_slide_3($('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]'));
	});	
	
	//slide left
	$('.row-3 .slide-prev-btn').click(function(){
		
		slidepopup_3 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		slidepopup_3--;
		
		data_slidenum_3 = $('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]').closest('.results-slide').attr('data-slidenum');
		display_3 = $('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]').closest('.results-slide').css('display');
		
		if(display_3 == 'none'){
			numslide_3 = data_slidenum_3;
			if(numslide_3 != numslide_old_3){
				$('.row-3 .results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
				$('.row-3 .results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
				numslide_old_3 = numslide_3;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
			}
		}	
		
		swich_slide_3($('.row-3 .single-result-box[data-slidepopup="'+slidepopup_3+'"]'));
		
	});
	
	
	function swich_slide_3(slideObj){
	
		slidepopup = slideObj.attr('data-slidepopup');
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
		
		$('#strip-3-slider').find('.title-span').html(title);
		$('#strip-3-slider').find('.state-box').html(country_active);
		$('#strip-3-slider').find('.state-box').attr('href',homeurl+'/winning_country/'+country_active);
		$('#strip-3-slider').find('.category-box').html(winning_category_name);
		$('#strip-3-slider').find('.category-box').attr('href',homeurl+'/winning_category/'+winning_category_slug);
		$('#strip-3-slider').find('.year-box').html(wining_year);
		$('#strip-3-slider').find('.year-box').attr('href',homeurl+'/winning_year/'+wining_year);
		$('#strip-3-slider').find('.video-title').html(title+', '+date_live+' - '+pretextwonyear+' '+wining_year+', '+pre_text_title);
		$('#strip-3-slider').find('.content-pessona').html(content);
		$('#strip-3-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup);
		$('#strip-3-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');
		show_hide_btns_3(slidepopup,count_3);
		$('#strip-3-slider').show();
		
	}
	
	function show_hide_btns_3(current,count){
		 
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

	$('.row-3 .number').click(function(){
	
		slidenumObj_3 = $(this);
		numslide_3 = slidenumObj_3.attr('data-slidenum');
		if(numslide_3!=numslide_old_3){
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
			numslide_old_3 = numslide_3;
			slidenumObj_3.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_3.addClass('active');
		}
		
	});
	
	$('.row-3 .number-right').click(function(){
	
		if(slides_num_3 > numslide_old_3){
			numslide_3 = numslide_old_3;
			slidenumObj_3 = $(this);
			numslide_3++;
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
			numslide_old_3 = numslide_3;
			slidenumObj_3.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_3.closest('.numbers').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
		}
		
	});	
	
	$('.row-3 .number-left').click(function(){
	
		if(numslide_old_3 > 1 ){
			numslide_3 = numslide_old_3;
			slidenumObj_3 = $(this);
			numslide_3--;
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
			numslide_old_3 = numslide_3;
			slidenumObj_3.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_3.closest('.numbers').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
		}
		
	});
	
	$('.row-3 .number-first').click(function(){
	
		if(numslide_old_3 != 1 ){
			numslide_3 = 1;
			slidenumObj_3 = $(this);
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
			numslide_old_3 = numslide_3;
			slidenumObj_3.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_3.closest('.numbers').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
		}
		
	});
	
	$('.row-3 .number-last').click(function(){
	
		if(numslide_old_3 != slides_num_3 ){
			numslide_3 = slides_num_3;
			slidenumObj_3 = $(this);
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_3+'"]').fadeOut();
			slidenumObj_3.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_3+'"]').fadeIn();
			numslide_old_3 = numslide_3;
			slidenumObj_3.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_3.closest('.numbers').find('.number[data-slidenum="'+numslide_old_3+'"]').addClass('active');
		}
		
	});
	
});
*/