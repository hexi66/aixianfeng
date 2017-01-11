define(["jquery"],function($){
	function request(){
		$("body").click(function(){
			if(location.hash == "#position"){//判断当前的默认跳转的页面，然后修改，实现点击跳转的功能
				location.hash = "#index"
			}
		})
		
	}
	
	return {
		request : request
	}
});
