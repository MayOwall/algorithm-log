const solution = (cacheSize, cities) => {
  let queue = [];
  let answer = 0;

  if (!cities.length) return 0;
  if (!cacheSize) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const value = cities[i].toLowerCase();
    if (!queue.includes(value)) {
      if (queue.length < cacheSize) {
        queue.push(value);
      } else {
        queue.shift();
        queue.push(value);
      }
      answer += 5;
    } else {
      const idx = queue.indexOf(value);
      queue = [...queue.slice(0, idx), ...queue.slice(idx + 1)];
      queue.push(value);
      answer += 1;
    }
  }
  return answer;
};

/*
/ 아냐 탐색을 하는 과정이 있으니까 array가 나아
// 환형 큐..?

const solution = (cacheSize, cities) => {
  let queue = [];
  let head = 0;
  let rear = 0;
  let answer = 0;

  for (let i = 0; i < cities.length; i++) {
    if (!queue.includes(cities[i])) {
      if (queue.length < cacheSize) {
        queue.push(cities[i]);
          rear = queue.length - 1;
          console.log("just push :", cities[i], queue, head, rear)
      } else {
        rear += 1;
        if (rear === queue.length) {
          rear -= queue.length;
        }
        head += 1;
        if (head === queue.length) {
          head -= queue.length;
        }
        queue[rear] = cities[i];
        console.log("not include :", cities[i], queue, head, rear)
      }
      answer += 5;
    } else {
      const idx = queue.indexOf(cities[i]);
      console.log("include :", cities[i], queue, queue.slice(0, idx), queue.slice(idx + 1));
        queue = [...queue.slice(0, idx), ...queue.slice(idx + 1)];
      break;
    };
    // queue에 없을 때
    // queue의 길이가 cacheSize보다 작다면
    // queue에 캐시 push하기
    // answer += 5;
    // queue의 길이가 cacheSize와 같다면
    // rear 1 더하기
    // front 1 더하기
    // (front - 1)자리를 새로운 캐시로 덮어쓰기
    // answer += 5;
    // queue에 있을 때
    // 해당 index를 제외하고 slice를 통해 새로운 배열을 만들고
    // rear - 1 하고
    // rear 자리에 새로운 캐시 넣기
  }
      console.log("answer :", answer)
    
};

*/
