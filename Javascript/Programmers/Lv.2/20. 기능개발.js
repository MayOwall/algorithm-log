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
