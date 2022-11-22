import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['점포비중', '매출비중']
  },
  series: [
    {
      data: [120, 200],
      type: 'bar',
      showBackground: true,
      background: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option && myChart.setOption(option);
