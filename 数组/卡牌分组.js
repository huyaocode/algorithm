/**
 * 
  给定一副牌，每张牌上都写着一个整数。

  此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

  每组都有 X 张牌。
  组内所有的牌上都写着相同的整数。
  仅当你可选的 X >= 2 时返回 true。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
 */

function gcdCreator() {
  let map = new Map();
  return gcd = (x, y) => {
    if(map[`${x}_${y}`]) {
      return map[`${x}_${y}`];
    } else  {
      map[`${x}_${y}`] = x == 0 ? y : gcd(y % x, x)
    }
    return map[`${x}_${y}`];
  }
}

var hasGroupsSizeX = function(deck) {
  let gcd = gcdCreator();
  let map = {};
  for (let card of deck) {
    if (map[card]) {
      map[card]++;
    } else {
      map[card] = 1;
    }
  }

  let g;
  for (let i in map) {
    if (Object.prototype.hasOwnProperty.call(map, i)) {
      g = g ? g : map[i];
      if (map[i] <= 1) {
        return false;
      } else {
        g = gcd(g, map[i]);
      }
    }
  }

  return g >= 2;
};

let arr = [1, 1, 1, 2, 2, 2, 3, 3];

let res = hasGroupsSizeX(arr);

console.log(res);
