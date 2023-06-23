const getLeftDay = (progress, speed) => {
  return Math.ceil((100 - progress) / speed);
};

const getSchedule = (leftDays) => {
  const answer = [];
  let stack = 0;
  let curLeftDay;

  leftDays.forEach((leftDay) => {
    if (!curLeftDay) {
      curLeftDay = leftDay;
      stack += 1;
      return;
    }
    if (leftDay <= curLeftDay) {
      stack += 1;
    } else {
      answer.push(stack);
      stack = 1;
      curLeftDay = leftDay;
    }
  });
  if (!!stack) answer.push(stack);

  return answer;
};

const solution = (progresses, speeds) => {
  const leftDays = progresses.map((progress, i) =>
    getLeftDay(progress, speeds[i])
  );

  const schedule = getSchedule(leftDays);
  return schedule;
};
