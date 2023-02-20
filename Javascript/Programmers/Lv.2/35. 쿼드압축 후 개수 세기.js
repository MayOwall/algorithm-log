const isOne = (arr) => {
  const set = new Set(arr.flat(Infinity));
  return [set.size === 1, set.has(0) ? 0 : 1];
};

const solution = (arr) => {
  let num0 = 0;
  let num1 = 0;

  const compress = (arr) => {
    if (arr.length === 1) {
      arr[0] === 1 ? (num1 += 1) : (num0 += 1);
      return;
    }

    const isOnly = isOne(arr);
    if (isOnly[0]) {
      isOnly[1] === 0 ? (num0 += 1) : (num1 += 1);
      return;
    }

    const nextArr = [];
    const splitNum = arr.length / 2;
    const up = arr.splice(0, splitNum);

    nextArr.push(up.map((v) => v.slice(0, splitNum)));
    nextArr.push(up.map((v) => v.slice(splitNum)));
    nextArr.push(arr.map((v) => v.slice(0, splitNum)));
    nextArr.push(arr.map((v) => v.slice(splitNum)));

    nextArr.forEach((v) => {
      const temp = isOne(v);
      temp[0] ? (temp[1] === 0 ? (num0 += 1) : (num1 += 1)) : compress(v);
    });
  };

  compress(arr);
  return [num0, num1];
};
