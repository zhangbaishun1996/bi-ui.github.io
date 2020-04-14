//开门分析统计
var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAMAAAAd31JXAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAuOoQzMFW35egLCD3e0StB2aNN8waMgIAAAElSURBVDjLxZXdcoQgDEYj4U8MiJj3f9aidNXtOiVedHruHA5O5oMEgDsimQVBhtOaaUwy18PqFbs4iVyAbAfmwWaJW5miY1WCyK2kkVgHmQuAC3mpWz/HG6e4Bglc7fyOyJ3lNTxxzQM3THJXnFk4r2HPRWK1dFwMjcTRsF4Pt6QPFxW/sGAde/x2jco/3ZVjso0aQi60FbK5qe79cN9bJQys814vxZ4LMPO6uchddzU87P+NHG7qtWe96FnZVu8l1CMHd+SwwKKovHLAm3zz1Fi5aDZBdG65zgMrvQ+TxSf99sRFfNAX49/02z+5frigSO3wm5vIbYseRnNFNy4zahvBtK+Nv58FLqY72pub5jqmI/bfgFBUd/yfb9acMgiIpG/ewi8A0xEjLRg2ggAAAABJRU5ErkJggg==";

var opendoorPieDataArray=[{"name":"人脸开门","value":200},{"name":"手机开门","value":100},{"name":"刷卡开门","value":100},{"name":"密码开门","value":100},{"name":"呼叫开门","value":100},{"name":"按钮开门","value":100},{"name":"其他","value":100}];
var opendoor_pie_graphID=null;

//重新渲染参数可不传入
function showCharts_OpenDoor_Pie(pieDataArray){
	if(pieDataArray!=null){
		opendoorPieDataArray=pieDataArray;	
	}
	if(opendoorPieDataArray==null){ return; }
	opendoor_pie_graphID=null;
	opendoor_pie_graphID = echarts.init(document.getElementById('opendoor_pieID'));
	
	var option = {
		color:['#2297F1','#9B28B1','#FF8352','#FDED3E','#EF442E','#56C187','#E271DE'],
		tooltip: {
			trigger: 'item',
			formatter: "{a}：{b}<br/>共 {c} 次（占{d}%）"
		},
		graphic: {
			elements: [{
				type: 'image',
				style: {
					image: giftImageUrl,
					width: 32,
					height: 32
				},
				left: 'center',
				top: 'center'
			}]
		},
		series : [
			{
				name: '开门方式',
				type: 'pie',
				radius : ['60%', '80%'],
				center: ['50%', '50%'],
				data:opendoorPieDataArray,
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
	opendoor_pie_graphID.setOption(option);
}
function showCharts_OpenDoor_Pie_re(){
	if(opendoor_pie_graphID!=null){
		opendoor_pie_graphID.resize();
	}
}