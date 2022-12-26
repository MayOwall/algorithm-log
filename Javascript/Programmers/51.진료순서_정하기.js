const solution = (emergency) => {
  const sortted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sortted.indexOf(v) + 1);
};
