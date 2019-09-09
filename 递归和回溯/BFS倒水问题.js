/**
 * 题目描述 Description
 *      有两个无刻度标志的水壶，分别可装 x 升和 y。 （x,y 为整数且均不大于 100 ）的水
 *      设另有一缸，可用来向水壶灌水或接从水壶中倒出的水 两水壶间，水也可以相互倾倒
 *      已知 x 升壶为空 壶， y 升壶为空壶。问如何通过倒水或灌水操作， 用最少步数能在x或y升的
 *      中量 z 升的水 来
 *
 *      输入描述 Input Description
 *      一行，三个数据，分别表 x,y  z;
 *
 *      输出描述 Output Description
 *      一行，输出最小步 ,如果无法达到目标，则输出"impossible"
 *
 *      样例输入 Sample Input
 *      3 22 1
 *
 *      样例输出 Sample Output
 *      14
 *
 */
/**
解题思路：列举出所有的倒水操作，题目中未给出容器名称，这里假定A容器的容量为x升，B容器的容量为y升。

        1、将A容器中的全部水倒入水缸（当A容器中有水时）
        2、将B容器中的全部水倒入水缸（当B容器中有水时）
        3、将A容器装满水（当A容器中的水未满时）
        4、将B容器装满水（当B容器中的水未满时）
        5、A容器中的水倒入B容器（当A容器中有水，同时B容器中水未满时）
              第五种倒水操作还可分为两类：
              第一种情况：如果A容器中的水小于等于B容器的剩余容量，则操作过后A容器中剩余水量为0；
              第二种情况：如果A容器中的水大于B容器的剩余容量，则操作过后A容器中剩余水量为:
              A容器当前装水量 - B容器的剩余容量；
         6、B容器中的水倒入A容器（当B容器中有水，同时A容器中水未满时）
              第六种倒水操作还可分为两类：
              第一种情况：如果B容器中的水小于等于A容器的剩余容量，则操作过后B容器中剩余水量为0；
              第二种情况：如果B容器中的水大于A容器的剩余容量，则操作过后B容器中剩余水量为:
              B容器当前装水量 - A容器的剩余容量；
 */


let a, b, targetWaterV;
let n1, n2;
let t;

a = 3;
b = 22;
targetWaterV = 1;


let visited = []; //记录该节点是否访问过;
// 初始化矩阵
for(let i = 0; i <= a; i ++){
	visited[i] = new Array(b+1);
	visited[i].fill(0)
}


if (!bfs(0, 0)) {
  console.log('impossible');
}

function Nodes(x, y, current) {
  this.x = x; //当前节点的A水壶所装水的体积（升）
  this.y = y; //当前节点的B水壶所装水的体积（升）
  this.current = current; //当前节点所在层数，用于求最小步
}

function bfs(x, y) {
  let ok = false;
  let queue = [];
  n1 = new Nodes(x, y, 0);
  queue.push(n1);
  while (queue.length > 0) {
    //取出队头（Nodes对象
    n2 = queue.shift();

    //如果A容器或者B容器得到目标targetWaterV升水
    if (n2.x == targetWaterV || n2.y == targetWaterV) {
      //输出当前结点所在的层数
      console.log(n2.current);
      //ok设置为true,表明倒水问题有解
      ok = true;
      break;
    }
    if (visited[n2.x][n2.y] == 1) continue; //结点重复则剪枝处
    //当前状态没出现过，则标志已访问
    visited[n2.x][n2.y] = 1;

		// 6种情况
    for (let i = 1; i <= 6; i++) {
      t = new Nodes();
      t.current = n2.current + 1; //记录每个入栈结点的层

      //i=1 并且A容器中有水时，倒水操作为：将A容器中的全部水倒入水缸（倒出）
      if (i == 1 && n2.x > 0) {
        t.x = 0;
        t.y = n2.y;
        queue.push(t);
      }

      //i=2 并且B容器中有水时，倒水操作为：将B容器中的全部水倒入水缸（倒出）
      if (i == 2 && n2.y > 0) {
        t.y = 0;
        t.x = n2.x;
        queue.push(t);
      }

      //i=3 并且A容器中的水未满时，倒水操作为：将A容器装满
      if (i == 3 && n2.x != a) {
        t.x = a;
        t.y = n2.y;
        queue.push(t);
      }

      //i=4 并且B容器中的水未满时，倒水操作为：将B容器装满
      if (i == 4 && n2.y != b) {
        t.y = b;
        t.x = n2.x;
        queue.push(t);
      }

      //i=5并且A容器中有水，同时B容器中水未满时，倒水操作为：A容器中的水倒入B容器
      if (i == 5 && n2.x != 0 && b - n2.y != 0) {
        //如果A容器中的水小于等于B容器的剩余容量
        if (n2.x <= b - n2.y) {
          t.x = 0;
          t.y = n2.y + n2.x;
          queue.push(t);
        }
        //如果A容器中的水大于B容器的剩余容量
        else {
          t.y = b;
          t.x = n2.x - (b - n2.y);
          queue.push(t);
        }
      }
      //i=6并且B容器中有水，同时A容器中水未满时，倒水操作为：B容器中的水倒入A容器
      if (i == 6 && n2.y != 0 && a - n2.x != 0) {
        //如果B容器中的水小于等于B容器的剩余容量
        if (n2.y <= a - n2.x) {
          t.y = 0;
          t.x = n2.x + n2.y;
          queue.push(t);
        }
        //如果B容器中的水大于A容器的剩余容量
        else {
          t.x = a;
          t.y = n2.y - (a - n2.x);
          queue.push(t);
        }
      }
    }
  }
  return ok;
}
