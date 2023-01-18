const solution = (new_id) => {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  return answer.length > 2
    ? answer
    : answer.padEnd(3, answer[answer.length - 1]);
};
