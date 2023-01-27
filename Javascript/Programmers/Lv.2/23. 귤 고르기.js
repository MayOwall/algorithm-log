const solution = (k, tangerine) => {
  let arr = [];
  tangerine.forEach((v) => (arr[v] ? (arr[v] += 1) : (arr[v] = 1)));
  arr = arr.sort((a, b) => b - a);

  let acc = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
    answer += 1;
    if (acc >= k) return answer;
  }
};
