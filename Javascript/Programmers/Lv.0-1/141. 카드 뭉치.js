const solution = (cards1, cards2, goal) => {
  const stack1 = cards1.reverse();
  const stack2 = cards2.reverse();

  for (let i = 0; i < goal.length; i++) {
    const cur = goal[i];
    if (cur === stack1[stack1.length - 1]) {
      stack1.pop();
    } else if (cur === stack2[stack2.length - 1]) {
      stack2.pop();
    } else {
      return "No";
    }
  }
  return "Yes";
};
