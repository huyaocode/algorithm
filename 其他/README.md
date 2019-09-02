# 字符串


### 557. 反转字符串中的单词 III
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii


```js
var reverseWords = function(s) {
    var arr = s.split(' ');
    var result = arr.map(item => {
        return item.split('').reverse().join("");
    })
    return result.join(' ')
}
```

精简后：
```js
var reverseWords = function(s) {
    return result = s.split(' ').map(item => {
        return item.split('').reverse().join("");
    }).join(' ')
}
```

使用  match API 去匹配 `/[\w']+/g`
```js
var reverseWords = function(s) {
    return result = s.macth(/[\w']+/g).map(item => {
        return item.split('').reverse().join("");
    }).join(' ')
}
```