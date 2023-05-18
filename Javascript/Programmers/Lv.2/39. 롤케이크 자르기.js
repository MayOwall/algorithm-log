const solution = (topping) => {
  let answer = 0;
  let left = 0;
  let right = [];
  const obj = {};

  topping.forEach((v) => {
    if (!right.includes(v)) right.push(v);
    if (!obj[v])
      obj[v] = {
        isVisited: false,
        count: 0,
      };
    obj[v].count += 1;
  });

  right = right.length;

  topping.forEach((v) => {
    obj[v].count -= 1;

    if (!obj[v].isVisited) {
      obj[v].isVisited = true;
      left++;
    }
    if (obj[v].count === 0) {
      right--;
    }
    if (left === right) answer += 1;
  });
  return answer;
};
