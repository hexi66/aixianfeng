define(['jquery'],function($){
	
	function request(){
		//**********************搜索的功能*******************
		$(".down").append(localStorage.getItem("bb"));
		$(".tap li").on("click",function(){	//li点击的时候触发事件
			

			var $a = $(".down li");		
			for(var i = 0 ;i<$a.length;i++){ //遍历添加进来的li元素
				if($(this).html() == $a[i].innerHTML){	//当点击的li元素和添加之后的元素相同的时候
					$(".down").prepend($a[i]);	//添加元素
					return;
				}				
			}
			$(".down").prepend($(this).clone());	//如果元素不相同，添加元素
			localStorage.bb = $(".down").html() ;	//储存到本地中，永久保存
			
			
		});
		
		
		$(".remove a").on("click",function(){	//清空历史记录
			$(this).prev().html("");		//把ul清空，再存到本地缓存中，相当于本地存储已经清空
			localStorage.bb = $(".down").html() ;
		})
		
		
		
		//*******************一键返回的功能*******************
		$(".back").on("click",function(){
			history.go(-1);	//返回上一页
		})
		
		//获取a标签，绑定事件
		//			window.location.href = "main.html";	//点击事件时触发该事件跳转至其他页面
//		$("#aaa").click(function(){
//			$("#aaa").attr("src","#searchll")
//		})
	}
	
	return {
		request : request
	}
	
	
});
