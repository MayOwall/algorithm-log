const solution = (numbers) => {
  if (!(numbers.join("") * 1)) return "0";

  const sort = numbers.sort((a, b) => {
    const caseA = (a.toString() + b.toString()) * 1;
    const caseB = (b.toString() + a.toString()) * 1;
    return caseA < caseB ? 1 : caseA > caseB ? -1 : 0;
  });

  return sort.join("");
};
