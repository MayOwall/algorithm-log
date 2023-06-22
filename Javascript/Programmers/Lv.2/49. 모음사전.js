const al = ["A", "E", "I", "O", "U"];

const solution = (word) => {
  const dic = [];

  const bfs = (word) => {
    dic.push(word);
    if (word.length !== al.length) {
      for (let i = 0; i < al.length; i++) {
        bfs(word + al[i]);
      }
    }
  };

  for (let i = 0; i < al.length; i++) {
    bfs(al[i]);
  }

  return dic.indexOf(word) + 1;
};
