const solution = (numbers) => {
  const arr = numbers.split("");
  let nums = [];

  // 조합 가능한 숫자를 찾는 로직
  const permutation = (output, rests, length) => {
    if (output.length === length) {
      if (!nums.includes(output * 1)) nums.push(output * 1);
      return;
    }
    rests.forEach((v, i) => {
      const nextOutput = `${output}${v}`;
      const nextRests = rests.filter((_, restIdx) => restIdx !== i);
      permutation(nextOutput, nextRests, length);
    });
  };

  // arr의 모든 값들을 시작값으로 지정하기 위해 반복문 수행
  for (let i = 0; i < arr.length; i++) {
    const firstSelect = arr[i];
    const firstRests = arr.filter((_, restIdx) => restIdx !== i);

    // 1부터 최대 자릿수까지 순회
    for (let j = 1; j <= arr.length; j++) {
      permutation(firstSelect, firstRests, j);
    }
  }

  // 소수 판별 핸들러
  const checkPrimeNumber = (number) => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      const remainder = number % i;
      if (remainder === 0) return false;
    }
    return true;
  };

  nums = nums.filter((v) => checkPrimeNumber(v * 1));
  return nums.length;
};
