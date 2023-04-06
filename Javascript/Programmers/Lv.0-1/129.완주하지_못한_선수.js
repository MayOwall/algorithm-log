// 1.
const solution = (participant, completion) => {
  const arr1 = participant.sort();
  const arr2 = completion.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return arr1[i];
  }
};

// 2.
const solution2 = (participant, completion) => {
  const p = participant.sort();
  const c = completion.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) return p[i];
  }
};
