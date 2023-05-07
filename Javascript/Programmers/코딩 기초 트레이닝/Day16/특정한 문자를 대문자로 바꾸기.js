const solution = (my_string, alp) =>
  my_string.replace(new RegExp(`${alp}`, "g"), alp.toUpperCase());
