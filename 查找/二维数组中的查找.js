/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 */

function Find(target, array) {
    if (!array) {
        return false;
    }
    const colLen = array.length, rowLen = array[0].length;
    let col = 0,
        row = array[col].length - 1;

    while (row < rowLen && col < colLen) {
        if(array[col][row] === target) {
            return true;
        }
        if(array[col][row] > target) {
            row --;
        } else {
            col ++;
        }
    }
    return false;
}

console.log(Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]));