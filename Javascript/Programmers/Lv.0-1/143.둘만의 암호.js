const skipper = (str, skip, idx) => {
  const skipList = skip.split("");
  let i = 0;
  while (i !== idx) {
    let num = str.charCodeAt(0) + 1;
    if (num > 122) num -= 26;
    str = String.fromCharCode(num);
    if (!skipList.includes(str)) i++;
  }
  return str;
};

const solution = (s, skip, index) => {
  const answer = s
    .split("")
    .map((v) => skipper(v, skip, index))
    .join("");
  return answer;
};
