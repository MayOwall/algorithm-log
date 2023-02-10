const makeStr = (v) => String(v) + String(v) + String(v);

const solution = (numbers) => {
  if (numbers.every((v) => !v)) return "0";

  const arr = numbers.sort((a, b) => {
    const str1 = makeStr(a);
    const str2 = makeStr(b);
    const length = Math.min(str1.length, str2.length);

    return Number(str2.slice(0, length)) - Number(str1.slice(0, length));
  });

  return arr.join("");
};
