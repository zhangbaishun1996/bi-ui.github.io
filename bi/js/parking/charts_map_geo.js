var mapDataArray=[];
var mapTagTit="空车位";
var mapLng=104.114129;
var mapLat=35.550339;
var mapZoom=1.2; //1.2..8..11..10..

// 数据转换f
function convertData(data){
	var res = [];
    for (var i = 0; i < data.length; i++) {
		res.push({
			name: data[i].name,
			value: data[i].point
		});
    }
    return res;
}
function showCharts_Map(type,data,lng,lat,zoom){
	if(type!=null){
		if(type==2){
			mapTagTit="总收入";
		}else if(type==3){
			mapTagTit="总车流";
		}else{
			mapTagTit="空车位";
		}
	}
	if(data!=null){
		mapDataArray=data;
	}
	if(lng!=null){
		mapLng=lng;	
	}
	if(lat!=null){
		mapLat=lat;	
	}
	if(zoom!=null){
		mapZoom=zoom;	
	}
	
	var graphID = echarts.init(document.getElementById('mapID'));
	var option = {
	    tooltip : { // 浮框样式
	        trigger: 'item',
	        formatter: function (data) {
	        	//var dataValue = data.value.toString();
                //dataValue = dataValue.substring(dataValue.lastIndexOf(',') + 1, dataValue.length);
               	return data.name+"<br>"+mapTagTit+'：'+data.value[3];
	        }
	    },
		geo: { // 地图类型
	        map: 'china',
			center: [mapLng, mapLat],
			zoom: mapZoom,
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        roam: true,
	        itemStyle: {
	            normal: {
	                areaColor: '#004881', // 地图上区域颜色
	                borderColor: '#111'  // 地图上边界线颜色
	            },
	            emphasis: {
	                areaColor: '#004881'
	            }
	        }
	    },
	    series : [
	        {
	            name: mapTagTit,
	            type: 'scatter',
	            coordinateSystem: 'geo',
	            data: convertData(mapDataArray),
	            symbolSize: function (val) {
					return val[2];
	            },
	            label: { // 点旁边的样式
	                normal: {
						formatter: '{b}',
	                    position: 'right',
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle: { // 点的样式
	                normal: {
	                    color: '#ddb926'
	                },
	            }
	        },
	        
	        // TOP5需要判断数组的长度，如果长度不够五位，则不用显示
	        {
	        	name: 'Top 5',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            data: convertData(mapDataArray.slice(0,5)),
	            symbolSize: function (val) {
					return val[2];
	            },
	            showEffectOn: 'render',
	            rippleEffect: {
	                brushType: 'stroke'
	            },
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'top',
	                    show: true
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#f4e925',
	                    shadowBlur: 10,
	                    shadowColor: '#333'
	                }
	            },
	            zlevel: 1
	        }
	    ]
	};
	
	graphID.setOption(option);
	graphID.resize();
}