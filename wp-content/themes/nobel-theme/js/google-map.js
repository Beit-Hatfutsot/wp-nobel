/*
$(function(){
	

	
	count_2 = 0;
	slidepopup_2 = 0;
	numslide_old_2 = 1;
	
	count_2 = $('#strip-2-slider').attr('data-count');
	slides_num_2 = $('.row-2 .number').length;
	pretextwonyear = $('#strip-1-slider').find('.video-title').attr('data-pretextwonyear');	
	
	if(count_2>0){
		if(count_2<4){
			$('.row-2 .results-from-ajax').addClass('one-row');
		}
		$('#title-results-row-2').show();
	} 
	
	$('.row-2 .number').click(function(){
		slidenumObj = $(this);
		numslide_2 = slidenumObj.attr('data-slidenum');
		if(numslide_2!=numslide_old_2){
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj.closest('.numbers').find('.number').removeClass('active');
			slidenumObj.addClass('active');
		}
	});
	
	$('.row-2 .number-right').click(function(){
		
		if(slides_num_2 > numslide_old_2){
			numslide_2 = numslide_old_2;
			slidenumObj = $(this);
			numslide_2++;
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj.closest('.numbers').find('.number').removeClass('active');
			slidenumObj.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});	
	
	$('.row-2 .number-left').click(function(){
	
		if(numslide_old_2 > 1 ){
			numslide_2 = numslide_old_2;
			slidenumObj = $(this);
			numslide_2--;
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj.closest('.numbers').find('.number').removeClass('active');
			slidenumObj.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	
	$('.row-2 .number-first').click(function(){
	
		if(numslide_old_2 != 1 ){
			numslide_2 = 1;
			slidenumObj = $(this);
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj.closest('.numbers').find('.number').removeClass('active');
			slidenumObj.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	
	$('.row-2 .number-last').click(function(){
	
		if(numslide_old_2 != slides_num_2 ){
			numslide_2 = slides_num_2;
			slidenumObj = $(this);
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj.closest('.numbers').find('.number').removeClass('active');
			slidenumObj.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	
	//slide popup
	$('.row-2 .single-result-box .img img').click(function(){
		swich_slide_2($(this).closest('.single-result-box'));
	});
	
	//close slide popup
	$('.row-2 .close-popup').click(function(){
		$('#strip-2-slider').hide();
		$(this).closest('.slider-single-inner').find('.video-pessona-wrap').html('');
	});
	
	function swich_slide_2(slideObj){
	
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
		
		$('#strip-2-slider').find('.title-span').html(title);
		$('#strip-2-slider').find('.state-box').html(country_active);
		$('#strip-2-slider').find('.state-box').attr('href',homeurl+'/winning_country/'+country_active);
		$('#strip-2-slider').find('.category-box').html(winning_category_name);
		$('#strip-2-slider').find('.category-box').attr('href',homeurl+'/winning_category/'+winning_category_slug);
		$('#strip-2-slider').find('.year-box').html(wining_year);
		$('#strip-2-slider').find('.year-box').attr('href',homeurl+'/winning_year/'+wining_year);
		$('#strip-2-slider').find('.video-title').html(title+', '+date_live+' - '+pretextwonyear+' '+wining_year+', '+pre_text_title);
		$('#strip-2-slider').find('.content-pessona').html(content);
		$('#strip-2-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup);
		$('#strip-2-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');
		show_hide_btns(slidepopup,count_2);
		$('#strip-2-slider').show();
		
	}
	
	function show_hide_btns(current,count){
	
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
	

	//slide right
	$('.row-2 .slide-next-btn').click(function(){
		
		count_2 = $('#strip-2-slider').attr('data-count');
		slidepopup_2 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		
		slidepopup_2++;
		
		data_slidenum = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').attr('data-slidenum');
		display = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').css('display');
		
		if(display == 'none'){
			numslide = data_slidenum;
			if(numslide!=numslide_old_2){
				$('.row-2 .results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
				$('.row-2 .results-slide[data-slidenum="'+numslide+'"]').fadeIn();
				numslide_old_2 = numslide;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
			}
		}	
		
		swich_slide_2($('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]'));
	});	
	
	//slide left
	$('.row-2 .slide-prev-btn').click(function(){
		count_2 = $('#strip-2-slider').attr('data-count');
		slidepopup_2 = $(this).closest('.slider-single-inner').find('.strip-resualt').attr('data-slidepopup');
		slidepopup_2--;
		
		data_slidenum = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').attr('data-slidenum');
		display = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').css('display');
		
		if(display == 'none'){
			numslide = data_slidenum;
			if(numslide!=numslide_old_2){
				$('.row-2 .results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
				$('.row-2 .results-slide[data-slidenum="'+numslide+'"]').fadeIn();
				numslide_old_2 = numslide;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
			}
		}	
		
		swich_slide_2($('.row-2 .single-result-box[data-slidepopup="'+slidepopup_3+'"]'));
	});
	
	function swich_slide_2(slideObj){
	
		slidepopup = slideObj.attr('data-slidepopup');
		title = slideObj.attr('data-title');
		content = slideObj.attr('data-content');
		persona_img = slideObj.attr('data-persona_img');
		short_movie_mp4 = slideObj.attr('data-short_movie_mp4');
		born_date = slideObj.attr('data-born_date');
		deceased = slideObj.attr('data-deceased');
		wining_year = slideObj.attr('data-wining_year');
		pre_text_title = slideObj.attr('data-pre_text_title');
		winning_category_name = slideObj.attr('data-winning_category_name');
		winning_category_slug = slideObj.attr('data-winning_category_slug');
		country_active = slideObj.attr('data-country_active');
		 
		if(deceased !=  ''){
			date_live = born_date+' - '+deceased;
		}else{
			date_live = born_date;
		}
		
		$('#strip-2-slider').find('.title-span').html(title);
		$('#strip-2-slider').find('.state-box').html(country_active);
		$('#strip-2-slider').find('.category-box').html(winning_category_name);
		$('#strip-2-slider').find('.category-box').attr('href',home+'/winning_category/'+winning_category_slug);
		$('#strip-2-slider').find('.video-title').html(title+', '+date_live+' - '+pretextwonyear+' '+wining_year+', '+pre_text_title);
		$('#strip-2-slider').find('.content-pessona').html(content);
		$('#strip-2-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup);
		$('#strip-2-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');
		show_hide_btns(slidepopup_2,count_2);
		$('#strip-2-slider').show();
		
	}
	
});
*/