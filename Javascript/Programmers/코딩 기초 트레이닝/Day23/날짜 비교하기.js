const solution = ([year1, month1, day1], [year2, month2, day2]) =>
  year1 > year2
    ? 0
    : year2 > year1
    ? 1
    : month1 > month2
    ? 0
    : month2 > month1
    ? 1
    : day1 >= day2
    ? 0
    : 1;
