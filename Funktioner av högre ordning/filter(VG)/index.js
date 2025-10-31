function filter(a, f) {
  let n = [];
  for (const as of a) {
    if (f(as)) {
      n.push(as);
    }
  }
  return n;
}

console.log(filter([5, 10, 15], (value) => value !== 5));
