const solution = (id_list, report, k) => {
  const idList = {};
  const answer = new Array(id_list.length).fill(0);
  id_list.forEach((v) => (idList[v] = [0, []]));

  report.forEach((v) => {
    const [reporter, reported] = v.split(" ");
    if (!idList[reported][1].includes(reporter)) {
      idList[reported][0] += 1;
      idList[reported][1].push(reporter);
    }
  });

  id_list.forEach((v, idx) => {
    if (idList[v][0] >= k) {
      idList[v][1].forEach((name) => (answer[id_list.indexOf(name)] += 1));
    }
  });

  return answer;
};
