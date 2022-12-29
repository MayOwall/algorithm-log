const solution = (polynomial) => {
  // x, 상수의 개수를 담을 배열
  const answer = [0, 0];

  // x와 상수의 총 개수 구하기
  polynomial.split(" ").forEach((v) => {
    if (v.includes("x")) {
      // x의 계수가 1일경우 생략 되어있음을 고려
      v === "x" ? (answer[0] += 1) : (answer[0] += Number(v.slice(0, -1)));
    } else if (v !== "+") {
      answer[1] += Number(v);
    }
  });

  //x와 상수의 개수를 고려하여 각 항 결정
  const first = answer[0] === 0 ? "" : answer[0] === 1 ? "x" : answer[0] + "x";
  const mid = !!answer[0] && !!answer[1] ? " + " : "";
  const last = answer[1] ? answer[1] : "";

  return first + mid + last;
};
