/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = [0,1,
         'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ]
    
    let num = digits.split('')
    
    let code = []
    num.forEach(item => {
        if(map[item]) {
            code.push(map[item])
        }
    })
    let combine = (arr) => {
        let temp = []
        for(let i = 0; i < arr[0].length; i ++) {
            for(let j = 0; j < arr[1].length; j ++) {
                temp.push(arr[0][i] + arr[1][j])
            }
        }
        arr.splice(0, 2, temp);
        if(arr.length > 1) {
            temp = temp.concat(combine(arr))
        }
        return temp;
    }

    return combine(code);
};

console.log(letterCombinations('234'))