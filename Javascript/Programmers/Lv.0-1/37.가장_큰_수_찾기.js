const solution = (array) =>
  array.reduce((acc, cur, idx) => (cur > acc[0] ? [cur, idx] : acc), [0, 0]);

// 다들 Math.max로만 풀었는데, 나만 reduce를 사용해서 풀어서 기분이 묘하다. 괜스래 조금 뿌듯한 것 같기도 하다 :)
