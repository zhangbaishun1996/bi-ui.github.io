//组装省份
function map_assemble_area(areaArray, area){
	//console.log("map_assemble_area: area="+area);
	if(areaArray==null){ areaArray=new Array(); }
	if(area==null || area<=0){ return areaArray; }
	var i=0,total=0;
	var code;
	var cont=0;
	var isHave=false;
	var haveIndex=0;
	total=areaArray.length;
	//console.log("map_assemble_area: total > "+total);
	for(i=0;i<total;i++){
		code=areaArray[i].code;
		if(code==area){
			//console.log("map_assemble_area: code==area > "+area+" cont="+cont);
			cont=areaArray[i].cont;
			isHave=true;
			haveIndex=i;
			break;
		}
	}
	if(isHave){
		cont++;
		var obj=new Object();
		obj.code=area;
		obj.cont=cont;
		areaArray[haveIndex]=obj;
	}else{
		var obj=new Object();
		obj.code=area;
		obj.cont=1;
		areaArray[total]=obj;
	}
	return areaArray;
}

//排序
function sortCont(a,b){
   return b.cont-a.cont;
}
function getMapLocation(punitCont, provinceArray, cityArray, areaArray){
	var locatObj=new Object();
	locatObj.type=0; //0:全国,1:某省,2:某市,3:某县/区
	locatObj.code=0;
	locatObj.name='全国';
	locatObj.zoom=5; //bamp:5..8..11..13.., geo:1.2..8..11..14..
	
	if((provinceArray==null || provinceArray.length<=0) && (cityArray==null || cityArray.length<=0) && (areaArray==null || areaArray.length<=0)){
		return locatObj;
	}
	
	//总数排在第一位的县区占项目总数比
	var aArray=areaArray.sort(sortCont);
	if(aArray!=null && aArray.length>0){
		var aCode=aArray[0].code;
		var aCont=aArray[0].cont;
		var anum=aCont/punitCont;
		//console.log("area-anum: "+anum);
		if(anum>0.9){
			locatObj.type=3;
			locatObj.code=aCode;
			locatObj.name=aCode;
			locatObj.zoom=11;
			return locatObj;
		}
	}
	//总数排在第一位的城市占项目总数比
	var cArray=cityArray.sort(sortCont);
	if(cArray!=null && cArray.length>0){
		var cCode=cArray[0].code;
		var cCont=cArray[0].cont;
		var cnum=cCont/punitCont;
		//console.log("city-cnum: "+cnum);
		if(cnum>0.9){
			locatObj.type=2;
			locatObj.code=cCode;
			locatObj.name=cCode;
			locatObj.zoom=11;
			return locatObj;
		}
	}
	//总数排在第一位的“省份”占项目总数比
	var pArray=provinceArray.sort(sortCont);
	if(pArray!=null && pArray.length>0){
		var pCode=pArray[0].code;
		var pCont=pArray[0].cont;
		var pnum=pCont/punitCont;
		//console.log("prov-pnum: "+pnum);
		if(pnum>0.7){
			locatObj.type=1;
			locatObj.code=pCode;
			locatObj.name=pCode;
			locatObj.zoom=8;
			return locatObj;
		}
	}
	return locatObj;
}

function map_get_Max_province(provinceArray){
	var str='';
	for(var i=0,total=provinceArray.length;i<total;i++){
		str+='code='+provinceArray[i].code+',cont='+provinceArray[i].cont+'; '
	}
	console.log("sort前: "+str);
	
	provinceArray.sort(sortCont);
	
	str='';
	for(var i=0,total=provinceArray.length;i<total;i++){
		str+='code='+provinceArray[i].code+',cont='+provinceArray[i].cont+'; '
	}
	console.log("sort后: "+str);
}
function map_get_Max_city(cityArray){
	var str='';
	for(var i=0,total=cityArray.length;i<total;i++){
		str+='code='+cityArray[i].code+',cont='+cityArray[i].cont+',pid='+cityArray[i].pid+'; '
	}
	console.log("sort前: "+str);
	
	cityArray.sort(sortCont);
	
	str='';
	for(var i=0,total=cityArray.length;i<total;i++){
		str+='code='+cityArray[i].code+',cont='+cityArray[i].cont+',pid='+cityArray[i].pid+'; '
	}
	console.log("sort后: "+str);
}

/*
var str='';
var result=[
  {code:'445001',cont:1},
  {code:'445002',cont:4},
  {code:'445003',cont:10},
  {code:'445004',cont:2},
  {code:'445005',cont:6}
];
   
str='';
for(var i=0,total=result.length;i<total;i++){
	str+='code='+result[i].code+',cont='+result[i].cont+"; "
}
console.log("result>1="+str);

function sortCont(a,b){
   return b.cont-a.cont;
}
result.sort(sortCont);
str='';
for(var i=0,total=result.length;i<total;i++){
	str+='code='+result[i].code+',cont='+result[i].cont+"; "
}
console.log("result>2="+str);

*/
