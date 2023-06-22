const carInfo = {};

const getTime = (start, end) => {
  const startTime = new Date(`1995-12-17T${start}:00`).getTime();
  const endTime = new Date(`1995-12-17T${end}:00`).getTime();
  return (endTime - startTime) / 60000;
};

const getTotalTime = (times) => {
  let total = 0;
  for (let i = 0; i < times.length; i += 2) {
    total += getTime(times[i], times[i + 1] || "23:59");
  }
  return total;
};

const getFee = (totalTime, fees) => {
  const [min, minFee, time, addFee] = fees;
  if (totalTime <= min) return minFee;

  return Math.ceil((totalTime - min) / time) * addFee + minFee;
};

const solution = (fees, records) => {
  records.forEach((record) => {
    const [time, carNum, type] = record.split(" ");
    if (!carInfo[carNum]) carInfo[carNum] = [];
    carInfo[carNum].push(time);
  });

  const carNums = Object.keys(carInfo).sort((a, b) => a * 1 - b * 1);
  const answer = carNums
    .map((carNum) => getTotalTime(carInfo[carNum]))
    .map((totalTime) => getFee(totalTime, fees));
  return answer;
};
