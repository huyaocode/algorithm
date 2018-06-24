/**
 * 用于绘制表格
 * 我直接丢进来的，小小封装
 * @param {*} id 
 */
function draw(id, xAxis, ySeries) {

    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        xAxis: {
            type: 'category',
            data: xAxis
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: ySeries,
            type: 'line'
        }]
    };
    
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}