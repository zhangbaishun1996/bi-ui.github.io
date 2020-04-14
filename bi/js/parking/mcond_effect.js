//效果
var mcond_base_n1=0,mcond_base_n2=0,mcond_base_n3=0,mcond_base_n4=0,mcond_base_n5=0,mcond_base_n6=0;
function effectMcond_base(n1,n2,n3,n4,n5,n6){
	if(n1!=null){ mcond_base_n1=n1; }
	if(n2!=null){ mcond_base_n2=n2; }
	if(n3!=null){ mcond_base_n3=n3; }
	if(n4!=null){ mcond_base_n4=n4; }
	if(n5!=null){ mcond_base_n5=n5; }
	if(n6!=null){ mcond_base_n6=n6; }
	
	var mcn4=mcond_base_n4;
	if(mcn4>9999){
		mcn4=mcn4/10000;
		$(".pnumlid .i4 em").html("(万)");
	}else{
		$(".pnumlid .i4 em").html("");	
	}
	var mcn5=mcond_base_n5;
	if(mcn5>9999){
		mcn5=mcn5/10000;
		$(".pnumlid .i5 em").html("(万)");
	}else{
		$(".pnumlid .i5 em").html("");	
	}
	$('#odometer_base1').html(0);
	$('#odometer_base2').html(0);
	$('#odometer_base3').html(0);
	$('#odometer_base4').html(0);
	$('#odometer_base5').html(0);
	$('#odometer_base6').html(0);
	$('#odometer_base1').html(mcond_base_n1);
	$('#odometer_base2').html(mcond_base_n2);
	$('#odometer_base3').html(mcond_base_n3);
	$('#odometer_base4').html(mcn4);
	$('#odometer_base5').html(mcn5);
	$('#odometer_base6').html(mcond_base_n6);
}
var mcond_carflow_inc=0,mcond_carflow_outc=0;
function effectMcond_carflow(inc, outc, firstLoad){
	if(inc!=null){ mcond_carflow_inc=inc; }
	if(outc!=null){ mcond_carflow_outc=outc; }
	
	$(".mcond_carflowlid .picd.pic1 .icod").css("margin-top",-100);
	$(".mcond_carflowlid .picd.pic1 .icod").animate({marginTop:"-26px"},800,function(){
		$('#odometer_carflow1').html(0);
		$('#odometer_carflow1').html(mcond_carflow_inc);
		
		$(".mcond_carflowlid .picd.pic2 .icod").css("margin-bottom",-100);
		$(".mcond_carflowlid .picd.pic2 .icod").animate({marginBottom:"-26px"},800);
		$('#odometer_carflow2').html(0);
		$('#odometer_carflow2').html(mcond_carflow_outc);
	});
}
function effectMcond_parklot(){
	$(".mcond_parklotlid").each(function(i,e) {
		if(i==0){ return; }
		if(i==1){
			$(this).addClass("li1");	
		}else if(i==2){
			$(this).addClass("li2");
		}
		$(this).find(".d4 p i").css("width",$(this).find(".d5").html());
    });
}
function effectMcond_card(){
	//top
	var total=$(".mcond_cardtopd").length;
	//console.log("effectMcond_card mcond_cardtopd.length=: "+total);
	if(total>1){
		$(".mcond_cardtopuld").animate({marginTop:"-90px"},800,function(){
			$(".mcond_cardtopd").eq(0).remove();
			$(".mcond_cardtopuld").css("margin-top","0");
		});
	}
	
	//list
	var total2=$(".mcond_cardlid").length;
	//console.log("effectMcond_card mcond_cardlid.length=: "+total2);
	if(total2>4){
		$(".mcond_carduld").animate({marginTop:"-45px"},800,function(){
			$(".mcond_cardlid").eq(0).remove();	
			$(".mcond_carduld").css("margin-top","0");
		});
	}
}

var mcond_pkm_money=0;
function effectMcond_pkm(money, firstLoad){
	if(money==null){ return; }
	if(firstLoad){
		mcond_pkm_money=0;
	}
	if(money==mcond_pkm_money){ return; }
	mcond_pkm_money=money;
	var unitd="元";
	if(money>99999){
		money=money/10000;
		unitd="万元";
	}
	$('.mcond_pkmmd .unitd').html(unitd);
	$('#odometer_charge').html(0);
	$('#odometer_charge').html(money);
}
function effectMapNum(num){
	$('#odometer_map_num').html(0);
	$('#odometer_map_num').html(num);
}