const solution = (my_string, indices) => {
  const arr = my_string.split("");
  indices.forEach((v) => (arr[v] = ""));
  return arr.join("");
};
