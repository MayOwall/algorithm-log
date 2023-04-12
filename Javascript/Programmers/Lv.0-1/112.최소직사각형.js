const solution = (sizes) =>
  sizes
    .map((v) => v.sort((a, b) => a - b))
    .reduce(
      (acc, cur) => [
        Math.max(acc[0], cur[0]),
        Math.max(acc[1], cur[1]),
        Math.max(acc[0], cur[0]) * Math.max(acc[1], cur[1]),
      ],
      [0, 0, 0]
    )[2];

// 기존 풀이
/*
function solution(sizes) {
    // 모든 명함의 긴쪽이 무조건 가로, 짧은 쪽이 무조건 세로가 되도록 해서 최소를 구하면 되지 않을까?
    let longestW = 0;
    let longestH = 0;
    
    sizes.map((size) => {
        if (size[0] < size[1]) {
            const size0Copy = size[0];
            size[0] = size[1];
            size[1] = size0Copy;
        };
        (longestW < size[0]) ? longestW = size[0] : null;
        (longestH < size[1]) ? longestH = size[1] : null;
    });
    
    return longestW * longestH;
*/

const solution2 = (sizes) => {
  let w = 0;
  let h = 0;
  sizes.forEach((v) => {
    const [a, b] = v.sort((a, b) => a - b);
    w = Math.max(a, w);
    h = Math.max(b, h);
  });
  return w * h;
};
