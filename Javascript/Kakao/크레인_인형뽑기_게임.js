const solution = (board, moves) => {
  const basket = [];
  let answer = 0;

  const checkBasket = () => {
    if (basket[basket.length - 2] === basket[basket.length - 1]) {
      answer += 2;
      basket.pop();
      basket.pop();
    }
  };

  moves.forEach((p) => {
    for (let i = 0; i < board.length; i++) {
      const num = board[i][p - 1];

      if (num === 0) {
        continue;
      } else {
        board[i][p - 1] = 0;
        basket.push(num);
        checkBasket();
        break;
      }
    }
  });

  return answer;
};
