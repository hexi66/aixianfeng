define(['underscore','backbone'],function(_,backbone){
	var router = backbone.Router.extend({
		routes:{
			//触发的锚点
			'index':'test',//页面刚开始加载的页面
			'market':'test2',
			'reserve':'test3',
			'mycart':'test4',
			'my':'test5',
			'crazy': 'test6',
			'search':'test7',
			'searchll':'test8',
			'position':'test9',
			'integral' : 'test10',
			'order' : 'test11'
		},
		//****************主页的跳转*************************
		test : function(){
			require(['text!index.html','index'],function(index,indexCtr){
				$("body").html(index);
				indexCtr.request('http://h5.yztctech.net/api/axf/apihome.php');
				indexCtr.request('http://h5.yztctech.net/api/axf/apihomehot.php');
			})
		},
		//*******************闪送超市的跳转*****************
		test2 : function(){
				require(['text!../Supermarket/market.html','../Supermarket/market'],function(market,req){
				$("#content").html(market);
				req.request();
			});
		},
		//****************新鲜预定的跳转*******************
		test3 : function(){
			require(['text!../reserve/reserve.html','../reserve/reserve'],function(reserve,req){
				$("#content").html(reserve);
				req.request();
			})
		},
		//*******************购物车的跳转************************
		test4 : function(){
			//=======拿到闪送超市的数据渲染到购物车==========
			function market(){
				var arr = [];
				var $a = $(".position span");
				for(var i = 0 ; i<$a.length ; i++){
					strFn($($a[i]));
				}
				function strFn(obj){
					if(obj.html()>0){
						arr.push({
							data : JSON.parse(obj.attr("str")),
							num : obj.html()
						})
					}
				}
				localStorage.str = JSON.stringify(arr);
				//console.log(JSON.parse(localStorage.str)[0])	
			}
			market();	//调用该函数
			var obj2 = JSON.parse(localStorage.str);
			
			
			
			
			require(['text!../myCart/cart.html','../myCart/cart'],function(cart,req){
				$("#content").html(cart);
				req.request(obj2);	//传的是闪送超市的数据
//				console.log(obj2)
			})
		},
		//********************我的跳转**************************
		test5 : function(){
			require(['text!../my/my.html','../my/my'],function(my,req){
				$("#content").html(my);
				req.request();
			})
		},
		//***********疯狂秒杀的跳转**********************
		test6 : function(){
			require(['text!../crazy/crazy.html','../crazy/crazy'],function(crazy,req){
				$("#content").html(crazy);
				req.request();
			})
		},
		//***************搜索1的跳转********************
		test7 : function(){
			require(['text!../search/search.html','../search/search'],function(search,req){
				$("#content").html(search);
				req.request();
				$("#aaa").trigger("click");
				
			})
		},
		//***************搜索2的跳转********************
		test8 : function(){
			require(['text!../search/searchll.html','../search/searchll'],function(searchll,req){
				$("#content").html(searchll);
				req.request();
				
			})
		},
		//***************定位的跳转********************
		test9 : function(){
			require(['text!../position/position.html','../position/position'],function(position,req)			{
				$("#content").html(position);
				req.request();
				
			})
		},
		//***************积分的跳转********************
		test10 : function(){
			require(['text!../integral/integral.html','../integral/integral'],function(integral,req)			{
				$("#content").html(integral);
				req.request();
				
			})
		},
		//***************我的订单的跳转********************
		test11 : function(){
			require(['text!../order/order.html','../order/order'],function(order,req){
				$("#content").html(order);
				req.request();
				
			})
		},
		//初始化；默认跳转到首页
		initialize: function(){
//			默认跳转到首页
			location.hash = "position";
		}
	});
	
	var w = new router();
	backbone.history.start();
});
