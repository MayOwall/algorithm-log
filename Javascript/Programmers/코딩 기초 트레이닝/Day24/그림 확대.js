const solution = (picture, k) => {
  const answer = picture
    .map((v) =>
      Array.from({ length: k }, () =>
        v
          .split("")
          .map((a) => Array.from({ length: k }, () => a).join(""))
          .join("")
      )
    )
    .flat();
  return answer;
};
