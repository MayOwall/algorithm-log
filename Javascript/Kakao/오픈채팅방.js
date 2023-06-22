const userInfo = {};

const solution = (records) => {
  const stack = [];
  records.forEach((record) => {
    const [type, id, nick] = record.split(" ");
    if (type !== "Leave") userInfo[id] = nick;
    if (type !== "Change") stack.push([type, id]);
  });

  const answer = stack.map(
    ([type, id]) =>
      `${userInfo[id]}님이 ${type === "Enter" ? "들어왔" : "나갔"}습니다.`
  );
  return answer;
};
