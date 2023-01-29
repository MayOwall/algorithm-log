const dic = [
  null,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const solution = (msg) => {
  let stack = [];
  const answer = [];

  for (let i = 0; i < msg.length; i++) {
    stack.push(msg[i]);
    const w = stack.join("");

    if (!dic.includes(w)) {
      const newWord = w;
      stack.pop();
      const printWord = stack.join("");
      const idx = dic.indexOf(printWord);
      answer.push(idx);
      dic.push(newWord);
      stack = [];
      i--;
    }
  }
  answer.push(dic.indexOf(stack.join("")));

  return answer;
};
