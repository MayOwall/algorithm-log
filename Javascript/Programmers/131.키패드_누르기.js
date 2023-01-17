function solution(numbers, hand) {
  let positionL = 10;
  let positionR = 12;
  const answer = [];

  const handleAnswer = (direct, num) => {
    answer.push(direct);
    direct === "L" ? (positionL = num) : (positionR = num);
  };

  const calculatedLength = (position, num) => {
    return (
      Math.floor(Math.abs(position - num) / 3) + (Math.abs(position - num) % 3)
    );
  };

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      handleAnswer("L", num);
    } else if (num === 3 || num === 6 || num === 9) {
      handleAnswer("R", num);
    } else {
      const temp = num === 0 ? 11 : num;
      const lengthL = calculatedLength(positionL, temp);
      const lengthR = calculatedLength(positionR, temp);

      if (lengthL < lengthR) {
        handleAnswer("L", temp);
      } else if (lengthL > lengthR) {
        handleAnswer("R", temp);
      } else {
        hand === "left" ? handleAnswer("L", temp) : handleAnswer("R", temp);
      }
    }
  });

  return answer.join("");
}
