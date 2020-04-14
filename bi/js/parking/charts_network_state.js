//联网状态
var network_punitVal=0.9;
var network_deviceVal=0.8;
var network_channelVal=1;
var network_state_graphID1=null;
var network_state_graphID2=null;
var network_state_graphID3=null;

//重新渲染参数可不传入
function showCharts_Network_state(punitVal, deviceVal, channelVal){
	if(punitVal!=null){
		network_punitVal=punitVal;	
	}
	if(deviceVal!=null){
		network_deviceVal=deviceVal;	
	}
	if(channelVal!=null){
		network_channelVal=channelVal;	
	}
	showCharts_Network_state1(changeDataVal(network_punitVal));
	showCharts_Network_state2(changeDataVal(network_deviceVal));
	showCharts_Network_state3(changeDataVal(network_channelVal));
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
}
function changeDataVal(val){
	var num=val/5;
	var temp=val;
	var dataVal=new Array();
	dataVal[0]=temp;
	temp=temp-num;
	dataVal[1]=temp;
	temp=temp-num;
	dataVal[2]=temp;
	temp=temp-num;
	dataVal[3]=temp;
	temp=temp-num;
	dataVal[4]=temp;
	return dataVal;
}

//项目
function showCharts_Network_state1(dataValArray){
	network_state_graphID1=null;
	network_state_graphID1 = echarts.init(document.getElementById('network_stateID1'));
	var option = {
		series: [{
			type: 'liquidFill',
			data: dataValArray,
			radius: '95%',
			center: ['50%', '50%'],
			// 水球颜色
			color: ['#48CC85', '#3FB375', '#369964', '#2D8053'],
			// outline  外边
			outline: {
				// show: false
				borderDistance: 4,
				itemStyle: {
					borderWidth: 2,
					borderColor: '#15CB65',
				},
			},
			label: {
				normal: {
					textStyle: {
						color: '#15CB65',
						insideColor: 'white',
						fontSize: 22
					}
				}
			},
			// 内图 背景色 边
			backgroundStyle: {
				color: 'rgba(4,24,74,0.1)',
			}
		}]
	};
	network_state_graphID1.setOption(option);
}

//设备
function showCharts_Network_state2(dataValArray){
	network_state_graphID2=null;
	network_state_graphID2 = echarts.init(document.getElementById('network_stateID2'));
	var option = {
		series: [{
			type: 'liquidFill',
			data: dataValArray,
			radius: '95%',
			center: ['50%', '50%'],
			// 水球颜色
			color: ['#E600B7', '#CC00A2', '#B3008E', '#99007A'],
			// outline  外边
			outline: {
				// show: false
				borderDistance: 4,
				itemStyle: {
					borderWidth: 2,
					borderColor: '#FF00CC',
				},
			},
			label: {
				normal: {
					textStyle: {
						color: '#FF00CC',
						insideColor: 'white',
						fontSize: 22
					}
				}
			},
			// 内图 背景色 边
			backgroundStyle: {
				color: 'rgba(4,24,74,0.1)',
			}
		}]
	};
	network_state_graphID2.setOption(option);
}

//通道
function showCharts_Network_state3(dataValArray){
	network_state_graphID3=null;
	network_state_graphID3 = echarts.init(document.getElementById('network_stateID3'));
	var option = {
		series: [{
			type: 'liquidFill',
			data: dataValArray,
			radius: '95%',
			center: ['50%', '50%'],
			// 水球颜色
			color: ['#E6A700', '#CC9400', '#B38200', '#996F00'],
			// outline  外边
			outline: {
				// show: false
				borderDistance: 4,
				itemStyle: {
					borderWidth: 2,
					borderColor: '#FFBB03',
				},
			},
			label: {
				normal: {
					textStyle: {
						color: '#FFBB03',
						insideColor: 'white',
						fontSize: 22
					}
				}
			},
			// 内图 背景色 边
			backgroundStyle: {
				color: 'rgba(4,24,74,0.1)',
			}
		}]
	};
	network_state_graphID3.setOption(option);
}