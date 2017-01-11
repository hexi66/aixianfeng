define(['jquery','template'],function($,template){
	
	function request(){
		
		$.ajax({
			type:"get",
			url:"http://h5.yztctech.net/api/axf/apimiaosha.php",
			async:true,
			datatype:'json',
			success : function(data){
				
				var result = JSON.parse(data);
				console.log(result)
				var html = baidu.template("tpl",result);
				$(".main111").html(html);
				
			}
		});
	}
	
	
	return {
		request : request
	}
	
	
	
});
