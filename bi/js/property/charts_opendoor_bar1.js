//门禁人流量 Top5
var opendoorBarPnameArray = ["昆明.同德", "金地格林小", "威远占道停", "富联华商贸", "茶光村"];
var opendoorBarMoneyDataArray = [2105, 1199, 1927, 1503, 1073];
var opendoor_bar_graphID = null;

//重新渲染参数可不传入
function showCharts_OpenDoor_bar(dateArray, moneyDataArray, unitTag) {
	if (dateArray != null) {
		opendoorBarPnameArray = dateArray;
	}
	if (moneyDataArray != null) {
		opendoorBarMoneyDataArray = moneyDataArray;
	}

	if (opendoorBarPnameArray == null || opendoorBarMoneyDataArray == null) {
		return;
	}
	if (unitTag == null) {
		unitTag = "次";
	}

	opendoor_bar_graphID = null;
	opendoor_bar_graphID = echarts.init(document.getElementById('opendoor_barID'));
	var option = {
		grid: {
			left: '11%', //9%
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
				return params.name + '<br>' + params.seriesName + '：' + params.value + " " + unitTag;
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
					color: '#16296b',
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#16296b ',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#3978f0',
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
						color: '#16296b',
					}
				},
				axisLabel: {
					inside: false,
					textStyle: {
						color: '#3978f0',
						fontWeight: 'normal',
						fontSize: '12',
					},
					// formatter:function(val){
					//     return val.split("").join("\n")
					// },
				},
				data: opendoorBarPnameArray
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
				data: opendoorBarPnameArray
			},

		],
		series: [{
				name: '人流量',
				type: 'bar',
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#2297F1'
						}, {
							offset: 1,
							color: '#9B28B1'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
				zlevel: 2,
				barWidth: '15%',
				data: opendoorBarMoneyDataArray
			}

		]
	};

	opendoor_bar_graphID.setOption(option);
}

function showCharts_OpenDoor_bar_re() {
	if (opendoor_bar_graphID != null) {
		opendoor_bar_graphID.resize();
	}
}
