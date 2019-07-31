function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 给定一个数组arr，和一个数num，
 * 请把小于等于num的数放在数组的左边，大于num的数放在数组的右边。
 */
function partition(arr, target) {
    let cur = 0,
        left = -1,
        right = arr.length;
    while (cur < right) {
        if (arr[cur] <= target) {
            swap(arr, cur++, ++left);
        } else {
            swap(arr, cur, --right)
        }
    }
    return cur;
}

const arr = [4,5,6,246,3,456,44,6,78,3,4,5,6,3,8,42,2,5,7,];

let mid = partition(arr, 10)
console.log(arr, mid, arr[mid])