const solution = (num_list) => {
  let odd = "";
  let even = "";
  num_list.forEach((v) =>
    v % 2 ? (odd += v.toString()) : (even += v.toString())
  );
  return Number(odd) + Number(even);
};
