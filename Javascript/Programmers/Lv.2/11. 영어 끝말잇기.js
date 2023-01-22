const solution = (n, words) => {
  for (let i = 1; i < words.length; i++) {
    const isLink = words[i - 1].slice(-1) === words[i].slice(0, 1);
    const isRepeat = words.indexOf(words[i]) === i;
    if (!isLink || !isRepeat) return [(i % n) + 1, Math.floor(i / n) + 1];
  }

  return [0, 0];
};
