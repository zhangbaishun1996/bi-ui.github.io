//工单服务分析
var jobwPieDataArray1=[{"name":"公共报障","value":200},{"name":"绿化清洁","value":100},{"name":"小区安全","value":100},{"name":"任务下达","value":100}];
var jobwPieDataArray2=[{"name":"投诉建议","value":200},{"name":"室内维修","value":100},{"name":"公共报修","value":100},{"name":"安保服务","value":100},{"name":"清洁绿化","value":100},{"name":"墙体报修","value":100},{"name":"其他","value":100}];
var jobw_pie_graphID=null;

//重新渲染参数可不传入
function showCharts_Jobw_Pie(pieDataArray1, pieDataArray2){
	if(pieDataArray1!=null){
		jobwPieDataArray1=pieDataArray1;	
	}
	if(pieDataArray2!=null){
		jobwPieDataArray2=pieDataArray2;	
	}
	if(jobwPieDataArray1==null && jobwPieDataArray2==null){ return; }
	jobw_pie_graphID=null;
	jobw_pie_graphID = echarts.init(document.getElementById('jobw_pieID'));
	
	var option = {
		// color:['#2297F1','#9B28B1','#FF8352','#FDED3E','#EF442E','#00FFFF','#7CFC00','#FF1493','#ed1941','#00FF7F','#7FFF00'],
		tooltip: {
			trigger: 'item',
			formatter: "{a}：{b}<br/>共 {c} 次（占{d}%）"
		},
		series: [
			{
				name:'内部工单',
				type:'pie',
				selectedMode: 'single',
				radius: [0, '55%'],
				center: ['50%', '50%'],
				label: {
					normal: {
						position: 'inner'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:jobwPieDataArray1,
				color:['#9d3dff','#FF6363','#ffa800','#0cbe2a'],
			},
			{
				name:'业主工单',
				type:'pie',
				radius : ['65%', '85%'],
				center: ['50%', '50%'],
				startAngle:180, //起始角
				data:jobwPieDataArray2,
				// color:['#2297F1','#304ffe','#e91e63','#FDED3E','#EF442E','#56C187','#E271DE'],
			}
		]
	};
	jobw_pie_graphID.setOption(option);
}
function showCharts_Jobw_Pie_re(){
	if(jobw_pie_graphID!=null){
		jobw_pie_graphID.resize();
	}
}