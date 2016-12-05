$(function(){
	//console.log('load row0.js');
	
	//slide number
	count_0 = 0;
	slidepopup_0 = 0;
	numslide_old_0 = 1;
	pretextwonyear =  $('.row-0 .video-title').attr('data-pretextwonyear');
	pretextwonyearwoman =  $('.row-0 .video-title').attr('data-pretextwonyearwoman');
	pretextwonyear_text = '';
	count_0 = $('#strip-0-slider').attr('data-count');
	slides_num_0 = $('.row-0 .number').length;
	
	
	if(count_0>0){
		if(count_0<4){
			$('.row-0 .results-from-ajax').addClass('one-row');
		}
		$('#title-results-row-0').show();
	}
	//slide right
	$('.row-0 .slide-next-btn').click(function(){
		
		slidepopup_0++;
		
		data_slidenum_0 = $('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]').closest('.results-slide').attr('data-slidenum');
		display_0 = $('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]').closest('.results-slide').css('display');
		
		if(display_0 == 'none'){
			numslide_0 = data_slidenum_0;
			if(numslide_0!=numslide_old_0){
				$('.row-0 .results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
				$('.row-0 .results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
				numslide_old_0 = numslide_0;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
			}
		}	
		
		swich_slide_0($('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]'));
	});
	//slide left
	$('.row-0 .slide-prev-btn').click(function(){
		
		slidepopup_0--;
		
		data_slidenum_0 = $('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]').closest('.results-slide').attr('data-slidenum');
		display_0 = $('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]').closest('.results-slide').css('display');
		
		if(display_0 == 'none'){
			numslide_0 = data_slidenum_0;
			if(numslide_0 != numslide_old_0){
				$('.row-0 .results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
				$('.row-0 .results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
				numslide_old_0 = numslide_0;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
			}
		}	
		
		swich_slide_0($('.row-0 .single-result-box[data-slidepopup="'+slidepopup_0+'"]'));
	});
	//pagination - numbers
	$('.row-0 .number').click(function(){
		slidenumObj_0 = $(this);
		numslide_0 = slidenumObj_0.attr('data-slidenum');
		if(numslide_0 != numslide_old_0){
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
			numslide_old_0 = numslide_0;
			slidenumObj_0.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_0.addClass('active');
		}
		
	});	
	//pagination - arrow right
	$('.row-0 .number-right').click(function(){
	
		if(slides_num_0 > numslide_old_0){
			numslide_0 = numslide_old_0;
			slidenumObj_0 = $(this);
			numslide_0++;
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
			numslide_old_0 = numslide_0;
			slidenumObj_0.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_0.closest('.numbers').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
		}
		
	});	
	//pagination - arrow left
	$('.row-0 .number-left').click(function(){
	
		if(numslide_old_0 > 1 ){
			numslide_0 = numslide_old_0;
			slidenumObj_0 = $(this);
			numslide_0--;
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
			numslide_old_0 = numslide_0;
			slidenumObj_0.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_0.closest('.numbers').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow left
	$('.row-0 .number-first').click(function(){
	
		if(numslide_old_0 != 1 ){
			numslide_0 = 1;
			slidenumObj_0 = $(this);
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
			numslide_old_0 = numslide_0;
			slidenumObj_0.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_0.closest('.numbers').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow right
	$('.row-0 .number-last').click(function(){
	
		if(numslide_old_0 != slides_num_0 ){
			numslide_0 = slides_num_0;
			slidenumObj_0 = $(this);
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_0+'"]').fadeOut();
			slidenumObj_0.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_0+'"]').fadeIn();
			numslide_old_0 = numslide_0;
			slidenumObj_0.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_0.closest('.numbers').find('.number[data-slidenum="'+numslide_old_0+'"]').addClass('active');
		}
		
	});
	
	//slide popup
		$('.row-0 .single-result-box .img img').click(function(){
		swich_slide_0( $(this).closest('.single-result-box'));
	});
	
	//close slide popup
	$('.row-0 .close-popup').click(function(){
		$('#strip-0-slider').hide();
		$(this).closest('.slider-single-inner').find('.video-pessona-wrap').html('');
	});
	
	function swich_slide_0(slideObj){
		
		slidepopup_0 = slideObj.attr('data-slidepopup');
		title = slideObj.find('.data-title').html();
		content = slideObj.find('.data-content').html();
		persona_img = slideObj.attr('data-persona_img');
		short_movie_mp4 = slideObj.attr('data-short_movie_mp4');
		born_date = slideObj.attr('data-born_date');
		deceased = slideObj.attr('data-deceased');
		wining_year = slideObj.attr('data-wining_year');
		pre_text_title = slideObj.find('.data-pre_text_title').html();
		gender = slideObj.attr('data-gender');
		winning_category_name = slideObj.attr('data-winning_category_name');
		winning_category_slug = slideObj.attr('data-winning_category_slug');
		winning_country_name = slideObj.attr('data-winning_country_name');
		winning_country_slug = slideObj.attr('data-winning_country_slug');
		winning_year_name = slideObj.attr('data-winning_year_name');
		winning_year_slug = slideObj.attr('data-winning_year_slug');
		 
		if(deceased !=  ''){
			date_live = born_date+' - '+deceased+', ';
		}else{
			date_live = born_date+', ';
		}
		if(pre_text_title != ''){
			pre_text_title_text = ', '+pre_text_title+'.';
		}else{
			pre_text_title_text = '.';
		}
		if(gender == 'זכר'){
			pretextwonyear_text = pretextwonyear;
		}
		if(gender == 'נקבה'){
			pretextwonyear_text = pretextwonyearwoman;
		}
	    
		
		$('#strip-0-slider').find('.title-span').html(title);
		
		if(winning_country_slug != ''){
			$('#strip-0-slider').find('.state-box').html(winning_country_name);
			$('#strip-0-slider').find('.state-box').attr('href',homeurl+'/winning_country/'+winning_country_slug);
			$('#strip-0-slider').find('.persona-category:nth-child(1)').show();
		}else{
			$('#strip-0-slider').find('.persona-category:nth-child(1)').hide();
		}
		if(winning_category_slug != ''){
			$('#strip-0-slider').find('.category-box').html(winning_category_name);
			$('#strip-0-slider').find('.category-box').attr('href',homeurl+'/winning_category/'+winning_category_slug);
			$('#strip-0-slider').find('.persona-category:nth-child(2)').show();
		}else{
			$('#strip-0-slider').find('.persona-category:nth-child(2)').hide();
		}
		if(winning_year_slug != ''){
			$('#strip-0-slider').find('.year-box').html(winning_year_name);
			$('#strip-0-slider').find('.year-box').attr('href',homeurl+'/winning_year/'+winning_year_slug);
			$('#strip-0-slider').find('.persona-category:nth-child(3)').show();
		}else{
			$('#strip-0-slider').find('.persona-category:nth-child(3)').hide();
		}		
		
		$('#strip-0-slider').find('.video-title').html(title+', '+date_live+pretextwonyear_text+' '+winning_year_name+pre_text_title_text);
		
		if((short_movie_mp4 != 'false')){
			if(short_movie_mp4 == ''){
				$('#strip-0-slider').find('.video-pessona-wrap').hide();
				$('#strip-0-slider').find('.content-pessona').css('height','auto');
			}else{
				$('#strip-0-slider').find('.video-pessona-wrap').show();
				$('#strip-0-slider').find('.content-pessona').css('height','200px');
				$('#strip-0-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');							
			}
		}else{
			$('#strip-0-slider').find('.video-pessona-wrap').hide();
			$('#strip-0-slider').find('.content-pessona').css('height','auto');
		}
	
		$('#strip-0-slider').find('.content-pessona').html(content);
		$('#strip-0-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup_0);

		show_hide_btns_0(slidepopup_0,count_0);
		$('#strip-0-slider').show(); 
	
	}
	
	function show_hide_btns_0(current,count){
	 
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