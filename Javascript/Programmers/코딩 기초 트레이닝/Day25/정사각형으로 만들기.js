const solution = (arr) => {
  const colL = arr.length;
  const rowL = arr[0].length;
  if (colL === rowL) return arr;
  if (colL < rowL) {
    const temp = Array.from({ length: rowL - colL }, () =>
      new Array(rowL).fill(0)
    );
    return [...arr, ...temp];
  }
  if (colL > rowL) {
    const temp = arr.map((v) => [...v, ...new Array(colL - rowL).fill(0)]);
    return temp;
  }
};
