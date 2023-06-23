const words = ["A", "E", "I", "O", "U"];

const solution = (word) => {
  const dic = [];
  const dfs = (sum) => {
    if (sum.length === 5) return;
    words.forEach((word) => {
      dic.push(sum + word);
      dfs(sum + word);
    });
  };

  dfs("");
  return dic.indexOf(word) + 1;
};
