const getArr = (v) => v.toString(2).padStart(16, "0");
const getNum0 = (arr) => arr.filter((v) => !Number(v)).length;

const solution = (numbers) =>
  numbers.map((v) => {
    const arr = getArr(v);

    outer: while (true) {
      const nextArr = getArr(++v);
      let count = 0;
      for (let i = 0; i < 16; i++) {
        if (arr[i] !== nextArr[i]) count++;
        if (count > 2) continue outer;
      }
      return v;
    }
  });
