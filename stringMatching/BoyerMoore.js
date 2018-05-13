function BoyerMoore(){
    
}
/**
 * shiftTable 移动表
 */
BoyerMoore.prototype.shiftTable = [];
 
/**
 * 对模式中的字母生成移动表
 * @param {匹配模式} pattern 
 */
BoyerMoore.prototype.createShiftTable = function (pattern) {
    var patLen = pattern.length;
    for (let i = 0; i < 255; i++) { 
        this.shiftTable[String.fromCharCode(i)] = -1;   //不包括在模式字串中的字符赋值为 -1
    }
    for(let i = 0; i < patLen; i++){
        this.shiftTable[pattern[i]] = i;    //他在patten中的最右位置
    } 
}
BoyerMoore.prototype.match = function(pattern, text){
    //先构造移动表
    this.createShiftTable(pattern);
    
    let textLen = text.length;
    let patLen = pattern.length;
    let skip=0;
    for(let i = 0; i <= textLen - patLen; i += skip ){
        skip = 0;
        for(let j = patLen - 1; j >= 0; j-- ){
            if(pattern[j] != text[i+j] ){
                skip = j - this.shiftTable[text[i+j]];
                if(skip < 1){
                    skip = 1;
                }
                break;
            }
        }
        if(skip == 0){
            return i;
        }
    }
    return -1;
}

// module.exports=BoyerMoore;