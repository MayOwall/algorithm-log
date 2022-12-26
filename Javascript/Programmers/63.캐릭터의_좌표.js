const solution = (keyinput, board) => {
  const answer = [0, 0];
  const max = board.map((v) => (v - 1) / 2);

  keyinput.forEach((v) => {
    switch (v) {
      case "left":
        answer[0] !== -max[0] ? (answer[0] -= 1) : null;
        break;
      case "right":
        answer[0] !== max[0] ? (answer[0] += 1) : null;
        break;
      case "up":
        answer[1] !== max[1] ? (answer[1] += 1) : null;
        break;
      default:
        answer[1] !== -max[1] ? (answer[1] -= 1) : null;
    }
  });

  return answer;
};
