const solution = (str) => {
  const arr = [];
  let temp = "";
  // str을 순회하며 [숫자, pow, 옵션]으로 구성된 arr을 만들어준다.
  [...str].forEach((v) => {
    if (/\d/.test(v)) {
      temp = temp + v;
    } else {
      temp && arr.push([Number(temp), 1]);
      temp = "";
      // SDT일 때 sqrt 수 증가
      if (v === "D") arr[arr.length - 1][1] += 1;
      if (v === "T") arr[arr.length - 1][1] += 2;
      // #, * 일 때 옵션 적용
      if (v === "#") arr[arr.length - 1][2] = -1;
      if (v === "*") {
        arr[arr.length - 2]
          ? arr[arr.length - 2][2]
            ? (arr[arr.length - 2][2] *= 2)
            : (arr[arr.length - 2][2] = 2)
          : null;
        arr[arr.length - 1][2] = 2;
      }
    }
  });

  return arr.reduce(
    (acc, [a, b, c]) => (c ? acc + Math.pow(a, b) * c : acc + Math.pow(a, b)),
    0
  );
};

// 예전 풀이
/*
function solution(dartResult) {
    const tempArr = [...dartResult];
    const arr = [];
    const pointStack = [];

    tempArr.forEach((v, idx) => {
        if(!isNaN(v)) {
            if(tempArr[idx - 1] === '1' && v === '0') {
                arr[arr.length - 1] = [10];
            } else {
                arr.push([Number(v)]);
            };
        } else {
            arr[arr.length - 1].push(v);
        };
    });

    arr.forEach((v, idx) => {
        let point = v[0];

        v[1] === 'S' ? null : (v[1] === 'D' ? point = Math.pow(point, 2) : point = Math.pow(point, 3));

        pointStack.push(point);

        if(v[2] === '*') {
            pointStack[idx] = pointStack[idx] * 2;
            if(arr[idx - 1]) {
                pointStack[idx - 1] = pointStack[idx - 1] * 2;
            };
        } else if (v[2] === '#'){
            pointStack[idx] = pointStack[idx] * -1;
        }
    })

   return pointStack.reduce((a, b) => a + b, 0);
}
*/
