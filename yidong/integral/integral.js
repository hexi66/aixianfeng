define(["jquery"],function($){
	function request(){
		$(".goback").click(function(){
			history.go(-1);
		})
	}
	
	return {
		request : request
	}
})
