const solution = (tickets) => {
  tickets = tickets.sort();
  const answer = [];

  const dfs = (airport, leftTickets, log) => {
    if (!leftTickets.length) answer.push([...log, airport]);

    leftTickets.forEach(([depart, arrive], i) => {
      if (depart !== airport) return;
      const nextTickets = [
        ...leftTickets.slice(0, i),
        ...leftTickets.slice(i + 1),
      ];
      dfs(arrive, nextTickets, [...log, depart]);
    });
  };

  dfs("ICN", tickets, []);
  return answer[0];
};
