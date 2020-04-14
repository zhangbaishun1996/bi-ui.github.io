//停车时长分析
var carflowPieTitleArray=["1小时内", "1-6小时", "7-12小时", "12-24小时", "24小时以上"];
var carflowPieDataArray=[{"name":"1小时内","value":4726},{"name":"1-6小时","value":3822},{"name":"7-12小时","value":683},{"name":"12-24小时","value":1076},{"name":"24小时以上","value":670}];
var carflow_pie_graphID=null;

//重新渲染参数可不传入
function showCharts_Carflow_Pie(pieTitleArray, pieDataArray){
	if(pieTitleArray!=null){
		carflowPieTitleArray=pieTitleArray;	
	}
	if(pieDataArray!=null){
		carflowPieDataArray=pieDataArray;	
	}
	if(carflowPieTitleArray==null || carflowPieDataArray==null){ return; }
	carflow_pie_graphID=null;
	carflow_pie_graphID = echarts.init(document.getElementById('carflow_pieID'));
	var option = {
		color:['#2297F1','#9B28B1','#56C187','#FDED3E','#EF442E'],
		tooltip: {
			trigger: 'item',
			formatter: "{a}：在{b}<br/>共 {c} 车次（占{d}%）"
		},
		series : [
			{
				name: '停车时长',
				type: 'pie',
				radius : '80%',
				center: ['50%', '60%'],
				data:carflowPieDataArray,
				itemStyle: {
					emphasis: {
						shadowBlur: 5,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	carflow_pie_graphID.setOption(option);
}
function showCharts_Carflow_Pie_re(){
	if(carflow_pie_graphID!=null){
		carflow_pie_graphID.resize();
	}
}
