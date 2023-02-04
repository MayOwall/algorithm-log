const isSimilar = (a, b) =>
  a.split("").filter((cur, idx) => b[idx] !== cur).length < 2;

const solution = (begin, target, words) => {
  if (!words.includes(target)) return 0;

  const answer = [];
  const visit = new Array(words.length).fill(false);

  const dfs = (word, count) => {
    if (visit[words.indexOf(word)]) return;
    if (word === target) {
      answer.push(count);
      return;
    }

    count++;
    visit[words.indexOf(word)] = true;

    const nextWords = words.filter((v, i) => !visit[i] && isSimilar(v, word));
    nextWords.forEach((v) => dfs(v, count));
  };

  dfs(begin, 0);

  return Math.min(...answer);
};
