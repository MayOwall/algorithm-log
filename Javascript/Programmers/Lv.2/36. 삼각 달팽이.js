const solution = (n) => {
  // 카운트용 변수 만들기
  let max = 0;
  let count = 0;
  let current = [0, 0]; // col, row
  let direc = "down";

  // 달팽이가 지나갈 배열 만들기
  const arr = [];
  for (let i = 1; i <= n; i++) {
    max += i;
    arr.push(Array.from({ length: i }, () => null));
  }

  //달팽이한테 줄 명령어 만들기
  const [down, right, up] = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ]; // down, right, up

  outer: while (count < max) {
    count++;
    const [col, row] = current;
    arr[col][row] = count;

    switch (direc) {
      case "down": {
        if (arr[col + down[0]] && arr[col + down[0]][row + down[1]] === null) {
          current = [current[0] + down[0], current[1] + down[1]];
          continue outer;
        }
        if (
          arr[col + right[0]] &&
          arr[col + right[0]][row + right[1]] === null
        ) {
          direc = "right";
          current = [current[0] + right[0], current[1] + right[1]];
          continue outer;
        }
        break;
      }
      case "right": {
        if (
          arr[col + right[0]] &&
          arr[col + right[0]][row + right[1]] === null
        ) {
          current = [current[0] + right[0], current[1] + right[1]];
          continue outer;
        }
        if (arr[col + up[0]] && arr[col + up[0]][row + up[1]] === null) {
          direc = "up";
          current = [current[0] + up[0], current[1] + up[1]];
          continue outer;
        }
        break;
      }
      case "up": {
        if (arr[col + up[0]] && arr[col + up[0]][row + up[1]] === null) {
          current = [current[0] + up[0], current[1] + up[1]];
          continue outer;
        }
        if (arr[col + down[0]] && arr[col + down[0]][row + down[1]] === null) {
          direc = "down";
          current = [current[0] + down[0], current[1] + down[1]];
          continue outer;
        }
        break;
      }
    }
  }

  return arr.flat(Infinity);
};
