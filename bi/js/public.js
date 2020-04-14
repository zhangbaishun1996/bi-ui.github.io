//全屏切换
function requestFullScreen(element){
	var docElm = document.documentElement;
	if (docElm.requestFullscreen) {
		docElm.requestFullscreen();
	} else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	} else if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	} else if (docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	}
}
function exitFullscreen(element) {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}
function fullScreen(){
	if($(".topd .rcond .btnd .p3").hasClass("on")){
		$(".topd .rcond .btnd .p3").removeClass("on");
		$(".topd .rcond .btnd .p3 a").attr("title","点击全屏");
		exitFullscreen();
	}else{
		$(".topd .rcond .btnd .p3").addClass("on");
		$(".topd .rcond .btnd .p3 a").attr("title","退出全屏");
		requestFullScreen();
	}
}

//菜单
$('.topd .lcond .swind').mouseover(function(){
	$(this).addClass("mouse");
});
$('.topd .lcond .swind').mouseout(function(){ 
	$(this).removeClass("mouse");
});