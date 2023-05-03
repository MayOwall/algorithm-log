const solution = (code) => {
  let ret = "";
  let mode = false;

  code.split("").forEach((v, i) => {
    // v가 1이면 모드 바꾸기
    if (v === "1") {
      mode = !mode;
      return;
    }
    if ((mode && i % 2) || (!mode && !(i % 2))) ret += v;
  });

  return ret ? ret : "EMPTY";
};
