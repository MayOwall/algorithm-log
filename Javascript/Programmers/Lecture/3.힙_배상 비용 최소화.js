function solution(N, works) {
  works = works.sort((a, b) => b - a);

  while (N > 0) {
    if (JSON.stringify([...new Set(works)]) === "[0]") break;

    let currentIdx = 0;
    while (works[currentIdx] === works[currentIdx + 1]) {
      currentIdx += 1;
    }
    if (currentIdx + 1 <= N) {
      N -= currentIdx + 1;
      for (let i = 0; i <= currentIdx; i++) {
        works[i] -= 1;
      }
    } else {
      for (let i = 0; i < N; i++) {
        works[i] -= 1;
      }
      break;
    }
  }

  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
