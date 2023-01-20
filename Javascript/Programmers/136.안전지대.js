const solution = (board) => {
  // 안전지대를 표현할 배열 만들기
  const safe = board.map((v) => v.map((w) => 0));

  // board를 2중 순회하기
  board.forEach((row, rowI) => {
    row.forEach((num, numI) => {
      // num이 1이라면 안전지대 배열에 위험한 지역 표시하기
      if (num === 1) {
        for (let i = -1; i < 2; i++) {
          if (!!safe[rowI + i]) {
            for (let j = -1; j < 2; j++) {
              safe[rowI + i][numI + j] === 0
                ? (safe[rowI + i][numI + j] = 1)
                : null;
            }
          }
        }
      }
    });
  });

  return safe.reduce(
    (acc, row) =>
      acc + row.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0),
    0
  );
};
