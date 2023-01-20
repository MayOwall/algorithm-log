// 1. absolute를 실제 정수로 바꿔주기
// 2. 실제 정수들 더해주기

const solution = (absolutes, signs) =>
  absolutes
    .map((v, idx) => (signs[idx] ? v : -v))
    .reduce((acc, cur) => acc + cur, 0);
