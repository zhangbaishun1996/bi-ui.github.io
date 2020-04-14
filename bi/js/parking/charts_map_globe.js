//车场车流量Top5
function showCharts_Map_globe(){
	var graphID = echarts.init(document.getElementById('mapID'));
	var option = {
		backgroundColor: '#000',
		globe: {
			baseTexture: 'data-gl/asset/earth.jpg',
			heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg',
	
			displacementScale: 0,
	
			shading: 'lambert',
	
			environment: 'data-gl/asset/starfield.jpg',
	
			light: {
				ambient: {
					intensity: 1
				},
				main: {
					intensity: 0.5
				}
			},
	
			layers: [{
				type: 'blend',
				blendTo: 'emission',
				texture: 'data-gl/asset/night.jpg'
			}, {
				type: 'overlay',
				texture: 'data-gl/asset/clouds.png',
				shading: 'lambert',
				distance: 1
			}]
		},
		series: []
	};
	
	graphID.setOption(option);
	graphID.resize();
}