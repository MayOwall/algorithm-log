// 1. 문자별로 sort
const solution = (strings, n) =>
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }
    return a[n].charCodeAt() - b[n].charCodeAt();
  });

// 기존 코드
/*
function solution(strings, n) {
    return strings.sort((a, b) => {
        if(a[n] !== b[n]) {
            return a.charCodeAt(n) - b.charCodeAt(n)
        } else {
            for(let i = 0; i < a.length; i++) {
                if(a[i] !== b[i]) return a.charCodeAt(i) - b.charCodeAt(i);
            };
            return 1;
        }
    });
}
*/
