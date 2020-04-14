//map
var mapDataArray = [{
		name: '海门',
		value: 9,
		point: [121.15, 31.89, 20]
	},
	{
		name: '鄂尔多斯',
		value: 12,
		point: [109.781327, 39.608266, 17]
	},
	{
		name: '招远',
		value: 12,
		point: [120.38, 37.35, 14]
	},
	{
		name: '舟山',
		value: 12,
		point: [122.207216, 29.985295, 11]
	},
	{
		name: '齐齐哈尔',
		value: 14,
		point: [123.97, 47.33, 10]
	},
	{
		name: '盐城',
		value: 15,
		point: [120.13, 33.38, 8]
	},
	{
		name: '赤峰',
		value: 16,
		point: [118.87, 42.28, 8]
	},
	{
		name: '青岛',
		value: 18,
		point: [120.33, 36.07, 8]
	},
	{
		name: '乳山',
		value: 18,
		point: [121.52, 36.89, 8]
	},
	{
		name: '金昌',
		value: 19,
		point: [102.188043, 38.520089, 8]
	},
	{
		name: '泉州',
		value: 21,
		point: [118.58, 24.93, 8]
	},
	{
		name: '莱西',
		value: 21,
		point: [120.53, 36.86, 8]
	},
	{
		name: '日照',
		value: 21,
		point: [119.46, 35.42, 8]
	},
];
var mapTagTit = "空车位";
var mapLng = 104.114129;
var mapLat = 37.550339;
var mapZoom = 5; //5..8..11..13..
var map_graphID = null;

// 数据转换f
function convertData(data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		res.push({
			name: data[i].name,
			value: data[i].point
		});
	}
	return res;
}

function showCharts_Map(type, data, lng, lat, zoom) {
	if (type != null) {
		if (type == 2) {
			mapTagTit = "总收入";
		} else if (type == 3) {
			mapTagTit = "总车流";
		} else if (type == 5) {
			mapTagTit = "位置更新";
		} else {
			mapTagTit = "空车位";
		}
	}
	if (data != null) {
		mapDataArray = data;
	}
	if (lng != null) {
		mapLng = lng;
	}
	if (lat != null) {
		mapLat = lat;
	}
	if (zoom != null) {
		mapZoom = zoom;
	}

	map_graphID = null;
	map_graphID = echarts.init(document.getElementById('mapID'));
	var option = {
		tooltip: { // 浮框样式
			trigger: 'item',
			formatter: function(data) {
				//var dataValue = data.value.toString();
				//dataValue = dataValue.substring(dataValue.lastIndexOf(',') + 1, dataValue.length);
				return data.name + "<br>" + mapTagTit + '：' + data.value[3];
			}
		},
		bmap: { // 地图类型
			//map: 'china',
			//center: [114.059788,22.548248],
			center: [mapLng, mapLat],
			zoom: mapZoom,
			roam: true,
			label: {
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					areaColor: '#004881', // 地图上区域颜色
					borderColor: '#111' // 地图上边界线颜色
				},
				emphasis: {
					areaColor: '#004881'
				}
			},
			mapStyle: {
				styleJson: [{
						"featureType": "water",
						"elementType": "all",
						"stylers": {
							"color": "#044161"
						}
					},
					{
						"featureType": "land",
						"elementType": "all",
						"stylers": {
							"color": "#004981"
						}
					},
					{
						"featureType": "boundary",
						"elementType": "geometry",
						"stylers": {
							"color": "#064f85"
						}
					},
					{
						"featureType": "railway",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "highway",
						"elementType": "geometry",
						"stylers": {
							"color": "#004981"
						}
					},
					{
						"featureType": "highway",
						"elementType": "all",
						"stylers": {
							"color": "#005b96",
							"lightness": 1
						}
					},
					{
						"featureType": "highway",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "arterial",
						"elementType": "geometry",
						"stylers": {
							"color": "#004981"
						}
					},
					{
						"featureType": "arterial",
						"elementType": "all",
						"stylers": {
							"color": "#00508b"
						}
					},
					{
						"featureType": "green",
						"elementType": "all",
						"stylers": {
							"color": "#056197",
							"visibility": "on"
						}
					},
					{
						"featureType": "subway",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "manmade",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "local",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "arterial",
						"elementType": "labels",
						"stylers": {
							"color": "#056197",
							"visibility": "on"
						}
					},
					{
						"featureType": "boundary",
						"elementType": "geometry.fill",
						"stylers": {
							"color": "#029fd4"
						}
					},
					{
						"featureType": "building",
						"elementType": "all",
						"stylers": {
							"color": "#1a5787"
						}
					},
					{
						"featureType": "label",
						"elementType": "all",
						"stylers": {
							"visibility": "on",
							"color": "#13A2FA"
						}
					},
					{
						"featureType": "label",
						"elementType": "labels.text.stroke",
						"stylers": {
							"color": "#ffffff00"
						}
					}, {
						"featureType": "poi",
						"elementType": "all",
						"stylers": {
							"color": "#13a2faff"
						}
					}, {
						"featureType": "poi",
						"elementType": "labels.text.stroke",
						"stylers": {
							"color": "#ffffff00"
						}
					}, {
						"featureType": "poi",
						"elementType": "labels.icon",
						"stylers": {
							"visibility": "off"
						}
					}
				]
			}
			//mapStyle
		},
		series: [{
				name: mapTagTit,
				type: 'scatter',
				coordinateSystem: 'bmap',
				data: convertData(mapDataArray),
				symbolSize: function(val) {
					return val[2];
				},
				label: { // 点旁边的样式
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false
					},
					emphasis: {
						show: true
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
				coordinateSystem: 'bmap',
				data: convertData(mapDataArray.slice(0, 10)),
				symbolSize: function(val) {
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
	map_graphID.setOption(option);
}

function showCharts_Map_re() {
	if (map_graphID != null) {
		map_graphID.resize();
	}
}
