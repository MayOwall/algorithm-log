const solution = (n, arr1, arr2) => {
  const binary1 = arr1.map((v) => v.toString(2).padStart(n, "0").split(""));
  const binary2 = arr2.map((v) => v.toString(2).padStart(n, "0").split(""));

  return new Array(n)
    .fill(new Array(n).fill(" "))
    .map((a, idxA) =>
      a
        .map((_, idxB) =>
          binary1[idxA][idxB] === "1" || binary2[idxA][idxB] === "1" ? "#" : " "
        )
        .join("")
    );
};

// 기존 코드
/*
function solution(n, arr1, arr2) {
    const binaryArr1 = arr1.map(num => ([...(num.toString(2).padStart(n, 0))]));
    const binaryArr2 = arr2.map(num => ([...(num.toString(2).padStart(n, 0))]));

    binaryArr2.forEach((a, i) => {
        a.forEach((b, j) => {
            if(binaryArr1[i][j] === '0' && b === '1') {
                binaryArr1[i][j] = '1';
            }
        })
    })
    
    const answer = binaryArr1.map(a => {
        const v = a.map(b => b === '1' ? '#' : ' ');
        return v.join('');
    });
    
    return answer;
}
*/
