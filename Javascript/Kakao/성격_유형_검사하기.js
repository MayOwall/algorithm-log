const solution = (survey, choice) => {
  const score = { R: 0, T: 0, C: 0, F: 0, M: 0, J: 0, A: 0, N: 0 };

  choice.forEach((v, idx) => {
    if (v < 4) {
      score[survey[idx][0]] += 4 - v;
    } else if (v > 4) {
      score[survey[idx][1]] += v - 4;
    }
  });

  return `${score.T > score.R ? "T" : "R"}${score.F > score.C ? "F" : "C"}${
    score.M > score.J ? "M" : "J"
  }${score.N > score.A ? "N" : "A"}`;
};

// 예전 풀이
/*
function solution(survey, choices) {
    const point = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0
    };
    
    survey.forEach((a, i) => {
        const num = 4 - choices[i];
        if(num > 0) {
            point[survey[i].slice(0, 1)] += num;
        } else if (num < 0) {
            point[survey[i].slice(1, 2)] -= num;
        };
    });
    
    const comparePoint = (a, b) => {
        if(point[b] > point[a]) {
            return b;
        } else{
            return a;
        }
    };
    
    const result = `${comparePoint('R', 'T')}${comparePoint('C', 'F')}${comparePoint('J', 'M')}${comparePoint('A', 'N')}`;
    return result;
}
*/
