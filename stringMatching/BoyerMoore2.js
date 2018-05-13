function BoyerMoore2(){
    
}

/** 
 * 前缀匹配 
 */  
BoyerMoore2.prototype.isPrefix = function(pattern, p) {  
    patternLength = pattern.length;  
    for (let i = p, j = 0; i < patternLength; ++i, ++j) {  
        if (pattern[i] != pattern[j]) {
            return false;  
        }
    }
    return true;  
}

/** 
 * 后缀匹配 
 */  
BoyerMoore2.prototype.suffixLength = function(pattern, p) {  
    let pLen = pattern.length;  
    let len = 0;
    for (let i = p, j = pLen - 1; i >= 0 && pattern[i] == pattern[j]; i--, j--) {  
        len += 1;  
    }
    return len;  
}
/**
 * 对模式中的字母生成好后缀移动表
 * @param {匹配模式} pattern 
 */
BoyerMoore2.prototype.createGoodTable = function (pattern) {

    let pLen = pattern.length;
    let lastPrefixPosition = pLen;
    let good_table = [];

    for (let i = pLen - 1; i >= 0; --i) {
        if (this.isPrefix(pattern, i + 1)) {
            lastPrefixPosition = i + 1;
        }
        good_table[pLen - 1 - i] = lastPrefixPosition - i + pLen - 1;
    }

    for (let i = 0; i < pLen - 1; ++i) {
        let slen = this.suffixLength(pattern, i);
        good_table[slen] = pLen - 1 - i + slen;
    }
    return good_table;

}

/**
 * 生成坏字符移动表
 * @param {*} pattern 
 */
BoyerMoore2.prototype.createBadTable = function (pattern) {

    let pLen = pattern.length;
    let bad_table = [];

    for (let i = 0; i < 255; i++) {
        bad_table[i] = pLen;  //默认初始化全部为匹配字符串长度
    }
    for (let i = 0; i < pLen - 1; i++) {    //pLen 减去最后一次出现位置
        bad_table[ pattern[i] ] = pLen - 1 - i;
    }

    return bad_table;
}



/**
 * 开始匹配
 * @param {*} pattern 
 * @param {*} text 
 */
BoyerMoore2.prototype.match = function(pattern, text){
    let tLen = text.length;
    let pLen = pattern.length;

    if (pLen > tLen) {
        return -1;
    }

    //先构造移动表
    let bad_table = this.createBadTable(pattern);
    let good_table = this.createGoodTable(pattern);

    for (let i = pLen - 1, j; i < tLen;) {
        for (j = pLen - 1; text[i] == pattern[j]; i--, j--) {
            if (j == 0) {
                return i;
            }
        }
        i += Math.max(good_table[pLen - j - 1], bad_table[text[i]]);
    }
    return -1;
}