const caesar = (v, n) => {
  if (v === " ") {
    return v;
  } else if (v === v.toLowerCase()) {
    return v.charCodeAt() + n > 122
      ? String.fromCharCode(v.charCodeAt() + n - 26)
      : String.fromCharCode(v.charCodeAt() + n);
  } else {
    return v.charCodeAt() + n > 90
      ? String.fromCharCode(v.charCodeAt() + n - 26)
      : String.fromCharCode(v.charCodeAt() + n);
  }
};

const solution = (s, n) => [...s].map((v) => caesar(v, n)).join("");
