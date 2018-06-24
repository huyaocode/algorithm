
var str1 = "bdcaba";
var str2 = "abcbdab";

var ans = LCS(str1, str2);

console.log('ans: ', ans)

function createTestStr(num,range) {
    range = range || 200;
    var str = "";
    for (var j = 0; j < num; j++) {
        var i = Math.random() * range;
        // 接受一个指定的 Unicode 值，然后返回一个字符  
        str += String.fromCharCode(i);
    }
    return str;
}

var xAxis = [];
var ySeries = [];


for (var strLen = 100; strLen <= 10000; strLen += 100) {
    var start = new Date();
    var str1 = createTestStr(strLen),
         str2 = createTestStr(strLen);
    console.log(str1,str2)
    var commonS = LCS(str1, str2);
    console.log(commonS)
    var end = new Date();
    xAxis.push(strLen);
    ySeries.push(end - start);
}
console.log(xAxis,ySeries)
draw("container", xAxis, ySeries);