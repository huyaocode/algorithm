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
 * 拷贝一份字符串
 * @param {*} str 
 */
StrMatchHelper.prototype.copyStr = function(str){
    return str;
}

/**
 * 是否正确被匹配
 * @param {*} patten 
 * @param {*} pos 
 * @param {*} text 
 */
StrMatchHelper.prototype.isMatch = function(patten, pos, text){
    var str = text.substring(pos-1, patten.length);
    return str == patten;
}

/**
 * 速度测试
 * @param {*} matchObj 匹配函数
 * @param {*} patten qc
 * @param {*} pos 
 * @param {*} text 
 */
StrMatchHelper.prototype.speedTest = function(matchObj, patten, text){
    console.time('clock');
    var pos = matchObj.match(patten, text);
    console.timeEnd('clock');
    console.log(pos)
    if(this.isMatch(patten, pos, text)){
        console.log("匹配出错");
    }
}

module.exports = StrMatchHelper;