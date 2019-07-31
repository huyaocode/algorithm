/**
 * 给定一个数组arr，和一个数num，
 * 请把小于num的数放在数组的左边，
 * 等于num的数放在数组的中间，
 * 大于num的数放在数组的右边。
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort3type(arr, target) {
    let left = -1,
        cur = 0,
        right = arr.length;
    while (cur < right) {
        if (arr[cur] > target) {
            swap(arr, cur, --right);
        } else if (arr[cur] < target) {
            swap(arr, cur++, ++left);
        } else {
            cur++;
        }
    }
}

const arr = [9,4,5,6,6,78,9,3,4,5,6,3,9,8,246,3,9,456,44,42,2,9,5,7,9];
console.log(arr.length)
sort3type(arr, 9)

console.log(arr)