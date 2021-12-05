//表单验证	
$(document).ready(function(e) {
	  
	  $("#name").blur(function(){
		  var oname=$("#name").val();
		  if(oname==null||oname==""){ 
			  $("#nameNull").css("display","block");
		  }else{
			  $("#nameNull").css("display","none");
		  }
	  })
  
	  $("#phone").blur(function(){
		  var phone=$("#phone").val();
		  if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){ 
			  $("#phoneTrue").css("display","block");
		  }else{
			  $("#phoneTrue").css("display","none");
		  }
	  })
  
	  $("#email").blur(function(){
		  var oemail=$("#email").val();
		  var filter  =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  if(!filter.test(oemail)){
			  $("#emailTrue").css("display","block");
		  }else{
			  $("#emailTrue").css("display","none");
		  }
	  })
});



jQuery.fn.customInput = function(){
	return $(this).each(function(){	
		if($(this).is('[type=checkbox],[type=radio]')){
			var input = $(this);
			
			// 使用输入的ID得到相关的标签
			var label = $('label[for='+input.attr('id')+']');
			
			// 包裹在一个div输入+标签
			input.add(label).wrapAll('<div class="custom-'+ input.attr('type') +'"></div>');
			
			// 必要的浏览器不支持：hover伪类的标签
			label.hover(
				function(){ $(this).addClass('hover'); },
				function(){ $(this).removeClass('hover'); }
			);
			
			//绑定自定义事件，触发它，绑定点击，焦点，模糊事件				
			input.bind('updateState', function(){	
				input.is(':checked') ? label.addClass('checked') : label.removeClass('checked checkedHover checkedFocus'); 
			})
			.trigger('updateState')
			.click(function(){ 
				$('input[name='+ $(this).attr('name') +']').trigger('updateState'); 
			})
			.focus(function(){ 
				label.addClass('focus'); 
				if(input.is(':checked')){  $(this).addClass('checkedFocus'); } 
			})
			.blur(function(){ label.removeClass('focus checkedFocus'); });
		}
	});
};