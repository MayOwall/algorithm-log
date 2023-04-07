// 1
function solution1(clothes) {
  let answer = 1;
  const clothInfo = {};

  clothes.forEach((a) => {
    const [name, type] = a;
    clothInfo[type] ? clothInfo[type].push(name) : (clothInfo[type] = [name]);
  });

  for (const key in clothInfo) {
    answer *= clothInfo[key].length + 1;
  }

  return answer - 1;
}

// 2
const solution2 = (clothes) => {
  const closet = {};
  clothes.forEach(([a, b]) =>
    closet[b] ? closet[b].push(a) : (closet[b] = [a])
  );

  const answer =
    clothes.length +
    (Object.values(closet).length > 1
      ? Object.values(closet).reduce((acc, cur) => acc * cur.length, 1)
      : 0);
  return answer;
};

// 3
const solution3 = (clothes) => {
  let answer = 1;
  const closet = {};

  clothes.forEach(([cloth, type]) =>
    closet[type] ? closet[type].push(cloth) : (closet[type] = [cloth])
  );

  for (let value of Object.values(closet)) {
    answer *= value.length + 1;
  }

  return answer - 1;
};
