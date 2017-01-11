//返回键的跳转

define(["jquery"],function($){
	
	function request(){
		$("#goback").click(function(){
		history.go(-1);
		})
	}
	
	return {
		request : request
	}
})
