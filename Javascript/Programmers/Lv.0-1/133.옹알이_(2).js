const kinds = ["aya", "ye", "woo", "ma"];

const solution = (babbling) => {
  let answer = 0;
  babbling.forEach((v) => {
    v.split().forEach((a) => {
      let temp = a;
      let last = "";

      while (!!temp.length) {
        if (temp.includes("aya") && !temp.indexOf("aya")) {
          if (last === "aya") break;
          temp = temp.replace("aya", "");
          last = "aya";
        } else if (temp.includes("ye") && !temp.indexOf("ye")) {
          if (last === "ye") break;
          temp = temp.replace("ye", "");
          last = "ye";
        } else if (temp.includes("woo") && !temp.indexOf("woo")) {
          if (last === "woo") break;
          temp = temp.replace("woo", "");
          last = "woo";
        } else if (temp.includes("ma") && !temp.indexOf("ma")) {
          if (last === "ma") break;
          temp = temp.replace("ma", "");
          last = "ma";
        } else {
          break;
        }
      }

      if (!temp.length) answer += 1;
    });
  });

  return answer;
};
