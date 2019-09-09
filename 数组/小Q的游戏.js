/**
 * 小Q制作了一个简单的游戏，
 * 有排方块，每个方块上是一个自然数正整数或 ‘>’，‘<’
 * 若小在数字方块上，他会得到方块上数字对应的分数，并且方块上的数字会减一。
 * 特别的，当小Q走上数字0方块时，他会得到0分，然后将这个方块销毁掉。
 * 若在'<'或'>'方块上时，他会改变接下来前进的方向，‘<’代表向左, ‘>’代表向右。
 * 特别的若小下一个走到的方块也是‘>’或‘<’时，他会销毁掉这个方块。
 * 当小O走出这排方块的边界时，游戏结束
 * 
 * 现在有一排方块，小Q每次会执选其中一个子串来玩，但是他忘记了记录得分，请帮他计算出每次游戏的得分
 */

var blocks = '> 2 < 5 > 3 <';
var start = 1, end = 7;

gamePoint(blocks, start, end);

function gamePoint(blocks, start, end) {
  var blocks = blocks
    .split(' ')
    .slice(start - 1, end)
    .map(item => {
      if (item !== '>' && item !== '<') {
        return parseInt(item);
      } else {
        return item;
      }
    });
  console.log(blocks.join(' '));
  console.log('>');
  var cur = 0,
    preIsArrow = false,
    dir = 1,
    sum = 0;

  while (blocks.length > 0 && cur >= 0 && cur < blocks.length) {
    switch (blocks[cur]) {
      case '>':
        if (preIsArrow) {
          blocks.splice(cur, 1);
          preIsArrow = false;
        } else {
          dir = 1;
          cur++;
          preIsArrow = true;
        }
        break;
      case '<':
        if (preIsArrow) {
          blocks.splice(cur, 1);
          preIsArrow = false;
        } else {
          dir = -1;
          cur--;
          preIsArrow = true;
        }

        break;
      default:
        if (blocks[cur] === 0) {
          blocks.splice(cur, 1);
        } else {
          sum += blocks[cur];
          blocks[cur]--;
          if (dir === 1) {
            if (blocks[cur] === 0) {
              blocks.splice(cur, 1);
            } else {
              cur++;
            }
          } else {
            if (blocks[cur] === 0) {
              blocks.splice(cur, 1);
            }
            cur--;
          }
        }
        preIsArrow = false;
        break;
    }

    // 调试输出
    if (cur >= 0 && cur < blocks.length) {
      console.log(blocks.join(' '), '\tsum:', sum);
      let posStr = '';
      for (let i = 1; i <= cur; i++) {
        posStr += '  ';
      }
      posStr += dir === 1 ? '>' : '<';
      console.log(posStr);
    }
  }
  return sum;
}
