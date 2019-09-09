console.time('timeConsume'); // 计时
const bucket = [3, 5, 8];
const target = 4;

const BUCKET_NUM = bucket.length;
let map = new Map();
let min = Infinity;

// 初始状态
for (let i = 0; i < bucket.length; i++) {
  let initState = [0, 0, 0];
  initState[i] = bucket[i];
  let bucketStr = int2string(initState);
  search(bucketStr, 1);
}
if (min < Infinity) {
  console.log('min', min);
} else {
  console.log(-1);
}

console.timeEnd('timeConsume');

function search(now, step) {
  // 找到一个可行的路径
  if (findPath(now, target)) {
    // console.log(now + '----' + step);
    if (step < min) {
      min = step;
    }
    return step;
  }
  // 当前步数已经超过最小步数了，再查找下去无意义
  if (step > min) {
    return -1;
  }
  // 判断是否在map中已经有过这样的走法
  if (!map.has(now) || map.get(now) > step) {
    map.set(now, step);
    let nowBucktes = string2int(now);
    // 不满时加满
    for (let i = 0; i < BUCKET_NUM; i++) {
      if (nowBucktes[i] < bucket[i]) {
        let origin = nowBucktes[i];
        nowBucktes[i] = bucket[i]; // 加满
        search(int2string(nowBucktes), step + 1);
        nowBucktes[i] = origin;
      }
    }
    // 不为空时倒空
    for (let i = 0; i < BUCKET_NUM; i++) {
      if (nowBucktes[i] > 0) {
        let origin = nowBucktes[i];
        nowBucktes[i] = 0; //倒空
        search(int2string(nowBucktes), step + 1);
        nowBucktes[i] = origin;
      }
    }
    // 互相倒 i -> j
    for (let i = 0; i < BUCKET_NUM; i++) {
      if (bucket[i] === 0) {
        continue;
      }
      for (let j = 0; j < BUCKET_NUM; j++) {
        if (i !== j) {
          let origin_i = nowBucktes[i];
          let origin_j = nowBucktes[j];
          let sum = origin_i + origin_j;
          // i->j  j倒满就是 bucket[j]，没有就是SUM
          nowBucktes[j] = Math.min(sum, bucket[j]);
          // i->j  i倒完就是0，没到完就是 sum - nowBucktes[j]
          nowBucktes[i] = Math.max(0, sum - nowBucktes[j]);
          search(int2string(nowBucktes), step + 1);
          nowBucktes[i] = origin_i;
          nowBucktes[j] = origin_j;
        }
      }
    }
  }
  return -1;
}

function findPath(bucketsStr, target) {
  let [a, b, c] = string2int(bucketsStr);
  if (a === target || b === target || c === target) {
    return true;
  }
}

function string2int(bucketsStr) {
  return bucketsStr.split('_').map(i => parseInt(i));
}
function int2string(buckets) {
  return buckets.join('_');
}
