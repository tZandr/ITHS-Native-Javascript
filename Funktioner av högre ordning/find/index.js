function find(a, f) {
  for (const as of a) {
    if (f(as)) {
      return as;
    }
  }
}

console.log(
  find([1, 2, 3], function (n) {
    return n > 2;
  })
); // 3
console.log(find(["Hej", "Hejdå"], (s) => s.length === 5)); // Hejdå
