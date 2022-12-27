// 나의 풀이
const solution = (id_pw, db) => {
  const arr = db.map((v) =>
    v[0] === id_pw[0] && v[1] === id_pw[1]
      ? "login"
      : v[0] === id_pw[0]
      ? "wrong pw"
      : "fail"
  );
  return arr.includes("login")
    ? "login"
    : arr.includes("wrong pw")
    ? "wrong pw"
    : "fail";
};

// 더 좋은 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
