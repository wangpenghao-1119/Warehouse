$(function(){

	// 侧面导航
	subMenu();

	// 默认显示第一个
	changeHighlight('0');

	// 主体部分右边的选中（鼠标移上）事件
	var oItem = $('.item');
	$(oItem).mouseover(function(){
		startMove(this,{opacity:100});
		$(this).css('borderColor','#f90');
	})
	$(oItem).mouseout(function(){
		startMove(this,{opacity:70});
		$(this).css('borderColor','#d7d7d7');
	})


	//照片墙效果 
	$("#picLsy li").hover(function(){
		$(this).find('.text:not(:animated)').animate({top:"0px"}, {easing:"easeInOutExpo"}, 100, function(){});
	},function () {
		$(this).find('.text').animate({top:"143px"}, {easing:"easeInOutExpo"}, 100, function(){});
	});



	// content底下的按钮
	$('#better').hover(
		function(){
			$(this).animate({
				backgroundColor:"#00c386",
			},300)		
		},
		function(){
			$(this).animate({
				backgroundColor:"#ea4c89",
			},300)	
		}
	)
	


})

function subMenu(){
	//获取所有的页签和要切换的内容
	var lis = $('.slidebar li');
	var as = $('.slidebar a');
	var divs = $('.mod');
	for(var i=0;i<divs.length;i++){
		lis[i].id = i;
		as[i].id = i;
		$(as[i]).click(function(){
			changeHighlight(this.id);
		})
	}
}
//改变当前的高亮显示
function changeHighlight(curIndex){
	var lis = $('.slidebar li');
	var divs = $('.mod');
	//清除所有li页签上的class及con层
	for(j=0;j<lis.length;j++){
		$(lis[j]).removeClass('sub-active');
		$(divs[j]).hide();
	}
	//再显示当前页签
	$(lis[curIndex]).addClass('sub-active');
	$(divs[curIndex]).fadeIn();
}

