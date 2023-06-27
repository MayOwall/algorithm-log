const getKeyHash = (keymap) => {
  const hash = {};
  keymap.split("").forEach((v, i) => {
    hash[v] = Math.min(i + 1, hash[v] || 101);
  });
  return hash;
};

const getKeyPress = (target, hashs) => {
  let press = 101;
  for (let i = 0; i < hashs.length; i++)
    press = Math.min(press, hashs[i][target] || 101);

  return press === 101 ? -1 : press;
};

const getKeyPressSum = (target, hashs) => {
  let sum = 0;

  for (let i = 0; i < target.length; i++) {
    const cur = target[i];
    const count = getKeyPress(cur, hashs);
    if (count === -1) return -1;
    sum += count;
  }

  return sum;
};

const solution = (keymap, targets) => {
  const hashs = keymap.map((key) => getKeyHash(key));
  const answer = targets.map((target) => getKeyPressSum(target, hashs));
  return answer;
};
