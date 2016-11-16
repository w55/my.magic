$(function(){	
	// $('#sel_01').css('display','none'); 
	for (var k=2; k <= 12; k++) {
		if (k > 9) s1 = '#sel_' + k;
		else s1 = '#sel_0' + k;		
		$(s1).css('display','none');
	}
		
	$('#hidd').data('anim', 'swap');
	$('#sel_01 option:nth-child(5)').prop('selected', 'selected');
	$('#sel_group option:nth-child(2)').prop('selected', 'selected');
	
  
	  function testAnim(x) {
		$('#timing').removeClass().addClass(x);
		var wait = window.setTimeout( function(){
			$('#timing').removeClass()
		}, 1500 );		
	  };  
  

	$('#sel_group').change(function(){
		var group = $(this).val();
      // testAnim(anim);
	    
		// display == none for dropdown lists
		for (var k=1; k <= 14; k++) {
			if (k > 9) s1 = '#sel_' + k;
			else s1 = '#sel_0' + k;		
			$(s1).css('display','none');
		}

		// selected group
		n1 = Number(group), s1 = '';
		if (n1 > 9) s1 = '#sel_' + n1;
		else s1 = '#sel_0' + n1;		
		// alert(s1);
		
		$(s1).css('display','inline');
		$(s1).children(":nth-child(2)").prop('selected', 'selected');
		$(s1).trigger('change');		
    });    
	
	$('.js--animations').change(function(){
      var anim = $(this).val();
	  if (anim.length > 0) {
			$('#hidd').data('anim', anim);
			// alert(anim);
			testAnim(anim);
		}
    });
	
	// but_anim
	$('#but_anim').click(function(e){
      e.preventDefault();
	  
	  // show that button was pressed		 
		/*
		$( this).animate({
				opacity: 0.25		
			}, 160, function() {
				$(this).css('opacity','1.0'); 
		});		
		*/
		
		  var anim = $('#hidd').data('anim');
		  // alert(anim);
		  if (anim.length > 2)
				testAnim(anim);
    }); 	
	
  });