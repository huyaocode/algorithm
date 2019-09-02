/**
 * ViolenceSerch暴力查找
 * @param {模式} pattern 
 * @param {文本} text 
 */
function ViolenceSerch() {}

/**
 * 开始匹配
 * @param {*} pattern 
 * @param {*} text 
 */
ViolenceSerch.prototype.match = function(pattern, text) {
    let pLen = pattern.length;
    let tLen = text.length;

    for(let s = 0; s < tLen - pLen; s++) {
        let match = 0;
        for(let c = 0; c < pLen; c++){
            if(pattern[c] == text[s+c]){
                match++;
            }
        }
        if(match == pLen){
            return s;
        }
    }
    
    return -1;
}

// module.exports = Horspool;