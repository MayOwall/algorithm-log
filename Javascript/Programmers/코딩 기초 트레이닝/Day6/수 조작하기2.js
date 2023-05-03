const solution = (numLog) => {
  let answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    const sub = numLog[i + 1] - numLog[i];
    switch (sub) {
      case 1: {
        answer += "w";
        break;
      }
      case -1: {
        answer += "s";
        break;
      }
      case 10: {
        answer += "d";
        break;
      }
      case -10: {
        answer += "a";
        break;
      }
    }
  }
  return answer;
};
