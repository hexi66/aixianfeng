define(["jquery"],function($){
	function request(){
		//实现返回键的跳转
		$(".goback").click(function(){
			history.go(-1);
		})
	}
	
	return {
		request : request
	}
});
