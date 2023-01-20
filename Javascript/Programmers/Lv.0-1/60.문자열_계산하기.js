const solution = (my_string) => {
  const arr = my_string.split(" ").map((v) => (isNaN(v) ? v : Number(v)));

  return arr.reduce((acc, cur, idx, arr) =>
    typeof cur !== "number" ? acc : arr[idx - 1] === "+" ? acc + cur : acc - cur
  );
};
