const StrMatchHelper = require('./StrMatchHelper');

/**
 * Horspool算法
 * @param {模式} pattern 
 * @param {文本} text 
 */
function Horspool() {
    
}

/**
 * shiftTable 移动表
 */
Horspool.prototype.shiftTable = [];

/**
 * 对模式中的字母生成移动表
 * @param {匹配模式} pattern 
 */
Horspool.prototype.createShiftTable = function (pattern) {
    let patternLen = pattern.length;
    for (var i = 65; i < 122; i++) {
        if (i > 90 && i < 97) {
            continue;
        }
        // 接受一个指定的 Unicode 值，然后返回一个字符串
        this.shiftTable[String.fromCharCode(i)] = patternLen;
    }
    for(i in pattern){
        let pos = pattern.lastIndexOf(pattern[i], patternLen - 2);
        this.shiftTable[ pattern[i] ] = patternLen - (pos + 1);
    }
}

/**
 * 开始匹配
 * @param {*} pattern 
 * @param {*} text 
 */
Horspool.prototype.match = function(pattern, text){

    this.createShiftTable(pattern);
    let patternLen = pattern.length;
    let i = patternLen - 1;
    while( i <= text.length - 1){
        let k = 0;
        while( k <= patternLen - 1 && pattern[patternLen - 1 - k] == text[i - k] ){
            k++;
        }
        if(k == patternLen){
            return i - patternLen + 1;
        } else {
            i = i + this.shiftTable[text[i]];
        }
    }
    return -1;
}

module.exports = Horspool;