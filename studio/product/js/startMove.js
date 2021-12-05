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
 
