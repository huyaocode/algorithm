/**
 * 用于绘制表格
 * 我直接丢进来的，小小封装
 * @param {*} id 
 * @param {*} legendData 
 * @param {*} seriesData 
 */
function draw(id, legendData, seriesData) {

    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '字符串匹配'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legendData
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisArr
        },
        yAxis: {
            type: 'value'
        },
        series: seriesData
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}