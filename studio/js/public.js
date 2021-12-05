$(function(){

	// 导航的鼠标移上效果
	changeNav();

	//点击logo跳到首页
	logoJump('.logo');
	
	//首页幻灯片
    slider();

})

function changeNav(){
	var oA = $('.nav li a');
	for(var i=0;i<oA.length;i++){
		$(oA[i]).mouseover(function(){
			$(this).animate({
				color:'#7e7e7e',
			},300);
		})
		$(oA[i]).mouseout(function(){
			$(this).animate({
				color:'#fff',
			},300)
		})
	}
}


function logoJump(id){
	$(id).mouseover(function(){
		$(this).css('cursor','pointer');
	}).click(function(){
		window.open('../index/index.html','_self')
	})	
}

function slider() {//首页幻灯片
    var speed=60;
	var i=0;
	var timer=setInterval(auto,5000);
	function auto(){
	  $(".tip em").animate({"top":i*60+9+"px"},speed);//(52+8)=60
	  $(".slider>ul").animate({"top":"-"+i*250+"px"},speed);//250+4
	  i++;
	  if(i>3){i=0}
}

	$(".tip ul li").on("mouseover",function(){
		var $this=$(this);
		i=$this.index();
		$(".tip em").animate({"top":i*60+9+"px"},speed);
		$(".slider>ul").animate({"top":"-"+i*250+"px"},speed);
	});
	
}


/////////////////////////////////////////
// 运动框架
// 封装getStyle （获取样式currentStyle getComputedStyle兼容处理） 
function getStyle(obj, attr){
	if(obj.currentStyle){
  	return obj.currentStyle[attr];
 	}
 	else{
  	return getComputedStyle(obj, false)[attr];
 	}
}


// startMove(obj,{attr1:iTarget1,attr2:iTarget2},fn);
function startMove(obj,json,fn){
	
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			for(var attr in json){
			var flag = true;
			//1 取当前的值
			var icur = 0;
			if(attr == 'opacity'){
				var icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				var icur = parseInt(getStyle(obj,attr));
			}
			//2 算速度 
			var speed = (json[attr]-icur)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			// 3 检测停止
			if(icur != json[attr]){
				flag = false;
			}
			if(attr == 'opacity'){
				obj.style.opacity = (icur + speed)/100;
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
			}else{
				obj.style[attr] = icur + speed +'px';
			}		
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
			}	
		},30)
	
}

