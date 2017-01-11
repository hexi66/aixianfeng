define(["jquery",'template'],function($,template){
	function request(){
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apiyuding.php",
			async:true,
			datatype:"json",
			success: function(data){
				var result = JSON.parse(data);
				var html = baidu.template("tpl",result);
				$(".content2").html(html);
				cart();//调用加减号函数
			}
		});
		
		
		
		
		function cart(){
			//加号运算
			$(".bottom .add").click(function(){
				$(this).siblings().css("display","inline-block")
				 var count = parseInt($(this).parent().children("span").text());
				 $(this).parent().children("span").html(++count);
				 $('footer ul li a .cartpro').css("display","block");
				 
				var cot = $('footer ul li a .cartpro').html();	//购物车定位出现
				$('footer ul li a .cartpro').html(++cot);
			})
			//减号运算
			$(".bottom .munis").click(function(){
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
		
		//=======拿到新鲜预定的数据渲染到购物车==========
		function reverseFn(){
			$(".content1").attr("string");
			console.log($(".content1").attr("string"))
		}
		reverseFn();	//调用该函数
		
	}
	
	return {
		request: request
	}
})
