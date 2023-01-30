const solution = (record) => {
  const info = {};
  const stack = [];

  record.forEach((v) => {
    const [act, id, name] = v.split(" ");
    if (!!name) info[id] = name;
  });

  record.forEach((v) => {
    const [act, id, name] = v.split(" ");
    if (act === "Enter") {
      stack.push(`${info[id]}님이 들어왔습니다.`);
    } else if (act === "Leave") {
      stack.push(`${info[id]}님이 나갔습니다.`);
    }
  });

  return stack;
};
