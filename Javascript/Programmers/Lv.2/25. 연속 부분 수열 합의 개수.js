const solution = (elements) => {
  const arr = [...elements, elements.reduce((acc, cur) => acc + cur, 0)];
  const longE = [...elements, ...elements];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j < elements.length; j++) {
      const sum = longE.slice(i, i + j).reduce((acc, cur) => acc + cur, 0);
      arr.push(sum);
    }
  }

  return [...new Set(arr)].length;
};
