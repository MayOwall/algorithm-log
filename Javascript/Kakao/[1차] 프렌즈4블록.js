const solution = (m, n, board) => {
  let answer = 0;
  const arr = Array.from({ length: n }, () => []);
  board.reverse().forEach((row) => {
    row.split("").forEach((v, idx) => {
      arr[idx].push([v, false]);
    });
  });
  const searchSame = (arr) => {
    let isDelete = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const l = arr[i].length;
      for (let j = 0; j < l - 1; j++) {
        if (arr[i][j] && arr[i][j + 1] && arr[i + 1][j] && arr[i + 1][j + 1]) {
          const a = arr[i][j][0];
          const b = arr[i][j + 1][0];
          const c = arr[i + 1][j][0];
          const d = arr[i + 1][j + 1][0];
          if (a === b && b === c && c === d) {
            isDelete = true;
            arr[i][j][1] = true;
            arr[i][j + 1][1] = true;
            arr[i + 1][j][1] = true;
            arr[i + 1][j + 1][1] = true;
          }
        }
      }
    }

    if (isDelete) {
      const deleteNum = arr
        .map((row) => row.filter(([_, v]) => v))
        .flat().length;
      const newArr = arr.map((row) => row.filter(([_, v]) => !v));
      answer += deleteNum;
      searchSame(newArr);
    }
    return;
  };

  searchSame(arr);
  return answer;
};
