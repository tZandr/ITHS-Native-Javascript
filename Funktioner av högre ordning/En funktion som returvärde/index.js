function f() {
  return function () {
    return "Hello World!";
  };
}

console.log(f()()); // Hello World!
