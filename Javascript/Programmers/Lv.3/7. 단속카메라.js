const solution = (routes) => {
  routes.sort((a, b) => a[0] - b[0]);
  let min = routes[0][0];
  let max = routes[0][1];
  let answer = 1;

  for (let i = 1; i < routes.length; i++) {
    if (min <= routes[i][0] && routes[i][1] <= max) {
      min = routes[i][0];
      max = routes[i][1];
      continue;
    }

    if (min > routes[i][0] || routes[i][0] > max) {
      answer += 1;
      min = routes[i][0];
      max = routes[i][1];
    }
  }

  return answer;
};
