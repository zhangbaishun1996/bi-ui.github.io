//联网状态
var network_Val1=0.55;
var network_Val2=0.56;
var network_Val3=0.57;
var network_Val4=0.58;
var network_state_graphID1=null;
var network_state_graphID2=null;
var network_state_graphID3=null;
var network_state_graphID4=null;

//重新渲染参数可不传入
function showCharts_Network_state(val1, val2, val3, val4){
	if(val1!=null){
		network_Val1=val1;	
	}
	if(val2!=null){
		network_Val2=val2;	
	}
	if(val3!=null){
		network_Val3=val3;
	}
	if(val4!=null){
		network_Val4=val4;
	}
	showCharts_Network_state1(network_Val1);
	showCharts_Network_state2(network_Val2);
	showCharts_Network_state3(network_Val3);
	showCharts_Network_state4(network_Val4);
}
function showCharts_Network_state_re(){
	if(network_state_graphID1!=null){
		network_state_graphID1.resize();	
	}
	if(network_state_graphID2!=null){
		network_state_graphID2.resize();	
	}
	if(network_state_graphID3!=null){
		network_state_graphID3.resize();	
	}
	if(network_state_graphID4!=null){
		network_state_graphID4.resize();	
	}
}

//项目
function showCharts_Network_state1(dataValArray) {
	network_state_graphID1 = null;
	network_state_graphID1 = echarts.init(document.getElementById('network_stateID1'));
	var option = {
	series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: false,
			radius:['79%','85%'],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					},
				}
			},
			hoverAnimation: false,

			data: [{
					value:  Math.round((dataValArray*100)) ,
					itemStyle: {
						normal: {
							color: '#29D202',
							shadowColor: '#29D202',
							shadowBlur: 4
						}
					}
				}, {
					value: 100- Math.round((dataValArray*100)) ,
					name: 'invisible',
					itemStyle: {
						normal: {
							color: '#253962', //未完成的圆环的颜色
							label: {
								show: false
							},
							labelLine: {
								show: false
							}
						},
						emphasis: {
							color: '#253962' //未完成的圆环的颜色
						}
					}
				}

			]
		}, {
			name: 'Line 2',
			type: 'pie',
			animation: false,
			clockWise: false,
			radius: ['93%', '95%'],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					},
					color: '#253962'
				}
			},
			hoverAnimation: false,
			tooltip: {
				show: false
			},
			data: [{
					value: 100,
					label: {
						normal: {
							formatter:  Math.round((dataValArray*100)) +'%',
							position: 'center',
							show: true,
							textStyle: {
								fontSize: '16',
								fontWeight: 'normal',
								color: '#fff'
							}
						}
					},
				},

			]
		},
	]
};	
network_state_graphID1.setOption(option);
}

//门禁设备
function showCharts_Network_state2(dataValArray) {
	network_state_graphID2 = null;
	network_state_graphID2 = echarts.init(document.getElementById('network_stateID2'));
		var option = {
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				radius:['79%','85%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
					}
				},
				hoverAnimation: false,
	
				data: [{
						value:  Math.round((dataValArray*100)) ,
						itemStyle: {
							normal: {
								color: '#FF00CC',
								shadowColor: '#FF00CC',
								shadowBlur: 4
							}
						}
					}, {
						value: 100- Math.round((dataValArray*100)) ,
						name: 'invisible',
						itemStyle: {
							normal: {
								color: '#253962', //未完成的圆环的颜色
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							},
							emphasis: {
								color: '#253962' //未完成的圆环的颜色
							}
						}
					}
	
				]
			}, {
				name: 'Line 2',
				type: 'pie',
				animation: false,
				clockWise: false,
				radius: ['93%', '95%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: '#253962'
					}
				},
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				data: [{
						value: 100,
						label: {
							normal: {
								formatter:   Math.round((dataValArray*100))  +'%',
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'normal',
									color: '#fff'
								}
							}
						},
					},
	
				]
			},
		]
	};	
	network_state_graphID2.setOption(option);
}

//停车设备
function showCharts_Network_state3(dataValArray) {
	network_state_graphID3 = null;
	network_state_graphID3 = echarts.init(document.getElementById('network_stateID3'));
		var option = {
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				radius:['79%','85%'],	
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
					}
				},
				hoverAnimation: false,
	
				data: [{
						value:  Math.round((dataValArray*100)) ,
						itemStyle: {
							normal: {
								color: '#FFBB03',
								shadowColor: '#FFBB03',
								shadowBlur: 4
							}
						}
					}, {
						value: 100- Math.round((dataValArray*100)) ,
						name: 'invisible',
						itemStyle: {
							normal: {
								color: '#253962', //未完成的圆环的颜色
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							},
							emphasis: {
								color: '#253962' //未完成的圆环的颜色
							}
						}
					}
	
				]
			}, {
				name: 'Line 2',
				type: 'pie',
				animation: false,
				clockWise: false,
				radius: ['93%', '95%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: '#253962'
					}
				},
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				data: [{
						value: 100,
						label: {
							normal: {
								formatter:   Math.round((dataValArray*100))  +'%',
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'normal',
									color: '#fff'
								}
							}
						},
					},
	
				]
			},
		]
	};	
	network_state_graphID3.setOption(option);
}


//停车设备
function showCharts_Network_state4(dataValArray) {
	network_state_graphID4 = null;
	network_state_graphID4 = echarts.init(document.getElementById('network_stateID4'));
		var option = {
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				radius:['79%','85%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
					}
				},
				hoverAnimation: false,
	
				data: [{
						value:  Math.round((dataValArray*100)) ,
						itemStyle: {
							normal: {
								color: '#3dd4de',
								shadowColor: '#3dd4de',
								shadowBlur: 4
							}
						}
					}, {
						value: 100- Math.round((dataValArray*100)) ,
						name: 'invisible',
						itemStyle: {
							normal: {
								color: '#253962', //未完成的圆环的颜色
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							},
							emphasis: {
								color: '#253962' //未完成的圆环的颜色
							}
						}
					}
	
				]
			}, {
				name: 'Line 2',
				type: 'pie',
				animation: false,
				clockWise: false,
				radius: ['93%', '95%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: '#253962'
					}
				},
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				data: [{
						value: 100,
						label: {
							normal: {
								formatter:  Math.round((dataValArray*100))  +'%',
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'normal',
									color: '#fff'
								}
							}
						},
					},
	
				]
			},
		]
	};	
	network_state_graphID4.setOption(option);
}
