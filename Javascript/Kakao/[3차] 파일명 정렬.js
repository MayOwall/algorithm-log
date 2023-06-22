const splitFile = (file) => {
  const head = file.split(/[0-9]{1,}/)[0].toLowerCase();
  const num = file.split(/[^0-9]{1,}/)[1] * 1;
  const rest = file.replace(new RegExp(`${head}${num}`), "");
  return [head, num, rest];
};

const solution = (files) => {
  return files.sort((a, b) => {
    const A = splitFile(a);
    const B = splitFile(b);

    if (A[0] < B[0]) return -1;
    if (A[0] > B[0]) return 1;
    if (A[1] < B[1]) return -1;
    if (A[1] > B[1]) return 1;
    return 0;
  });
};
