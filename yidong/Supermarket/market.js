define(['jquery','template'],function($,template){
	function request(){
		
		function ajaxFn(num){
			$.ajax({
				type:"get",
				url:"http://h5.yztctech.net/api/axf/apicategory.php",
				datatype: "json",
				data:{
					"category" : num
				},
				async:true,
				success:function(data){
					
					var result = JSON.parse(data);
					var html = baidu.template('tpl',result);
					$(".right").html(html);
					cart();
				}
			});
		}
		ajaxFn("热销榜");
		//点击获取相应的数据
		$('.left li').eq(0).addClass('active');
			$('.left li').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				var result = $(this).text();
				ajaxFn(result);
			});
		
		
		function cart(){
			//加号运算
			$(".position .add").click(function(){
				$(this).siblings().css("display","inline-block")
				 var count = parseInt($(this).parent().children("span").text());
				 $(this).parent().children("span").html(++count);
				  $('footer ul li a .cartpro').css("display","block");
				 
				var cot = $('footer ul li a .cartpro').html();	//购物车定位出现
				$('footer ul li a .cartpro').html(++cot);
			})
			//减号运算
			$(".position .munis").click(function(){
				var count1 = parseInt($(this).parent().children("span").text());
				 $(this).parent().children("span").text(--count1);
				 if($(this).parent().children("span").text() == 0){
				 	$(this).parent().children("span").css("display","none");
				 	$(this).hide();
				 }
				 var cott = $('footer ul li a .cartpro').html();	//购物车定位出现
				$('footer ul li a .cartpro').html(--cott);
			})
			
		}
		
		

	}
	

	
		
	
	
	
	return {
		request : request
		
	}
});








