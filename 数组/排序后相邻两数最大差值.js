/**
 * 给定一个数组，求如果排序之后，相邻两数的最大差值，
 * 要求时间复杂度O(N)，且要求不能用非基于比较的排序。
 */

function bucket(num, arrLen, min, max) {
    return ((num - min) * arrLen / (max - min)) >> 0;
}

function maxGup(arr) {
    let arrLen = arr.length;;
    if(!arr && arrLen < 2) {
        return 0;
    }
    // 找最小值和最大值
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arrLen; i ++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    if(min === max){
        return 0;
    }

    let tempArr = new Array(arrLen + 1);
    let bid = 0;
    for(let i= 0; i < arrLen; i ++) {
        bid = bucket(arr[i], arrLen, min, max);
        debugger
        tempArr[bid] = {
            min : tempArr[bid] ? Math.min(tempArr[bid].min, arr[i]) : arr[i],
            max : tempArr[bid] ? Math.max(tempArr[bid].max, arr[i]) : arr[i]
        }
    }
    console.log(tempArr)
    let res = 0;
    let lastMax = tempArr[0].max;
    for(let i = 1; i < arrLen + 1; i ++) {
        if(tempArr[i]) {
            res = Math.max(res, tempArr[i].min - lastMax);
            lastMax = tempArr[i].max;
        }
    }
    return res;
}

const arr = [1,4,2,4,5,6,2,43,5,35,3,6,3,4,3,8,2,7,1,31,2,9,2,2,9]

console.log(maxGup(arr))