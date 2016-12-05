
$(function(){

	//alert msg
	btn_continate_error = $('.btn_continate_error').html();
	btn_search_error = $('.btn_search_error').html();
	
	//strip open close on mobile
	$('.strip-search-right').click(function(){
		strip_open_or_close_mobile($(this));
	});
	
	$('.open-btn').click(function(){
		strip_open_or_close_mobile($(this));
	});
	
	//strip open close on mobile
	function strip_open_or_close_mobile(Obj){
	
		if($(window).width() < 767){
		
			strip_search_control_Obj = Obj.closest('.strip-search-control');
			strip_search_right_Obj = strip_search_control_Obj.find('.strip-search-right');
			open_btn_Obj = strip_search_control_Obj.find('.open-btn');
			
			if(strip_search_right_Obj.hasClass('active')){
				strip_search_right_Obj.closest('.strip-search-control').css('height','70px');
				strip_search_right_Obj.removeClass('active');
				open_btn_Obj.removeClass('rotate');
			}else{
				strip_search_right_Obj.closest('.strip-search-control').css('height','auto');
				strip_search_right_Obj.addClass('active');
				open_btn_Obj.addClass('rotate');
			}
			
		}
		
	}
	
	//menu newsletter toggole
	$('.dropdown-toggle').click(function(){
		if($(window).width() < 767){
			$('.navbar-collapse.navbar-top').animate({
				scrollTop:  300
			});
		}
	});

	homeurl = $('#header-logo').attr('data-href');
		
	function get_hostname(url) {
		var m = url.match(/^http:\/\/[^/]+/);
		return m ? m[0] : null;
	}
	
	lang = homeurl;
	lang1 = '';
	rooturl = get_hostname(homeurl);
	
	if(homeurl != rooturl ){
		
		lang = lang.replace(rooturl, "");
		lang = lang.replace("/", "");
		lang1 = '?lang='+lang.replace("/", "");
		
	}else{
		
		lang = '';
		lang1 = '?lang=he';
		
	}
	
	//console.log('lang = '+lang);
	//console.log('lang1 = '+lang1);
	
	//newsletter
	newsletterObj = $('.newsletter-wrap').html();
	
	$('.newsletter-wrap').html('');
	$('.newsletter').html(newsletterObj);
	
	$('.newsletter-groups label').click(function(){
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
		}else{
			$(this).addClass('checked');
		}
	});
	
	$('.newsletter-submit').click(function(){
		
		mm_email = $('.mm_newemail').val();
		mm_he = $('.registrationformhe:checked').length;
		mm_en = $('.registrationformen:checked').length;
		mm_sp = $('.registrationformsp:checked').length;
		
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		validateEmail = re.test(mm_email);
	
		validateCheckbox = false;
		
		if((mm_he > 0) || (mm_en > 0) || (mm_sp > 0)){
			validateCheckbox = true;
		}
		
		if((validateEmail == true)&&(validateCheckbox == true)){
		
			var mm_key = [];
			
			if(mm_he > 0){
				mm_key.push('registration-form-he');
			}
			if(mm_en > 0){
				mm_key.push('registration-form-en');
			}
			if(mm_sp > 0){
				mm_key.push('registration-form-sp');
			}
			
			//console.log('mm_url = '+mm_url);
			mm_userid = 59325;
			mm_newemail = mm_email;
			
			jQuery.post(( rooturl+"/wp-content/themes/nobel-theme/newsletter-api.php" ), { 
				mm_userid:mm_userid,
				mm_newemail:mm_newemail,
				mm_key: mm_key 
			}, function(data) {
			
				//console.log('data = '+data);
				
				if(data == '1'){
					$('.mm_newemail').html('');
				}
				
				validateNewsletterRespons(data);
				
			});
			
			
			validateEmailFun(validateEmail);
			validateCheckboxFun(validateCheckbox);
		}else{
			console.log('not valide');
			validateEmailFun(validateEmail);
			validateCheckboxFun(validateCheckbox);
		}
		
	});
	
	year_first = 0;
	year_last = 0;
	year_from = 1952;
	year_to = 1997;
	var d = new Date();
	var max_y = d.getFullYear();
	
	
	$( "#slider-3" ).slider({
		range:true,
		min: 1905,
		max: max_y,
		values: [ 1924, 1965 ],
		isRTL: true, // RTL 
		slide: function( event, ui ) {
			val1 = max_y - ui.values[ 1 ] + 1905;
			val0 = max_y - ui.values[ 0 ] + 1905;
			year_from = val1;
			year_to = val0;
			
			if( val1 != val0 ){
				$('#years-display').text( val1 + " - " + val0 );
			}else{
				$('#years-display').text( val1 );
			}
			$('.year-bg-move-first').text(val1);
			$('.year-bg-move-last').text(val0 );
			first = $('.ui-slider-handle').first();
			first.attr('title',val0);
			last = $('.ui-slider-handle').last();
			last.attr('title',val1);
		}
	});
	
	year_first = $('.ui-slider-handle').first();
	year_first.attr('title','1997');
	year_last = $('.ui-slider-handle').last();
	year_last.attr('title','1952');
	$( "#years-display" ).text( '1952' + " - " + '1997' );
	
	function validateEmailFun(validateEmail){
		if(validateEmail == false){
			$('.mailErr').removeClass('hide');
		}else{
			if(!($('.mailErr').hasClass('hide'))){
				$('.mailErr').addClass('hide');
			}
		}	
	}
	
	function validateCheckboxFun(validateCheckbox){
		if(validateCheckbox == false){
			$('.newsletterErr').removeClass('hide');
		}else{
			if(!($('.newsletterErr').hasClass('hide'))){
				$('.newsletterErr').addClass('hide');
			}
		}
	}
	
	function validateNewsletterRespons(data){
		if(data == '1'){
			$('.msg-1').removeClass('hide');
			if(!($('.msg-0').hasClass('hide'))){
				$('.msg-0').addClass('hide');
			}
			if(!($('.msg-999').hasClass('hide'))){
				$('.msg-999').addClass('hide');
			}
		}
		if(data == '0'){
			$('.msg-0').removeClass('hide');
			if(!($('.msg-1').hasClass('hide'))){
				$('.msg-1').addClass('hide');
			}
			if(!($('.msg-999').hasClass('hide'))){
				$('.msg-999').addClass('hide');
			}
		}
		if(data == '999'){
			$('.msg-999').removeClass('hide');
			if(!($('.msg-1').hasClass('hide'))){
				$('.msg-1').addClass('hide');
			}
			if(!($('.msg-0').hasClass('hide'))){
				$('.msg-0').addClass('hide');
			}
		}
	}
	
	//Global map variable
	var map;
	var markers = {};

	//Create a single infowindow
	var infoWindow = new google.maps.InfoWindow();

	//Function run on DOM load
	function loadMap() {
		
		//Set the map options
		var mapOptions = {

			//Zoom on load
			zoom: 1,
			//Map center
			center: new google.maps.LatLng(0,0),
			maxZoom: 11
	   
		};

		//Get the id of the map container div
		var mapId = document.getElementById('map');
		//Create the map
		map = new google.maps.Map(mapId,mapOptions);

		mapEventListeners();
		  
	}

	//Add a marker to the map
	function addPersonaMarker(datavar) {
		
		/*
			datavar.title.rendered
			datavar.acf.pre_text_title
			datavar.link
			datavar.id
			datavar.acf.map_lat
			datavar.acf.map_lng
		*/
		
		var id = datavar.id;
		
		//Create the marker (#MarkerOptions)    
		var marker = new google.maps.Marker({
			
			 id: datavar.id,
			
			//Position of marker
			position: new google.maps.LatLng(datavar.acf.map_lat,datavar.acf.map_lng),
			
			//Map
			map: map,                
					
			//Sets the title when mouse hovers
			title: htmlDecode(datavar.title.rendered)
					
		});
		
		markers[id] = marker; // cache created marker to markers object with id as its key
		
		//marker.setIcon('http://maps.google.com/mapfiles/ms/icons/'+'red'+'-dot.png');
		marker.setIcon(rooturl+'/wp-content/themes/nobel-theme/img/medal-map.png');
		
		return marker;
	}

	function htmlDecode(value) {
	  return $("<textarea/>").html(value).text();
	}

	//Associate an infowindow with the marker
	function addPersonaInfoWindow(marker) {
			
		var details = marker.datavar;
		
		//Content string 
		if(details.pure_taxonomies.hasOwnProperty('winning_category')){
			winning_category_name = details.pure_taxonomies.winning_category[0].name;
			winning_category_slug = details.pure_taxonomies.winning_category[0].slug;
		}else{
			winning_category_name = '';
			winning_category_slug = '';
		}
		if(details.pure_taxonomies.hasOwnProperty('winning_country')){
			winning_country_name = details.pure_taxonomies.winning_country[0].name;
			winning_country_slug = details.pure_taxonomies.winning_country[0].slug;
		}else{
			winning_country_name = '';
			winning_country_slug = '';
		}
		if(details.pure_taxonomies.hasOwnProperty('winning_year')){
			winning_year_name = details.pure_taxonomies.winning_year[0].name;
			winning_year_slug = details.pure_taxonomies.winning_year[0].slug;
		}else{
			winning_year_name = '';
			winning_year_slug = '';
		}
		if(details.pure_taxonomies.hasOwnProperty('winning_area')){
			winning_area_name = details.pure_taxonomies.winning_area[0].name;
		}else{
			winning_area_name = '';
		}
		
		link = details.link;
		title = details.title.rendered;
		content = details.content.rendered;
		persona_img = details.acf.persona_img;
		short_movie_mp4 = details.acf.short_movie_mp4;
		born_date = details.acf.born_date;
		deceased = details.acf.deceased;
		pre_text_title = details.acf.pre_text_title;
		map_lat = details.acf.map_lat;
		map_long = details.acf.map_long;
		//winning_category_name;
		//winning_category_slug;
		//winning_country_name;
		//winning_country_slug;
		//winning_year_name;
		//winning_year_slug;
		//winning_area_name;
		
	
		var contentString = '<div class="infowindowcontent">';
			contentString += '<div class="single-result-box single-result-box-map" >';
			contentString += '<div class="text-center">';
			contentString += '<div class="inner">';
			if(persona_img){
				contentString += '<div class="img"><a href="'+link+'"><img src="'+persona_img+'"/></a></div>';
			}
			contentString += '<h5><a href="'+link+'">'+title+'</a></h5>';
			
			if((winning_year_name != '')&&(winning_category_name != '')){
				contentString += '<div>'+winning_category_name+', '+winning_year_name+'</div>';
			}else{
				if(winning_year_name == ''){
					contentString += '<div>'+winning_category_name+'</div>';
				}
				if(winning_category_name == ''){
					contentString += '<div>'+winning_year_name+'</div>';
				}
			}
			
			contentString += '<div>'+winning_country_name+'</div>';
			contentString += '</div>';
			contentString += '</div>';
			contentString += '</div>';
		contentString += '</div>';

		
		//Add click event listener
		google.maps.event.addListener(marker, 'click', function() {
			
			//Close any open infowindows
			infoWindow.close();
			
			//Set the new content
			infoWindow.setContent(contentString);        
			
			//Open the infowindow
			infoWindow.open(map,marker);
			
		});
	}

	//Load the map
	google.maps.event.addDomListener(window, 'load', loadMap());

	//result_js_loaded = false;
	//years_js_loaded = false;
	
	term_id = '';
	letter = '';
	

	//
	// search at home page
	//
	var moreresultstext = $('.section-results').attr('data-moreresultstext');
	
	function showmoreresults(){
		$('#over-six-phrase').css('height','auto');
	}
	
	var count_results = 1;
	var count_slide = 1;
	
	url_onload = rooturl+"/wp-json/wp/v2/persona"+lang1+"&filter[orderby]=title&filter[order]=ASC&filter[posts_per_page]=-1";
	data_onload = '';
	$.ajax({
			url: url_onload,
			context: document.body
		}).done(function(data) {
			data_onload = data;
		});
	
	$('#btn-phrase').bind( "click",btn_phrase);
	
	$('#input-phrase').keypress(function( event ) {
		clear_letters_category();
		if ( event.which == 13 ) {
			event.preventDefault();
			btn_phrase();
		}
	});

	$('#btn-categories').click(function(){
		close_all_search_but_selected($('.row-1'));
		clear_letters_category();
		
		if($(this).hasClass('active')){
			$('.section-results').hide();
			$('.row-1 .results-phrase').html('');
			swich_btn1();
			$(this).removeClass('active');
			$('.section-categories').hide();
			$('.section-letters').hide();
			
		}else{
			$('#results-phrase-not-found').hide();
			
			if($('#btn-letters').hasClass('active')){
				$('#btn-letters').removeClass('active');
				$('.section-letters').hide();
			}
			
			$('#input-phrase').val('');
			$('.section-results').hide();
			$('.row-1 .results-phrase').html('');
			swich_btn1_close_btn();
			$(this).addClass('active');
			$('.section-categories').show();
			$('.section-letters').hide();
		}
		
	});
	
	$('.list-category li').click(function(){
	
		if(!($(this).hasClass('active'))){		
			clear_letters_category();
			
			start_functions_1();
			
			swich_btn1_close_btn();
			
			$(this).addClass('active');
			
			term_id = $(this).attr('data-category_term_id');
			//url = rooturl+"/wp-json/wp/v2/persona"+lang1+"&filter[orderby]=title&filter[order]=ASC&filter[posts_per_page]=-1";
				
					string = '<div class="results-from-ajax clearfix">';
					//data.forEach(function(datavar) {
					data_onload.forEach(function(datavar) {
						var machcategory = false;
						var winningcategory = datavar.winning_category;
						
						winningcategory.forEach(function(entry) {
							if(term_id == entry){
								machcategory = true;
							}
						});
						
						if(machcategory){
							string += data_for_each_inner(datavar);
						}
						
					});
					
					if (count_results%6 != 1){
						string += '</div>';
					}
					
					string +=  persona_numbers();

					string += '</div>';
					
					last_functions_1();
					
		}
		
	});
		
	$('#btn-letters').click(function(){
		close_all_search_but_selected($('.row-1'));
		clear_letters_category();
		if($(this).hasClass('active')){
			$('.section-results').hide();
			$('.row-1 .results-phrase').html('');
			swich_btn1();
			$(this).removeClass('active');
			$('.row-1 .section-letters').hide();
			$('.row-1 .section-categories').hide();
		}else{
			$('#results-phrase-not-found').hide();
			if($('#btn-categories').hasClass('active')){
				$('#btn-categories').removeClass('active');
				$('.row-1 .section-categories').hide();
			}
			$('#input-phrase').val('');
			$('.row-1 .section-results').hide();
			$('.row-1 .results-phrase').html('');
			swich_btn1_close_btn();
			$(this).addClass('active');
			$('.row-1 .section-letters').show();
			$('.row-1 .section-categories').hide();
		}
	});
	
	$('.list-letters li.full').click(function(){
		
		if(!($(this).hasClass('active'))){
		
			start_functions_1();
			
			swich_btn1_close_btn();
			
			clear_letters_category();
			
			$(this).addClass('active');
			
			letter = $(this).attr('data-letter');
			
			//url = rooturl+"/wp-json/wp/v2/persona"+lang1+"&filter[orderby]=title&filter[order]=ASC&&filter[posts_per_page]=-1";
				
					string = '<div class="results-from-ajax clearfix">';
					//data.forEach(function(datavar) {
					data_onload.forEach(function(datavar) {
						
						var firstname = datavar.acf.first_name;
						var lastname = datavar.acf.last_name;
						
						if ((firstname.substr(0, 1) == letter)||(lastname.substr(0, 1) == letter)){
							string += data_for_each_inner(datavar);
						}
						/*
						var firstname = datavar.acf.first_name;
						
						if (firstname.substr(0, 1) == letter){
							string += data_for_each_inner(datavar);
						}*/
					});
					
					if (count_results%6 != 1){
						string += '</div>';
					}
			
					string +=  persona_numbers();
					
					string += '</div>';

					last_functions_1();
					
			
		}
	});
	
	url_onload_year = rooturl+"/wp-json/wp/v2/persona"+lang1+"&filter[order]=DESC&filter[posts_per_page]=-1";
	data_onload_year = '';
	
	$.ajax({
			url: url_onload_year,
			context: document.body
		}).done(function(data) {
			data_onload_year = data;
		});
	
	$('#btn-year').click(function(){
		
		close_all_search_but_selected($('.row-3'));
		start_functions_3();
		swich_btn3_close_btn();
		
		if(year_from!=''){
			
				string = '<div class="results-from-ajax">';
				data_onload_year.forEach(function(datavar) {
					windate = datavar.acf.wining_year;
					windate = parseInt(windate);
					if((year_from<=windate)&&(windate<=year_to)){	
						string += data_for_each_inner(datavar);
					}
				});
				if (count_results%6 != 1){
					string += '</div>';
				}
				
				string +=  persona_numbers();
				
				string += '</div>';
				
				last_functions_3();
				
		}else{
			//console.log('empty');
		}
		
	});
	
	$('#btn-map').click(function(){
		btn_map();
	});
	
	$('.form-control.region-select').change(function(){
		btn_map();
	});
	
	$('.close-btn-1').bind("click",close_btn_1);
	$('.close-btn-2').bind("click",close_btn_2);
	$('.close-btn-3').bind("click",close_btn_3);
	
	function close_btn_1(){
		$('#title-results-row-1').hide();
		$('#results-phrase-not-found').hide();
		clear_letters_category();
		swich_btn1();
		
		$('.row-1 .results-phrase').html('');
		$('.row-1 .section-results').hide();
		
		if($('#btn-letters').hasClass('active')){
			$('#btn-letters').removeClass('active');
			$('.section-letters').hide();
		}
		
		if($('#btn-categories').hasClass('active')){
			$('#btn-categories').removeClass('active');
			$('.section-categories').hide();
		}
		
	}
	
	function close_btn_2(){
		swich_btn2();
		$('.strip-search-row-2-results').css('height','0px');
		$('#btn-map').removeClass('active');
	}	
	
	function close_btn_3(){
		$('#results-by-years-not-found').hide();
		swich_btn3();
		
		$('.results-by-years').html('');
		$('.section-results-by-years').hide();	
	}
	
	selected_area = '';
	
	function loadArea() {
		
		var selectedOption = $(".region-select option:selected");
		selected_area = selectedOption.val();
		var zoom = parseFloat(  $(selectedOption).attr("data-zoom") );
		var let =  parseFloat(  $(selectedOption).attr("data-lat") );
		var lng =  parseFloat( $(selectedOption).attr("data-long"));
		
		// console.log(zoom+" - "+let+" - "+lng);
		map.setZoom(zoom);
		map.setCenter({lat: let, lng: lng}); 

	}

	if(lang==''){
		lang2_area = 'he';
	}else{
		lang2_area = lang;
	}
	//url = rooturl+"/wp-json/wp/v2/persona"+lang1+"&filter[posts_per_page]=-1";
	url_area = rooturl+'/wp-json/wp/v2/persona';
	url_onload_area = url_area+'?lang='+lang2_area+'&filter[orderby]=title&filter[order]=ASC&filter[posts_per_page]=-1';
	data_onload_area = '';
		
	$.ajax({
			url: url_onload_area,
			context: document.body
		}).done(function(data) {
		data_onload_area = data;
	});		
	
	function getPersonaData() {
		
		
		
				string = '<div class="results-from-ajax">';
				
				data_onload_area.forEach(function(datavar) {
					//console.log('forEach');
					if(datavar.pure_taxonomies.hasOwnProperty('winning_area')){
						winning_area_name = datavar.pure_taxonomies.winning_area[0].name;

						if(datavar.acf.map_lat !==undefined && datavar.acf.map_lng!==null)	{
							//console.log('true');
							if(winning_area_name == selected_area){
								string += data_for_each_inner(datavar);
							}
							//Add the marker to the map
							newMarker = addPersonaMarker(datavar);
							//Append the data to the marker
							newMarker.datavar = datavar;
							//Adds the infowindow
							addPersonaInfoWindow(newMarker);
						}
					}
				});
				
				if (count_results%6 != 1){
					string += '</div>';
				}
				
				string +=  persona_numbers();
				
				string += '</div>';
				
				last_functions_2();
				
			
	}
	
	function btn_map(){
	
		if($( ".region-select option:selected" ).attr('data-lat') !=''){
		

		
			close_all_search_but_selected($('.row-2'));
			
			start_functions_2();
			swich_btn2_close_btn();
		
			$('.strip-search-row-2-results').css('height','auto');
			$('#btn-map').addClass('active');
			
			loadArea();
			
			getPersonaData();
			
		}else{
			alert(btn_continate_error);
		} 
		
	}
	
	function btn_phrase() {
		
		close_all_search_but_selected($('.row-1'));
		
		phrase = '';
		phrase = $('#input-phrase').val();
		if(phrase.length > 1){
		
			clear_letters_category();
			start_functions_1();
			
			if($('#btn-categories').hasClass('active')){
				$('#btn-categories').removeClass('active');
				$('.section-categories').hide();
			}
			if($('#btn-letters').hasClass('active')){
				$('#btn-letters').removeClass('active');
				$('.section-letters').hide();
			}
			
			swich_btn1_close_btn();

			url = rooturl+'/wp-json/wp/v2/persona';
			
			if(lang==''){
				lang2 = 'he';
			}else{
				lang2 = lang;
			}
			
			$.ajax({
				url: url+'?filter[s]='+phrase+'&lang='+lang2+'&filter[posts_per_page]=-1',
				context: document.body
			}).done(function(data) {
				
				string = '<div class="results-from-ajax clearfix">';
				
				string += data_for_each(data);
				
				string += '</div>';
				
				last_functions_1();
				
			});
			
		}else{
			
			alert(btn_search_error);
			
		}
	}
	
	function data_for_each(data){
	
		var string = '';
		
		data.forEach(function(datavar) {
			
			string += data_for_each_inner(datavar);
			
		});
		
		if (count_results%6 != 1){
			string += '</div>';
		}
		
		string +=  persona_numbers();
		
		return string;
	}
	
	function data_for_each_inner(datavar){
		
		var string = '';
		
		if (count_results%6 == 1){  
			string += '<div class="results-slide clearfix" data-slidenum="'+count_slide+'">';
			count_slide++;
		}		
		
		if(datavar.pure_taxonomies.hasOwnProperty('winning_category')){
			winning_category_name = datavar.pure_taxonomies.winning_category[0].name;
			winning_category_slug = datavar.pure_taxonomies.winning_category[0].slug;
		}else{
			winning_category_name = '';
			winning_category_slug = '';
		}
		if(datavar.pure_taxonomies.hasOwnProperty('winning_country')){
			winning_country_name = datavar.pure_taxonomies.winning_country[0].name;
			winning_country_slug = datavar.pure_taxonomies.winning_country[0].slug;
		}else{
			winning_country_name = '';
			winning_country_slug = '';
		}
		if(datavar.pure_taxonomies.hasOwnProperty('winning_year')){
			winning_year_name = datavar.pure_taxonomies.winning_year[0].name;
			winning_year_slug = datavar.pure_taxonomies.winning_year[0].slug;
		}else{
			winning_year_name = '';
			winning_year_slug = '';
		}
		if(datavar.pure_taxonomies.hasOwnProperty('winning_area')){
			winning_area_name = datavar.pure_taxonomies.winning_area[0].name;
		}else{
			winning_area_name = '';
		}
		
		string += persona_box( datavar.link,
											datavar.title.rendered,
											datavar.content.rendered,
											datavar.acf.persona_img,
											datavar.acf.short_movie_mp4,
											datavar.acf.born_date,
											datavar.acf.deceased,
											datavar.acf.pre_text_title,
											datavar.acf.map_lat,
											datavar.acf.map_long,
											datavar.acf.gender,
											winning_category_name,
											winning_category_slug,
											winning_country_name,
											winning_country_slug,
											winning_year_name,
											winning_year_slug,
											winning_area_name
											);
		if (count_results%6 == 0){ 
			string += '</div>';
		}
		count_results++;
		
		return string;
	}
	
	function persona_box(  link,
										title,
										content,
										persona_img,
										short_movie_mp4,
										born_date,
										deceased,
										pre_text_title,
										map_lat,
										map_long,
										gender,
										winning_category_name,
										winning_category_slug,
										winning_country_name,
										winning_country_slug,
										winning_year_name,
										winning_year_slug,
										map_area
										){
																		
			var string_a = '<div class="col-xs-4 single-result-box" data-slidepopup="'+count_results+'" data-gender="'+gender+'" data-persona_img="'+persona_img+'"  data-short_movie_mp4="'+short_movie_mp4+'" data-born_date="'+born_date+'" data-deceased="'+deceased+'" data-winning_category_name="'+winning_category_name+'" data-winning_category_slug="'+winning_category_slug+'" data-winning_country_name="'+winning_country_name+'" data-winning_country_slug="'+winning_country_slug+'" data-winning_year_name="'+winning_year_name+'" data-winning_year_slug="'+winning_year_slug+'" data-map_lat="'+map_lat+'" data-map_long="'+map_long+'" data-map_area="'+map_area+'">';
			string_a += '<div class="single-result">';
			string_a += '<div class="inner">';
			if(persona_img){
				string_a += '<div class="img"><img src="'+persona_img+'"/></div>';
			}
			string_a += '<h5>'+title+'</h5>';
			
			if((winning_year_name != '')&&(winning_category_name != '')){
				string_a += '<div>'+winning_category_name+', '+winning_year_name+'</div>';
			}else{
				if(winning_year_name == ''){
					string_a += '<div>'+winning_category_name+'</div>';
				}
				if(winning_category_name == ''){
					string_a += '<div>'+winning_year_name+'</div>';
				}
			}
			
			string_a += '<div>'+winning_country_name+'</div>';
			string_a += '<div class="data-title hide">'+title+'</div>'; 
			string_a += '<div class="data-content hide">'+content+'</div>'; 
			string_a += '<div class="data-pre_text_title hide">'+pre_text_title+'</div>'; 
			string_a += '</div>';
			string_a += '</div>';
			string_a += '</div>';
			
			return string_a;
			
	}	
	
	
	function start_functions_1(){
	
		count_results = 1;
		count_slide = 1;
		$('.row-1 #results-phrase-not-found').hide();
		$('.row-1 #num-results').hide();
		$('.row-1 .section-results').show();
		$('.row-1 #title-results-row-1').show();
		$('.row-1 .results-phrase').show();
		$('.row-1 .results-phrase').html('<img class="loading-gif" src="'+rooturl+'/wp-content/themes/nobel-theme/img/loading.gif"/>');
		
	}	
	
	function start_functions_2(){
	
		count_results = 1;
		count_slide = 1;
		$('#results-by-map-not-found').hide();
		$('#num-results-2').hide();
		$('.section-results-by-map').show();
		$('#title-results-row-2').show();
		$('.results-by-map').show();
		$('.results-by-map').html('<img class="loading-gif" src="'+rooturl+'/wp-content/themes/nobel-theme/img/loading.gif"/>');
		
	}	
	
	function start_functions_3(){
	
		count_results = 1;
		count_slide = 1;
		$('#results-by-years-not-found').hide();
		$('#num-results-3').hide();
		$('.section-results-by-years').show();
		$('#title-results-row-3').show();
		$('.results-by-years').show();
		$('.results-by-years').html('<img class="loading-gif" src="'+rooturl+'/wp-content/themes/nobel-theme/img/loading.gif"/>');
		
	}
	
	
	function last_functions_1(){
		
		count_results_show = count_results - 1;
		
		$('#strip-1-slider').attr('data-count',count_results_show);
		
		if(count_results_show>0){
			$('.row-1 #num-results-1').show();
			$('.row-1 #num-results-1 span').html(count_results_show);
			//$('#title-results-row-1').show();
			$('.row-1 .results-phrase').html('');
			$('.row-1 .results-phrase').show();
			$('.row-1 .results-phrase').prepend(string);
			$('.row-1 #results-phrase-not-found').hide();
		}else{
			$('.row-1 #num-results-1').hide();
			$('.row-1 #num-results-1 span').html('');
			$('.row-1 .results-phrase').html('');
			$('.row-1 .results-phrase').hide();
			$('.row-1 #results-phrase-not-found').show();
		}
		
		jQuery.getScript(rooturl+"/wp-content/themes/nobel-theme/js/row1.js", function(data, status, jqxhr) {});	
	
	}
	
	function last_functions_2(){
		
		count_results_show = count_results - 1;
		
		$('#strip-2-slider').attr('data-count',count_results_show);
		
		if(count_results_show>0){
			$('#num-results-2').show();
			$('#num-results-2 span').html(count_results_show);
			//$('#title-results-row-1').show();
			$('.results-by-map').html('');
			$('.results-by-map').show();
			$('.results-by-map').prepend(string);
			$('#results-by-map-not-found').hide();
		}else{
			$('#num-results-2').hide();
			$('#num-map span').html('');
			$('.results-by-map').html('');
			$('.results-by-map').hide();
			$('#results-by-map-not-found').show();
		}
		 
		jQuery.getScript(rooturl+"/wp-content/themes/nobel-theme/js/row2.js", function(data, status, jqxhr) {});	
		
	}
	
	function last_functions_3(){
		
		count_results_show = count_results - 1;
		
		$('#strip-3-slider').attr('data-count',count_results_show);
		
		if(count_results_show>0){
			$('#num-results-3').show();
			$('#num-results-3 span').html(count_results_show);
			$('#title-results-row-3').show();			
			$('.results-by-years').html('');
			$('.results-by-years').show();
			$('.results-by-years').prepend(string);
			$('#results-by-years-not-found').hide();
		}else{
			$('#num-results-3').hide();
			$('#num-results-3 span').html('');
			$('.results-by-years').html('');
			$('.results-by-years').hide();
			$('#results-by-years-not-found').show();
		}
		
		jQuery.getScript(rooturl+"/wp-content/themes/nobel-theme/js/row3.js", function(data, status, jqxhr) {});	
		
	}	
	
	// pagination
	function persona_numbers(){
	
		var string = '';
		
		count_slide--;
		
		if(count_slide > 1){
			string += '<div class="numbers">';
			if(count_slide > 2){
			string += '<span class="number-last">&laquo;</span>';
			}
			string += '<span class="number-right">&lsaquo;</span>';
			for( i = 1 ; i <= count_slide ; i++ ){
				if(i == 1){
				string += '<span class="number active" data-slidenum="'+i+'">'+i+'</span>';
				}else{
				string += '<span class="number" data-slidenum="'+i+'">'+i+'</span>';
				}
			}
			string += '<span class="number-left">&rsaquo;</span>';
			if(count_slide > 2){
			string += '<span class="number-first">&raquo;</span>';
			}
			string += '</div>';
		}
		
		return string;
		
	}
	
	
	function swich_btn1_close_btn(){
		$('.open-btn-1').removeClass('active');
		$('.close-btn-1').addClass('active');
	}
	
	function swich_btn1(){
		$('.open-btn-1').addClass('active');
		$('.close-btn-1').removeClass('active');
	}
	
	function swich_btn2_close_btn(){
		$('.open-btn-2').removeClass('active');
		$('.close-btn-2').addClass('active');
	}

	function swich_btn2(){
		$('.open-btn-2').addClass('active');
		$('.close-btn-2').removeClass('active');
	}
	
	function swich_btn3_close_btn(){
		$('.open-btn-3').removeClass('active');
		$('.close-btn-3').addClass('active');
	}

	function swich_btn3(){
		$('.open-btn-3').addClass('active');
		$('.close-btn-3').removeClass('active');
	}

	
	function close_all_search_but_selected(rowObj){
		row_num = rowObj.attr('data-row_num');
		row_num_int = parseInt(row_num);
		for( var i = 1 ; i <= 3 ; i++ ){
			if(row_num_int != i){
				if($('.row-'+i).find('.close-btn-'+i).hasClass('active')){
						if(i==1){
							close_btn_1();
						}
						if(i==2){
							close_btn_2();
						}
						if(i==3){
							close_btn_3();
						}
				}
			}
		}
	}
	
	function clear_letters_category(){
		if(term_id != ''){
			$('.list-category li[data-category_term_id="'+term_id+'"]').removeClass('active');
		}
		if(letter != ''){
			$('.list-letters li[data-letter="'+letter+'"]').removeClass('active');
		}
	}
	
});

function mapEventListeners() {
  var mouseMoveChanged = google.maps.event.addListener(map, 'mousemove',
      function (event) {
        updateCurrentLatLng(event.latLng);
      }
  );
}

function updateCurrentLatLng(latLng) {

	var lat = document.getElementById('latcoords');
	var lng = document.getElementById('loncoords');

    lat.innerHTML = latLng.lat();
    lng.innerHTML = latLng.lng();
}

