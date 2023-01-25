const solution = (s) => {
  const answer = [];
  const arr = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]")).sort(
    (a, b) => a.length - b.length
  );

  arr.forEach((a) => {
    a.forEach((b) => {
      if (!answer.includes(b)) answer.push(b);
    });
  });

  return answer;
};

// 예전풀이
/*
function solution(s) {
    const answer = [];
    arr = s.slice(2, -2).split("},{");
    arr.map((a) => {
        const temp = a.split(",");
        return temp.map((a) => Number(a));
    })
        .sort((a, b) => a.length - b.length)
        .forEach((a) => {
            for (let i = 0; i < a.length; i++) {
                if (!answer.includes(a[i])) {
                    answer.push(a[i]);
                    break;
                }
            }
        });

    return answer;
}

*/
