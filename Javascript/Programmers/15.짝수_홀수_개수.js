const solution = (num_list) => [
  num_list.filter((v) => v % 2 === 0).length,
  num_list.filter((v) => v % 2 !== 0).length,
];
