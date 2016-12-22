$(function(){
	//console.log('load row2.js');
	
	//slide number
	count_2 = 0;
	slidepopup_2 = 0;
	numslide_old_2 = 1;
	pretextwonyear =  $('.row-2 .video-title').attr('data-pretextwonyear');
	pretextwonyearwoman =  $('.row-2 .video-title').attr('data-pretextwonyearwoman');
	pretextwonyear_text = '';	
	count_2 = $('#strip-2-slider').attr('data-count');
	slides_num_2 = $('.row-2 .number').length;
	
	if(count_2>0){
		if(count_2<4){
			$('.row-2 .results-from-ajax').addClass('one-row');
		}
		$('#title-results-row-2').show();
	}
	
	//slide right
	$('.row-2 .slide-next-btn').click(function(){
			
		slidepopup_2++;
		
		data_slidenum_2 = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').attr('data-slidenum');
		display_2 = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').css('display');
		/**/
		if(display_2 == 'none'){
			numslide_2 = data_slidenum_2;
			if(numslide_2!=numslide_old_2){
				$('.row-2 .results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
				$('.row-2 .results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
				numslide_old_2 = numslide_2;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
			}
		}	
		
		swich_slide_2($('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]'));
	});

	//slide left
	$('.row-2 .slide-prev-btn').click(function(){
		
		slidepopup_2--;
		
		data_slidenum_2 = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').attr('data-slidenum');
		display_2 = $('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]').closest('.results-slide').css('display');
		if(display_2 == 'none'){
			numslide_2 = data_slidenum_2;
			if(numslide_2 != numslide_old_2){
				$('.row-2 .results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
				$('.row-2 .results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
				numslide_old_2 = numslide_2;
				$(this).closest('.strip-search-row').find('.number').removeClass('active');
				$(this).closest('.strip-search-row').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
			}
		}	
		
		swich_slide_2($('.row-2 .single-result-box[data-slidepopup="'+slidepopup_2+'"]'));
	});

	//pagination - numbers
	$('.row-2 .number').click(function(){
	
		slidenumObj_2 = $(this);
		numslide_2 = slidenumObj_2.attr('data-slidenum');
		if(numslide_2 != numslide_old_2){
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj_2.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_2.addClass('active');
		}
		
	});	
	//pagination - arrow right
	$('.row-2 .number-right').click(function(){
	
		if(slides_num_2 > numslide_old_2){
			numslide_2 = numslide_old_2;
			slidenumObj_2 = $(this);
			numslide_2++;
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj_2.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_2.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});	
	//pagination - arrow left
	$('.row-2 .number-left').click(function(){
	
		if(numslide_old_2 > 1 ){
			numslide_2 = numslide_old_2;
			slidenumObj_2 = $(this);
			numslide_2--;
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj_2.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_2.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow left
	$('.row-2 .number-first').click(function(){
	
		if(numslide_old_2 != 1 ){
			numslide_2 = 1;
			slidenumObj_2 = $(this);
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj_2.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_2.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	//pagination - two arrow right
	$('.row-2 .number-last').click(function(){
	
		if(numslide_old_2 != slides_num_2 ){
			numslide_2 = slides_num_2;
			slidenumObj_2 = $(this);
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_old_2+'"]').fadeOut();
			slidenumObj_2.closest('.results-from-ajax').find('.results-slide[data-slidenum="'+numslide_2+'"]').fadeIn();
			numslide_old_2 = numslide_2;
			slidenumObj_2.closest('.numbers').find('.number').removeClass('active');
			slidenumObj_2.closest('.numbers').find('.number[data-slidenum="'+numslide_old_2+'"]').addClass('active');
		}
		
	});
	
	//slide popup
	$('.row-2 .single-result-box .img img').click(function(){
		swich_slide_2( $(this).closest('.single-result-box'));
	});
	//close slide popup
	$('.row-2 .close-popup').click(function(){
		$('#strip-2-slider').hide();
		$(this).closest('.slider-single-inner').find('.video-pessona-wrap').html('');
	});
	function swich_slide_2(slideObj){
	
		slidepopup_2 = slideObj.attr('data-slidepopup');
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
		$('#strip-2-slider').find('.single-person-box').hide();
		$('#strip-2-slider').find('.title-span').html(title);
		
		if(winning_country_slug != ''){
			$('#strip-2-slider').find('.state-box').html(winning_country_name);
			$('#strip-2-slider').find('.state-box').attr('href',homeurl+'/winning_country/'+winning_country_slug);
			$('#strip-2-slider').find('.persona-category:nth-child(1)').show();
		}else{
			$('#strip-2-slider').find('.persona-category:nth-child(1)').hide();
		}
		if(winning_category_slug != ''){
			$('#strip-2-slider').find('.category-box').html(winning_category_name);
			$('#strip-2-slider').find('.category-box').attr('href',homeurl+'/winning_category/'+winning_category_slug);
			$('#strip-2-slider').find('.persona-category:nth-child(2)').show();
		}else{
			$('#strip-2-slider').find('.persona-category:nth-child(2)').hide();
		}
		if(winning_year_slug != ''){
			$('#strip-2-slider').find('.year-box').html(winning_year_name);
			$('#strip-2-slider').find('.year-box').attr('href',homeurl+'/winning_year/'+winning_year_slug);
			$('#strip-2-slider').find('.persona-category:nth-child(3)').show();
		}else{
			$('#strip-2-slider').find('.persona-category:nth-child(3)').hide();
		}		
		
		$('#strip-2-slider').find('.video-title').html(title+', '+date_live+pretextwonyear_text+' '+winning_year_name+pre_text_title_text);
	
		if((short_movie_mp4 != 'false')){
			if(short_movie_mp4 == ''){
				$('#strip-2-slider').find('.video-pessona-wrap').hide();
				$('#strip-2-slider').find('.content-pessona').css('height','auto');
				$('#strip-2-slider').find('.single-person-box').show();
				$('#strip-2-slider').find('.single-person-box').html('<img src="'+persona_img+'">');
			}else{
				$('#strip-2-slider').find('.video-pessona-wrap').show();
				$('#strip-2-slider').find('.content-pessona').css('height','200px');
				$('#strip-2-slider').find('.video-pessona-wrap').html('<video class="video-pessona" controls><source  src="'+short_movie_mp4+'" type="video/mp4"></video>');							
			}
		}else{
			$('#strip-2-slider').find('.video-pessona-wrap').hide();
			$('#strip-2-slider').find('.content-pessona').css('height','auto');
			$('#strip-2-slider').find('.single-person-box').show();
			$('#strip-2-slider').find('.single-person-box').html('<img src="'+persona_img+'">');
		}
	
		$('#strip-2-slider').find('.content-pessona').html(content);
		$('#strip-2-slider').find('.strip-resualt').attr('data-slidepopup',slidepopup_2);
		

		show_hide_btns_2(slidepopup_2,count_2);
		$('#strip-2-slider').show();
	}
	
	function show_hide_btns_2(current,count){
	 
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