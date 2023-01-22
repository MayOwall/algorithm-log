const solution = (people, limit) => {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;
  const arr = people.sort((a, b) => a - b);

  while (true) {
    if (left > right) {
      break;
    } else if (left === right) {
      answer += 1;
      break;
    } else if (arr[left] + arr[right] <= limit) {
      answer += 1;
      left += 1;
      right -= 1;
    } else if (arr[left] + arr[right] > limit) {
      answer += 1;
      right -= 1;
    }
  }
  return answer;
};
