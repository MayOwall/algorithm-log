const first = [1, 2, 3, 4, 5];
const second = [2, 1, 2, 3, 2, 4, 2, 5];
const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const solution = (answers) => {
  const firstNum = answers.reduce(
    (acc, cur, idx) => (first[idx % 5] === cur ? acc + 1 : acc),
    0
  );
  const secondNum = answers.reduce(
    (acc, cur, idx) => (second[idx % 8] === cur ? acc + 1 : acc),
    0
  );
  const thirdNum = answers.reduce(
    (acc, cur, idx) => (third[idx % 10] === cur ? acc + 1 : acc),
    0
  );

  return [firstNum, secondNum, thirdNum]
    .map((v, idx) =>
      v === Math.max(firstNum, secondNum, thirdNum) ? idx + 1 : null
    )
    .filter((v) => v !== null);
};

// 예전 풀이
/*
function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    
    function search(arr) {
        let score = 0;
        let i = 0;
        while(i < answers.length) {
            for(let j = 0; j < arr.length; j++) {
                if(i % arr.length === j && answers[i] === arr[j]) score += 1;
                i += 1;
            };
        };
        return score;
    };
    
    const scoreArr = [search(person1), search(person2), search(person3)];
    const biggestNum = Math.max(...scoreArr);
    
    const winnerArr = [];
    for(let i = 0; i < scoreArr.length; i++) {
        if(scoreArr[i] === biggestNum) winnerArr.push(i + 1);
    };
    return winnerArr;
}
*/
