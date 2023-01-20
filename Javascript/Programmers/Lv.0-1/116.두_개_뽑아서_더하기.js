// 서로 다른 두 수를 뽑아서 만들 수 있는 숫자의 개수
const solution = (numbers) => {
  const answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const num = numbers[i] + numbers[j];
      !answer.includes(num) && answer.push(num);
    }
  }

  return answer.sort((a, b) => a - b);
};

// 예전 풀이
/*
function solution(numbers) {
    const numArr = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            num = numbers[i] + numbers[j];
            numArr.push(num);
        };
    };

    const answer = [...(new Set(numArr))].sort((a,b) => a - b);
    return answer;
};
*/
