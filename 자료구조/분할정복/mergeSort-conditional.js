/** 분할 정복 (조건문 ver) */
class MergeSort {
  static desc = (arr) => this.#sort(arr, "desc");
  static asce = (arr) => this.#sort(arr, "asce");

  static #sort = (arr, type) => {
    if (arr.length < 2) {
      return arr;
    }

    const queue = [...arr.map((v) => [v])];

    while (queue.length > 1) {
      const arr1 = queue.shift();
      const arr2 = queue.shift();
      const next = this.#merge(arr1, arr2, type);
      queue.push(next);
    }

    return queue[0];
  };
  static #merge = (arr1, arr2, type) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      const cur1 = arr1[i];
      const cur2 = arr2[j];
      if (cur1 === cur2) {
        result.push(cur1, cur2);
        i += 1;
        j += 1;
      }
      if (
        (type === "asce" && cur1 > cur2) ||
        (type === "desc" && cur1 < cur2)
      ) {
        result.push(cur2);
        j += 1;
        continue;
      }

      result.push(cur1);
      i += 1;
    }

    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
  };
}

const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

console.log("origin", arr);
console.log("desc", MergeSort.desc(arr));
console.log("asce", MergeSort.asce(arr));

console.log("empty", MergeSort.desc([]));
