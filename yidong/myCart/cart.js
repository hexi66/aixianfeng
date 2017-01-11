define(["jquery",'template'],function($,template){
	function request(obj2){
		var html = "";
		for(var i = 0 ; i<obj2.length ; i++){
			html += '<div class = "cart">'+
					'<div class = "show">'+
						'<img src="../myCart/img/hgou.png" alt="" style = "display:block"/>'+
					'</div>'+
					'<figure>'+
						'<img src="'+obj2[i].data.img +'" alt="" />'+
						'<figcaption>'+
							'<p>'+ obj2[i].data.name+'</p>'+
							'<p class = "tab">￥<span>'+ obj2[i].data.price+'<span></p>'+
						'</figcaption>'+
					'</figure>'+
					'<div class = "bottom">'+
						'<div class = "minus"></div>'+
						'<a href="#">' +obj2[i].num + '</a>'+
						'<div class = "add"></div>'+
					'</div>'+
				'</div>'
		}
		$(".mycart").html(html)
		
		cart();//函数调用
	}
	
	function cart(){
		
			//加号运算
			var count = 0;
			$(".bottom .add").click(function(){
				  count = parseInt($(this).parent().children("a").text());
				 $(this).parent().children("a").html(++count);
				 total();
				 
				var cot = $('footer ul li a .cartpro').html();	//购物车定位出现 加法
				$('footer ul li a .cartpro').html(++cot);
			})
			//减号运算
			var count1 = 0;
			$(".bottom .minus").click(function(){
				count1 = parseInt($(this).parent().children("a").text());
				 $(this).parent().children("a").text(--count1);
				 if($(this).parent().children("a").text() == 0){
				 	$(this).parent().parent().hide()
				 }
				 total();
				 var cott = $('footer ul li a .cartpro').html();	//购物车定位出现
				$('footer ul li a .cartpro').html(--cott);
			})
			
			
			//总额度的求和
			total();
			
			function total(){
				var total =0;
				for(var i = 0 ;i<$(".cart").length ; i++){
					if($($(".cart")[i]).find(".show").find("img").css("display") == "none"){
						continue;
					}
					var price = Number($($(".cart")[i]).find("span").text());
					var num = Number($($(".cart")[i]).find("a").text());
					total+=(price*num);
				}		
				$("#pro a span").text(total.toFixed(2));
			}
			
		//选中和未选中
		$(".show").click(function(){//单个选中按钮
			if($(this).find("img").css("display") == "none"){
				$(this).find("img").css("display","block");
				
			}else{
				$(this).find("img").css("display","none");
				
			}
			total();
		})
		
		//多选按钮
		$("#showup").click(function(){
			if($(this).children().css("display") == "none"){
				for(var i = 0 ; i<$(".show").length ;i++){
					$($(".show")[i]).children().css("display","block");
				}
				$(this).children().css("display","block");
			}else{
				for(var i = 0 ; i<$(".show").length ;i++){
					$($(".show")[i]).children().css("display","none");
				}
				$(this).children().css("display","none");
			}
			
			total();
		})
		
//		localStorage.str = $(".cart").html();
	}
		
	
	
	
	return {
		 request : request
	}
})
