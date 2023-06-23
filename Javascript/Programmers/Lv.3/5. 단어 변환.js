const isChangable = (word1, word2) => {
  let cnt = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) cnt += 1;
    if (cnt === 2) return false;
  }
  return true;
};

const solution = (begin, target, words) => {
  const queue = [[begin, 0, []]];

  while (!!queue.length) {
    const [curWord, cnt, log] = queue.shift();
    if (curWord === target) return cnt;
    words.forEach((nextWord) => {
      if (isChangable(curWord, nextWord) && !log.includes(nextWord)) {
        queue.push([nextWord, cnt + 1, [...log, nextWord]]);
      }
    });
  }

  return 0;
};
