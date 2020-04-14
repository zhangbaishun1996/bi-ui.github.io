//登记车辆类型
var carDataArray=[{"name":"月票车","value":6305},{"name":"车位池车","value":3504},{"name":"临时车","value":902},{"name":"免费车","value":442},{"name":"贵宾车","value":135},{"name":"公务车","value":64},{"name":"储值票车","value":6},{"name":"时租车","value":0},{"name":"月结车","value":0}];
var carDataList = [{
	offset: [56, 48],
	symbolSize: 120,
	opacity: .95,
	color: '#f467ce'
}, {
	offset: [35, 80],
	symbolSize: 95,
	opacity: .88,
	color: '#7aabe2'
}, {
	offset: [20, 43],
	symbolSize: 90,
	opacity: .84,
	color: '#ff7123'
}, {
	offset: [83, 30],
	symbolSize: 90,
	opacity: .8,
	color: '#ffc400'
}, {
	offset: [36, 20],
	symbolSize: 65,
	opacity: .75,
	color: '#5e333f'
}, {
	offset: [64, 10],
	symbolSize: 70,
	opacity: .7,
	color: '#6b3442'
}, {
	offset: [75, 75],
	symbolSize: 60,
	opacity: .68,
	color: '#8a3647'
}, {
	offset: [10, 80],
	symbolSize: 55,
	opacity: .63,
	color: '#8a3647'
}, {
	offset: [85, 90],
	symbolSize: 50,
	opacity: .60,
	color: '#8a3647'
}, {
	offset: [40, 90],
	symbolSize: 50,
	opacity: .55,
	color: '#8a3647'
}, {
	offset: [85, 90],
	symbolSize: 50,
	opacity: .50,
	color: '#8a3647'
}, {
	offset: [85, 90],
	symbolSize: 50,
	opacity: .45,
	color: '#8a3647'
}];
var car_scatter_graphID=null;

//重新渲染参数可不传入
function showCharts_Car_scatter(carData){
	if(carData!=null){
		carDataArray=carData;	
	}
	if(carDataArray==null){return;}
	
	car_scatter_graphID=null;
	car_scatter_graphID = echarts.init(document.getElementById('car_scatterID'));
	var datas = [];
	var datalistHtml='';
	var total=carDataArray.length;
	for (var i=0; i<total; i++) {
		//ul-html
		datalistHtml+='<li><h4>'+carDataArray[i].name+'</h4><p>'+carDataArray[i].value+'</p></li>'
		var item = carDataArray[i];
		var itemToStyle = carDataList[i];
		datas.push({
			name: item.name+'\n'+item.value,
			value: itemToStyle.offset,
			symbolSize: itemToStyle.symbolSize,
			label: {
				normal: {
					textStyle: {
						fontSize: 11
					}
				}
			},
			itemStyle: {
				normal: {
					color: itemToStyle.color,
					opacity: itemToStyle.opacity
				}
			},
		})
	}
	
	//set-html
	var clh=$(".mcond_ctrepd").height();
	var lh=(clh+5)/total;
	if(lh<20){ lh=20; }else if(lh>60){ lh=60; }
	$(".cartyped ul").html("");
	$(".cartyped ul").html(datalistHtml);
	$(".cartyped li").css("line-height",lh+"px");
	
	var option = {
		grid: {
			show: false,
			top: 20,
			bottom: 20,
			left: 20,
			right: 20
		},
		xAxis: [{
			gridIndex: 0,
			type: 'value',
			show: false,
			min: 0,
			max: 100,
			nameLocation: 'middle',
			nameGap: 5
		}],
		yAxis: [{
			gridIndex: 0,
			min: 0,
			show: false,
			max: 100,
			nameLocation: 'middle',
			nameGap: 30
		}],
		series: [{
			type: 'scatter',
			symbol: 'circle',
			symbolSize: 120,
			label: {
				normal: {
					show: true,
					formatter: '{b}',
					color: '#fff',
					textStyle: {
						fontSize: '20'
					}
				},
			},
			itemStyle: {
				normal: {
					color: '#00acea'
				}
			},
			data: datas
		}]
	};
	
	car_scatter_graphID.setOption(option);
}
function showCharts_Car_scatter_re(){
	if(car_scatter_graphID!=null){
		car_scatter_graphID.resize();
	}
}