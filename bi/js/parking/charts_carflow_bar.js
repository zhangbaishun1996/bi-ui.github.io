//车场车流量Top5
var carflowBarPnameArray=["昆明.同德", "金地格林小", "威远占道停", "富联华商贸", "茶光村"];
var carflowBarInDataArray=[2105, 1199, 1927, 1503, 1073];
var carflowBarOutDataArray=[1432, 1738, 901, 1300, 1204];
var carflow_bar_graphID=null;

//重新渲染参数可不传入
function showCharts_Carflow_bar(pnameArray, inDataArray, outDataArray){
	if(pnameArray!=null){
		carflowBarPnameArray=pnameArray;	
	}
	if(inDataArray!=null){
		carflowBarInDataArray=inDataArray;	
	}
	if(outDataArray!=null){
		carflowBarOutDataArray=outDataArray;	
	}
	if(carflowBarPnameArray==null || carflowBarInDataArray==null || carflowBarOutDataArray==null){return;}
	
	carflow_bar_graphID=null;
	carflow_bar_graphID = echarts.init(document.getElementById('carflow_barID'));
	var option = {
		grid: {
			left: '11%',
			right: '5%',
			bottom: '15%',
			top: '5%',
			containLabel: false
		},
		tooltip: {
			show: "true",
			trigger: 'item',
			backgroundColor: 'rgba(0,0,0,0.7)', // 背景
			padding: [8, 10], //内边距
			extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
			formatter: function(params) {
				return params.name+'<br>'+params.seriesName+'：'+params.value;
			}
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#363e83',
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#363e83 ',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#BCAAFA',
					fontWeight: 'normal',
					fontSize: '12',
				},
			},
		},
		xAxis: [{
				type: 'category',
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#363e83',
					}
				},
				axisLabel: {
					inside: false,
					textStyle: {
						color: '#BCAAFA',
						fontWeight: 'normal',
						fontSize: '12',
					},
					// formatter:function(val){
					//     return val.split("").join("\n")
					// },
				},
				data: carflowBarPnameArray
			}, {
				type: 'category',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitArea: {
					show: false
				},
				splitLine: {
					show: false
				},
				data: carflowBarPnameArray
			},
	
		],
		series: [{
				name: '入场车流',
				type: 'bar',
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#96d668'
						}, {
							offset: 1,
							color: '#01babc'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
				zlevel: 2,
				barWidth: '10',
				data: carflowBarInDataArray,
				barCategoryGap:0
			}, {
				name: '出场车流',
				type: 'bar',
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#f7734e'
						}, {
							offset: 1,
							color: '#e12945'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
				zlevel: 2,
				barWidth: '10',
				data: carflowBarOutDataArray,
				barCategoryGap:0
			}
	
		]
	};
	
	carflow_bar_graphID.setOption(option);
}
function showCharts_Carflow_bar_re(){
	if(carflow_bar_graphID!=null){
		carflow_bar_graphID.resize();	
	}
}