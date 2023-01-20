const solution = (ingredients) => {
  const stack = [];
  let answer = 0;
  const checkStack = () => {
    const check = [false, false, false];
    for (let i = stack.length - 1; i >= 0; i--) {
      console.log;
      if (stack[i] === 1) {
        // 빵 일 때
        if (check[0] && check[1] && check[2]) {
          // 햄버거 완성 조건일 때
          answer += 1;
        } else {
          check[0] = true;
        }
      } else if (stack[i] === 3 && check[0]) {
        // 고기일 때
        check[1] = true;
      } else if (stack[i] === 2 && check[0] && check[1]) {
        // 야채일 때
        check[2] = true;
      }
    }
  };

  ingredients.forEach((v) => {
    stack.push(v);
    checkStack();
  });
};

const checkStack = () => {
  let check = [false, false, false];
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === 1) {
      // 빵 일 때
      if (check[0] && check[1] && check[2]) {
        // 햄버거 완성 조건일 때
        answer += 1;
        const burger = stack.splice(i);
        console.log(burger, stack);
        check = [false, false, false];
      } else {
        check[0] = true;
      }
    } else if (stack[i] === 3 && check[0]) {
      // 고기일 때
      check[1] = true;
    } else if (stack[i] === 2 && check[0] && check[1]) {
      // 야채일 때
      check[2] = true;
    }
  }
};
