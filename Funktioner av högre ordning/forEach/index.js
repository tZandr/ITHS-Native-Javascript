function forEach(a, f) {
  for (const as of a) {
    f(as);
  }
}

forEach(["foo", "bar", "baz"], alert);
