// 문자열을 문제에서 요구하는 방식의 배열로 변환하는 로직
const splitter = (arr) => {
  const temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    temp.push(`${arr[i]}${arr[i + 1]}`.toLowerCase());
  }
  return temp.filter((v) => /^[a-z]{2}$/.test(v)).sort((a, b) => a - b);
};

// 교집합을 구하는 로직
const getN = (smallArr, bigArr) => {
  const n = [];
  for (let i = 0; i < smallArr.length; i++) {
    if (bigArr.includes(smallArr[i])) {
      n.push(smallArr[i]);
      // 엣지케이스 2. 한번 비교한 원소는 다시 비교 안하도록 처리
      bigArr[bigArr.indexOf(smallArr[i])] = null;
    }
  }
  return n;
};

const solution = (str1, str2) => {
  str1 = splitter(str1);
  str2 = splitter(str2);
  // 엣지케이스 1. 둘 다 공집합이면 65536을 반환
  if (!str1.length && !str2.length) return 65536;

  // 두 배열 중 더 작은 배열을 기준으로 교집합(n) 구하기
  const n = str1.length < str2.length ? getN(str1, str2) : getN(str2, str1);

  const nLength = n.length;
  const uLength = str1.length + str2.length - nLength;

  return Math.floor((nLength / uLength) * 65536);
};
