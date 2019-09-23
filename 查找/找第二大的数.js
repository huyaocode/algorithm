let arr = [5, 4, 6, 7, 2, 3,66, 23,23,43,75,34,34,3,4,34,3,4,4,1, 8, 9, 10,23];

console.log(secondBigNumber(arr));

function secondBigNumber(arr) {
    if(arr.length < 2) {
        return null;
    }
    let first = -Infinity, second = -Infinity;

    for(let i =0; i < arr.length; i++) {
        if(arr[i] > second) {
            if(arr[i] > first) {
                second = first;
                first = arr[i];
            }else  {
                second = arr[i];
            }
        }
    }

    return second;
}