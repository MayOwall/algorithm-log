const solution = (n, s) => {
  // n개의 개수는 10,000이하의 자연수
  // 모든 원소들의 합은 1이상 100,000,000 이하의 자연수
  // 무조건 한번만 순회해야 한다.
  // 사실 최대 집합은 가장 가까운 수로 나뉘어진 집합이긴 해. 즉 Math.floor((숫자) / 2)란 말이지.
  // 그러면 숫자를 n개로 나누면 되지 않을까?

  const mid = Math.floor(s / n);
  const left = s % n;

  const arr = Array.from({ length: n }, (_, idx) =>
    idx >= n - left ? mid + 1 : mid
  );
  return arr[0] ? arr : [-1];
};
