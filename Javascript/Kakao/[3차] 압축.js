const dic = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

const solution = (msg) => {
  const answer = [];
  let stack = "";

  for (let i = 0; i < msg.length; i++) {
    while (dic.includes(stack + msg[i])) {
      stack += msg[i];
      i++;
    }

    const idx = dic.indexOf(stack) + 1;
    answer.push(idx);
    dic.push(stack + msg[i]);
    stack = msg[i];
  }

  if (!!stack) {
    answer.push(dic.indexOf(stack) + 1);
  }

  return answer;
};
