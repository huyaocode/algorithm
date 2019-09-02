/**
 * 字符串匹配辅助类
 * 
 * 生成随机二进制文本
 * 获取自然语言文本
 * 判断是否匹配成功
 */
function StrMatchHelper(){

}

/**
 * 生成随机二进制文本
 * @param {文本规模长度} length 
 */
StrMatchHelper.prototype.gennerateRandom01Array = function(length){
    var str = "";
    for(let i = 0; i < length; i++){
        str += Math.floor(Math.random() * 2 );
    }
    return str;
}

/**
 * 是否正确被匹配
 * @param {*} patten 
 * @param {*} pos 
 * @param {*} text 
 */
StrMatchHelper.prototype.isMatch = function(patten, pos, text){
    var str = '';
    if(pos != -1){
        str = text.substring(pos, pos + patten.length);
        return str == patten;
    } else {
        return !text.match(patten)
    }
}

/**
 * 速度测试
 * @param {*} matchObj 匹配函数
 * @param {*} patten qc
 * @param {*} pos 
 * @param {*} text 
 * 
 * @return {pos: time};
 */
StrMatchHelper.prototype.speedTest = function(matchObj, patten, text){
    var startDate = new Date();
    var start = startDate.getTime();

    var pos = matchObj.match(patten, text);

    var endDate = new Date();
    var end = endDate.getTime();

    var time = end - start;

    // if(!this.isMatch(patten, pos, text)){
    //      console.log("匹配出错");
    // }
    var pos_time = {};
    pos_time.pos = pos;
    pos_time.time = time;
    pos_time.approximatePos = Math.round((pos /100))*100;  //将位置按100来分区，因为数据太离散了
    
    return pos_time;
}

// module.exports = StrMatchHelper;