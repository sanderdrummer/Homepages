	//Search

	//Search Tags
	var tagSuggest = [
		'cat',
		'unicorn',
		'woman',
		'red'
	];

	//Check ob sich Searchbar inhalt ändert
	var searchValue = "";
    setInterval(checkTextboxChanged, 0.5);

    function checkTextboxChanged() {
        var currentValue = $('#search-input').val();
        if (currentValue != searchValue) {
            searchValue = currentValue;
            TextboxChanged();
        }
    }


    function exists(elem){
    	if (elem.length > 0){
    		return true;
    	}else{
    		return false;
    	}
    }

    function clearSuggestions(){
    	$('#search-suggest').addClass('hidden');
    	tagSuggest.forEach(function(suggestion){
    		if(exists(suggestion)){
    			$('#'+suggestion).remove();
    		}
    	});
    }

    function newTag(value){
    	clearSuggestions();
		searchValue = "";
		if ($('.tagrow').hasClass('hidden')){
			$('.tagrow').removeClass('hidden');
			$('.tag-container').addClass('animated');
		}
		var newtag = '<button type="button" style="margin-right:3px;" class="tag btn btn-sm btn-info">'+value+'</button>';
		$('.tag-container').append(newtag);
		$('#search-input').val("");
    }

    //Schreibe oder lösche Suggestions in #search-suggest 
    function TextboxChanged() {
	        if ($('#search-suggest').get()[0].firstChild.nextSibling === null ){
	        	$('#search-suggest').addClass('hidden');
	        }
	        if (searchValue.length < 1 ){
    			clearSuggestions();
    		}
	        for( var i = 0; i<tagSuggest.length; i++){
	        	if (tagSuggest[i].match(searchValue) != null ){
	        		$('#search-suggest').removeClass('hidden');
	        		if (exists($('#'+tagSuggest[i]))) {
	        			
					}else{
	        			$('#search-suggest').append('<li id="'+ tagSuggest[i] +'" >'+ tagSuggest[i] +'</li>');
					};			
	        	}else{
	        		if ($('#'+tagSuggest[i]).length > 0) {
	        			$('#'+tagSuggest[i]).remove();
					};
	        	}
	        }	
    	
    }

    // erzeuge neuen Tag
	$('#search').submit(function(){
		event.preventDefault();
		newTag($('#search-input').val());
		//($('#search>input').text());
	});


	//toggle Tags
	$('.tag-container').on('click','button', function(){
		event.preventDefault();
		$(this).toggleClass('btn-info').toggleClass('btn-default');
	});

	//Autocomplete aus Suggest-Liste auswählen
	$('#search-suggest').on('click', 'li', function(){
		newTag($(this).html());
	});