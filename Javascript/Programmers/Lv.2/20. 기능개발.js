// 1.
const solution = (progresses, speeds) => {
  const answer = [];
  const arr = progresses.map((v, idx) => Math.ceil((100 - v) / speeds[idx]));

  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    temp.push(num);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > num) {
        answer.push(temp.length);
        temp = [];
        break;
      }
      temp.push(arr[j]);
      i++;
    }
  }

  answer.push(temp.length);
  return answer;
};

// 2.
const solution2 = (progresses, speeds) => {
  const days = progresses.map((v, i) => {
    const left = 100 - v;
    const leftDay = Math.ceil(left / speeds[i]);
    return leftDay;
  });

  const answer = [];
  let acc = 1;
  let curMax = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] > curMax) {
      answer.push(acc);
      acc = 1;
      curMax = days[i];
    } else {
      acc += 1;
    }
  }

  answer.push(acc);
  return answer;
};
