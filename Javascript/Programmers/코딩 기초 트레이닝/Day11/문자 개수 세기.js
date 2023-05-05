const solution = (my_string) => {
  const arr = Array.from({ length: 52 }, () => 0);

  my_string.split("").forEach((v) => {
    v.charCodeAt() < 91
      ? (arr[v.charCodeAt() - 65] += 1)
      : (arr[v.charCodeAt() - 71] += 1);
  });

  return arr;
};
