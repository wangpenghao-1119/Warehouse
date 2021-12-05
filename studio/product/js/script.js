$(function(){

	// 三个入口的鼠标移上事件
	changeBtn('.enter a');

	// 三个平台介绍的tab
	mainTitle();

	// 主体部分鼠标移上事件
	var oImg = $('.card-img');
	$(oImg).mouseover(function(){
		$(this).css('borderColor','#f90');
	});
	$(oImg).mouseout(function(){
		$(this).css('borderColor','#fff');
	})

})

function changeBtn(obj){
	$(obj).mouseover(function(){
		$(this).addClass('test');
	});
	$(obj).mouseout(function(){
		$(this).removeClass('test');
	})
}
///////////////////////////////////////////
function mainTitle(){
	//获取所有的页签和要切换的内容
	var lis = $('.title li');
	var divs = $('.mod');
	for(var i=0;i<divs.length;i++){
		lis[i].id = i;
		$(lis[i]).click(function(){
			changeHighlight(this.id);
		})
	}
}
//改变当前的高亮显示
function changeHighlight(curIndex){
	var lis = $('.title li');
	var divs = $('.mod');
	//清除所有li页签上的class及con层
	for(j=0;j<lis.length;j++){
		$(lis[j]).removeClass('active');
		$(divs[j]).hide();
	}
	//再显示当前页签
	$(lis[curIndex]).addClass('active');
	$(divs[curIndex]).fadeIn();
}

