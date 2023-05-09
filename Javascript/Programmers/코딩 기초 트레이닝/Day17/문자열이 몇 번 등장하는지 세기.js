const solution = (myString, pat) => {
  let answer = 0;
  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    const cur = myString.slice(i, i + pat.length);
    if (cur === pat) answer += 1;
  }

  return answer;
};
