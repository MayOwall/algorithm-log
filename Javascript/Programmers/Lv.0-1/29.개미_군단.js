// 나의 풀이
const types = [5, 3, 1];
const solution = (hp) => {
  let left = hp;
  let answer = 0;
  types.forEach((type) => {
    const num = Math.floor(left / type);
    left = left % type;
    answer += num;
  });

  return answer;
};

// 더 깔끔한 풀이
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
