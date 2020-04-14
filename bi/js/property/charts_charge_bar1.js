//近半年物业费收入
var chargeBarPnameArray = ["18-11", "18-12", "19-01", "19-02", "19-03", "19-04"];
var chargeBarMoneyDataArray = ["93656.14", "92662.11", "80706.17", "99694.12", "94055.10", "96665.00"];
var charge_bar_graphID = null;

//重新渲染参数可不传入
function showCharts_Charge_bar(dateArray, moneyDataArray, unitTag) {
	if (dateArray != null) {
		chargeBarPnameArray = dateArray;
	}
	if (moneyDataArray != null) {
		chargeBarMoneyDataArray = moneyDataArray;
	}

	if (chargeBarPnameArray == null || chargeBarMoneyDataArray == null) {
		return;
	}
	if (unitTag == null) {
		unitTag = "元";
	}

	charge_bar_graphID = null;
	charge_bar_graphID = echarts.init(document.getElementById('charge_barID'));
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
					color: '#16296b',
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
				data: chargeBarPnameArray
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
				data: chargeBarPnameArray
			},

		],
		series: [{
				name: '总收入',
				type: 'bar',
				itemStyle: {
					normal: {
						show: true,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#08EBD7'
						}, {
							offset: 1,
							color: '#EE04BF'
						}]),
						barBorderRadius: 50,
						borderWidth: 0,
					}
				},
				zlevel: 2,
				barWidth: '20%',
				data: chargeBarMoneyDataArray
			}

		]
	};

	charge_bar_graphID.setOption(option);
}

function showCharts_Charge_bar_re() {
	if (charge_bar_graphID != null) {
		charge_bar_graphID.resize();
	}
}
