// 이미 입차되어 있던 차가 나오는 경우는 어떡하지
const getTime = (time) => {
  const [hour, min] = time.split(":");
  return Number(hour) * 60 + Number(min);
};

const getSum = (info, car) => {
  const arr = info[car];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && !(i % 2)) {
      sum += getTime("23:59") - arr[i];
    } else if (i % 2) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }
  return sum;
};

const getFee = (sum, fees) => {
  if (fees[0] >= sum) return fees[1];
  return Math.ceil((sum - fees[0]) / fees[2]) * fees[3] + fees[1];
};

const solution = (fees, records) => {
  const info = {};
  records.forEach((v) => {
    const [time, num] = v.split(" ");
    if (!info[num]) info[num] = [];
    info[num].push(getTime(time));
  });

  const arr = Object.keys(info).sort((a, b) => Number(a) - Number(b));
  const answer = arr.map((car) => getFee(getSum(info, car), fees));
  return answer;
};
