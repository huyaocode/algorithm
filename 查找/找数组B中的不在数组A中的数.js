/**
 * 一个有序数组A，另一个无序数组B，请打印B中的所有不在A中的数，A数 组长度为N，B数组长度为M。
 */

const arrA = [1, 3, 4, 5, 6, 8];
const arrB = [5, 7, 2, 7, 1, 8, 0]; // [0,1,2,5,7,7,8]

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
}

function findNotInOther(arrA, arrB) {
    let notInArr = []
    bubbleSort(arrB);
    let i = 0,
        j = 0;
    while (j < arrB.length) {
        if (arrB[j] < arrA[i]) {
            notInArr.push(arrB[j]);
            j++;
        } else if (arrB[j] > arrA[i]) {
            i++;
        } else {
            j++;
        }
    }
    return notInArr;
}

let ans = findNotInOther(arrA, arrB)
console.log(ans)