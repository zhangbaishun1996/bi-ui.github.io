$(function(){
	var my_jPlayer = $("#jquery_jplayer");
	var start = function(){
		my_jPlayer.jPlayer("setMedia", {
			mp3: "bi/music/thexx-short.mp3"
		});
		my_jPlayer.jPlayer("play"); //播放
	};
	
	//实例化
	my_jPlayer.jPlayer({
		ready:function(){
			start();
		},
		play:function(event){
			$(".topd .rcond .btnd p.p2 a.jp-play").css("display","none");
			$(".topd .rcond .btnd p.p2 a.jp-stop").css("display","inline-block");
		},
		pause:function(event){
			$(".topd .rcond .btnd p.p2 a.jp-play").css("display","inline-block");
			$(".topd .rcond .btnd p.p2 a.jp-stop").css("display","none");
		},
		swfPath: "../../dist/jplayer",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window",
		loop: true
	});
	$("#jp_container .track").click(function(e) {
		start();
		return false;
	});
});