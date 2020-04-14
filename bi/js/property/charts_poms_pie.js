//物业收入图表
var pomsPieData = 45.45;//百分比
var poms_pie_graphID = null;

//重新渲染参数可不传入
function showCharts_Poms_pie(circleData){
	if(circleData!=null){ pomsPieData=circleData; }
	poms_pie_graphID = null;
	poms_pie_graphID = echarts.init(document.getElementById('poms_pieID'));
	
	var option = {
		title:{
			text:'收缴率',
			x:'center',
			y:'70%',
			textStyle:{
				fontSize:14,
				color:'#fff',
				fontWeight: 'normal',
			},
			position: 'center',
		},
		series: [{
				type: 'pie',
				radius: ['60%', '80%'],
				startAngle: 225,
				color: [{
					type: 'linear',
					x: 0,
					y: 1,
					x2: 1,
					y2: 0,
					colorStops: [{
							offset: 0,
							color: 'rgba(0,0,0,0)'
						}, {
							offset: .6,
							color: 'rgba(249,27,225,.8)'
						},
						{
							offset: 1,
							color: 'rgba(249,27,225,1)'
						}
					],
				}, 'transparent'],
				hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
				legendHoverLink: false, //是否启用图例 hover 时的联动高亮。
				label: {
					normal: {
						position: 'center',
						show: false,
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					value: 75 * pomsPieData / 100,
					name: 1,
					  itemStyle: {
                         normal: {
                    shadowColor: 'rgba(249,27,225,1)',
                    shadowBlur: 4
                }
            }
				}, {
					value: 100 - (75 * pomsPieData / 100),
					name: 2
				}]
			},
			{
				type: 'pie',
				radius: ['60%', '80%'],
				avoidLabelOverlap: false,
				startAngle: 315,
				color: [{
					type: 'linear',
					x: 1,
					y: 1,
					x2: 0,
					y2: 0,
					colorStops: [{
							offset: 0,
							color: 'rgba(0,0,0,0)'
						}, {
							offset: .5,
							color: 'rgba(0,242,253,.8)'
						},
						{
							offset: 1,
							color: 'rgba(0,242,253,1)'
						}
					],
					globalCoord: false // 缺省为 false
				}, 'none'],
				hoverAnimation: false,
				legendHoverLink: false,
				clockwise: false, //饼图的扇区是否是顺时针排布。
				itemStyle: {
					normal: {
						borderColor: "transparent",
						borderWidth: "0"
					},
					emphasis: {
						borderColor: "transparent",
						borderWidth: "0"
					}
				},
				z: 10,
				label: {
					normal: {
						show: false,
						position: 'center'
					},

				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					value: (100 - pomsPieData) * 270 / 360,
					name: 3,
					label: {
						normal: {
							formatter: pomsPieData + '%',
							position: 'center',
							show: true,
							textStyle: {
								fontSize: '18',
								fontWeight: 'normal',
								color: '#fff'
							}
						}
					},
						 itemStyle: {
                         normal: {
                    shadowColor: 'rgba(3,101,249,1)',
                    shadowBlur: 4
                }
            }
				}, {
					value: 1,
					name: 4,
				}, {
					value: 100 - (100 - pomsPieData) * 280 / 360,
					name: 0,
				}]
			},
		]
	};
	poms_pie_graphID.setOption(option);
}

function showCharts_Poms_pie_re() {
	if (poms_pie_graphID != null) {
		poms_pie_graphID.resize();
	}
}
