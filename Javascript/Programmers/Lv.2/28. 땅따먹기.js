const solution = (land) => {
  for (let i = 1; i < land.length; i++) {
    const newArr = land[i].map((v, idx) => {
      const lastArr = land[i - 1];
      const filtered = [...lastArr.slice(0, idx), ...lastArr.slice(idx + 1)];
      const max = Math.max(...filtered);
      return v + max;
    });
    land[i] = newArr;
  }

  return Math.max(...land[land.length - 1]);
};
