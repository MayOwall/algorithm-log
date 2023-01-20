const solution = (array, n) =>
  array.reduce(
    (acc, cur) => {
      const absolute = Math.abs(n - cur);
      if (absolute < acc[1]) {
        // 절대값이 작을 때 : 현재값을 가장 가까운 수로 지정
        return [cur, absolute];
      } else if (absolute === acc[1]) {
        // 절대값이 같을 때 : 현재값과 기존의 값 중 더 작은 수로 지정
        return [cur < acc[0] ? cur : acc[0], acc[1]];
      } else {
        // 절대값이 클 때 : 패스
        return acc;
      }
    },
    [0, n]
  )[0];
