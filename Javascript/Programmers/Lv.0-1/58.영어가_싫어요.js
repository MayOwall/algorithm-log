const nums = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const solution = (numbers) => {
  nums.forEach((v, idx) => {
    numbers = numbers.replace(new RegExp(`${v}`, "g"), `${idx}`);
  });
  return Number(numbers);
};
