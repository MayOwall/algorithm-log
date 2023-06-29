const solution = (food) => {
  const arr = [];
  food.forEach((v, i) => {
    if (!i) return;
    arr.push(new Array(Math.floor(food[i] / 2)).fill(i));
  });

  return [...arr.flat(), 0, ...arr.flat().reverse()].join("");
};
