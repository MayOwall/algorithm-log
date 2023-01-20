const solution = (spell, dic) =>
  dic
    .map(
      (v) => JSON.stringify(v.split("").sort()) === JSON.stringify(spell.sort())
    )
    .includes(true)
    ? 1
    : 2;
