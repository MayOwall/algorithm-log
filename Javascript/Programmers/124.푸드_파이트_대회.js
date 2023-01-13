const solution = (food) => {
  const arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(new Array(Math.floor(food[i] / 2)).fill(i));
  }

  return [...arr.flat(), 0, ...arr.flat().reverse()].join("");
};
