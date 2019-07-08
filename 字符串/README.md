# 字符串

### [字符串API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
 - String.prototype.split()
   - 通过分离字符串成字串，将字符串对象分割成字符串数组。
 - String.prototype.slice()
   - 摘取一个字符串区域，返回一个新的字符串。
 - String.prototype.substr()
   - 通过指定字符数返回在指定位置开始的字符串中的字符。
 - String.prototype.substring()
   - 返回在字符串中指定两个下标之间的字符。
 - String.prototype.trim()
   - 从字符串的开始和结尾去除空格
 - String.prototype.concat()
   - 连接两个字符串文本，并返回一个新的字符串。
 - String.prototype.match()
   - 使用正则表达式与字符串相比较。
 - String.prototype.replace()
   - 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
 - String.prototype.search()
   - 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
 - String.prototype.toString()
   - 返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。


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