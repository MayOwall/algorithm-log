function solution(n) {
  let arr = [0, 1, 1];

  for (let i = 2; i < n; i++) {
    const [a, b, c] = arr;
    arr = [b % 1234567, c % 1234567, (b + c) % 1234567];
  }

  return arr[2];
}
