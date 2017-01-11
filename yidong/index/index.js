define(['jquery','template','swiper'],function($,template,swiper){
	function request(url1){

		
		$.ajax({
				type:"get",
				url:url1,
				datatype:"json",
				async:true,
				success : function(data){
					if(url1 =="http://h5.yztctech.net/api/axf/apihome.php"){
						var result = JSON.parse(data);
						var html = baidu.template('tpla',result);
						var html2 = baidu.template('tpll',result);
						$("#banner1").html(html);//首页轮播图
						$(".div1").html(html2);//首页菜单数据
						 
						swiperFn(); //轮播效果的调用函数
						botapFn();
						getFn();
						
						
					}
					if(url1 == "http://h5.yztctech.net/api/axf/apihomehot.php"){
						var result1 = data;
						var result2 = JSON.parse(result1);
//					console.log(result2.data)
						var html3 = baidu.template('tplll',result2);
//						console.log(html3)

						$(".bottom").html(html3);
						shopping();	// 添加购物车的功能
					}
					
					
				}
		});
		
		

		
	};
		
		
		function shopping(){
				//点击添加购物车按钮的时候，显示添加的数量
			$(".shopping").click(function(){
				$('footer ul li a .cartpro').css("display","block");
				var count = $('footer ul li a .cartpro').html();
				$('footer ul li a .cartpro').html(++count);
			})
		}
	
	
	
	//调用swiper插件
	function swiperFn(){
		var mySwiper = new Swiper('.swiper-container',{
			pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
		});
	}
	
	function botapFn(){//底部的背景颜色切换
		var arr = ["12.png","14.png","8_07.png","16.png","18.png"];
		var arr1 = ["11.png","13.png","1_03.png","15.png","17.png"];
			for(var i = 0 ; i <arr.length ; i++){
				$("footer li").click(function(){
					for(var j = 0 ; j<arr1.length ; j++){
						$('footer li').find("img").eq(j).attr("src","img/"+arr1[j])
					}
					var aa = "img/"+arr[$(this).index()];
					$(this).find("img").attr("src",aa)
					
				})
			}
	}
	
	//点击首页的疯狂秒杀跳转至其他页面
	function getFn(){
		$(".div1 a:nth-of-type(2)").attr("href","#crazy")
	}
	
	
	
	return {
		request : request
	}
})
	
	
	