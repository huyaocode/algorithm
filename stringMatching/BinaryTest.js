// const StrMatchHelper = require('./StrMatchHelper');
// const Horspool = require('./Horspool');
// const BoyerMoore = require('./BoyerMoore');

var helper = new StrMatchHelper();  //字符串匹配帮助类
var horspool = new Horspool();      //Horspool算法
var boyerMoore = new BoyerMoore();  //实现方式参照《算法》
var boyerMoore2 = new BoyerMoore2();//改进查找表后的BoyerMoore算法
// var violenceSerch = new ViolenceSerch();    //暴力查找

//Map 用来标记那个区间段是否有数据， 因为字符串匹配结果是离散的，无法强行让字符串刚好就在想匹配的地方匹配，
//所有我做了一个标记，如果这个区间段有数据就置为1， 当随机的位置填满了1000个位置的时候就方便画图了
var horsMap = [];
var horsCount = 1000;
for(let i = 0; i < 1000; i++){
    horsMap[i] = 0;
}

//用于存储每一个匹配的耗时和位置以及区间位置
var horsMatchArr = [],
    boyeMatchArr = [],
    boye2MatchArr = [];
    //var violenceMatchArr = [];

var waste = -1000;  //为了制表而额外运行的次数

/**
 * 当随机匹配的01串的位置分布到以100为区间单位的所有长度上的时候停止
 * 因为匹配到的位置都是离散的，所以要把100000个数放到同一横坐标很难
 * 我将匹配到的位置划分为区间，比如在2325处匹配到字符串，在百位四舍五入为2300这个数字，
 * 然后在map上将23这个值置为1，表示这个区间已经有数，再让计数器减一，表示已经有一个区间有了数。
 * 当计数器从1000减为0的时候，说明从0到100000上每隔100位都有被匹配中的位置，这个时候再用Echart生产表格
 */
while(horsCount > 0){

    //生成随机01串
    var text = helper.gennerateRandom01Array(100000);
    var pattern = helper.gennerateRandom01Array(15);

    var horspoolPT =  helper.speedTest(horspool, pattern, text);
    if(horspoolPT.pos != -1 && horsMap[horspoolPT.approximatePos / 100] == 0){
        horsMatchArr.push(horspoolPT);
        horsCount--;
        horsMap[horspoolPT.approximatePos / 100] = 1;
        console.log('horspool    ', horspoolPT.pos);
    } else{
        waste++;
        continue;
    }

    var boyerMoorePT = helper.speedTest(boyerMoore, pattern, text);
    if(boyerMoorePT.pos != -1){
        boyeMatchArr.push(boyerMoorePT);
    }
    console.log('boyerMoore  ', boyerMoorePT.pos)

    var boyerMoore2PT = helper.speedTest(boyerMoore2, pattern, text);
     if(boyerMoore2PT.pos != -1){
        boye2MatchArr.push(boyerMoore2PT);
    }
    console.log('boyerMoore2 ', boyerMoore2PT.pos)

    // var violenceSerchPT = helper.speedTest(violenceSerch, pattern, text);
    // if(violenceSerchPT.pos != -1){
    //     violenceMatchArr.push(violenceSerchPT);
    // }
    // console.log('violenceSerch ', violenceSerchPT.pos)
   
}
//对象数组按照某属性排序
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
//对产生的数据按照匹配（以100取整）到的位置排序
horsMatchArr.sort(compare('approximatePos'));
boyeMatchArr.sort(compare('approximatePos'));
boye2MatchArr.sort(compare('approximatePos'));
// violenceMatchArr.sort(compare('approximatePos'));

//生成Echart使用的数据
var xAxisArr = [];
for(let i = 0; i < 1000; i++){
    xAxisArr[i] = i * 100; 
}
var horsYAxisarr = [],
    boyeYAxisarr = [],
    boye2YAxisarr = [];
    //var violenceYAxisarr = [];

for(let i = 0; i < 1000; i++){
    horsYAxisarr[i] = horsMatchArr[i].time;
    boyeYAxisarr[i] = boyeMatchArr[i].time;
    boye2YAxisarr[i] = boye2MatchArr[i].time;
    // violenceYAxisarr[i] = violenceMatchArr[i].time;
}


//打印生成的“位置-耗时”表
console.log(horsMatchArr)
console.log(boyeMatchArr)
console.log(boye2MatchArr)
console.log(violenceMatchArr)

console.log('waste time', waste);


var legend = ['BoyerMoore2','Horspool','BoyerMoore']
var series = [
    // {
    //     name:'ViolenceSerch',
    //     type:'line',
    //     stack: '总量',
    //     data: violenceYAxisarr,
    //     // color: '#F00'
    // },
    {
        name:'BoyerMoore2',
        type:'line',
        stack: '总量',
        data: boye2YAxisarr,
        // color: '#F00'
    },
    {
        name:'Horspool',
        type:'line',
        stack: '总量',
        data: horsYAxisarr,
        // color: '#00F'
    },
    {
        name:'BoyerMoore',
        type:'line',
        stack: '总量',
        data: boyeYAxisarr,
        // colorL: '#0F0'
    }
]

draw("container", legend, series, xAxisArr);

