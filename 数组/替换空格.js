/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

function replaceSpace(str)
{
    let arr = str.split('');
    for(let i in arr) {
        if(arr[i] === ' ') {
            arr.splice(i, 1, '%','2','0')
        }
    }
    return arr.join('')
}

let res = replaceSpace('We Are Happy')
console.log(res)