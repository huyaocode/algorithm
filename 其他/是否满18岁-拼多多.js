function has18(brithday) {
  let [year, month, day] = brithday.split('-').map(numStr => parseInt(numStr));

  if (!(year && month && day)) {
    throw TypeError("argument must be 'xxxx-xx-xx'");
  }
  const curDate = new Date();
  let cYear = curDate.getFullYear(),
    cMonth = curDate.getMonth() + 1,
    cDay = curDate.getDay() + 1;

  // 年够了
  if (cYear - year > 18) {
    return true;
  } else if (cYear - year < 18) {
    return false;
  } else {
    // 当年相等时，判断月
    if(cMonth > month) {
      return true;
    } else if(cMonth < month) {
      return false;
    } else {
      // 年月相等，判断日期
      if(cDay >= day) {
        return true;
      }
    }
  }
  return false;
}

has18('1998-04-09')
has18('2006-04-09')