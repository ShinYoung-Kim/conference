(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/factorial.js
  var factorial_exports = {};
  __export(factorial_exports, {
    factorial: () => factorial
  });
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  var init_factorial = __esm({
    "src/factorial.js"() {
    }
  });

  // src/add.js
  var add_exports = {};
  __export(add_exports, {
    add: () => add
  });
  function add(a, b) {
    return a + b;
  }
  var init_add = __esm({
    "src/add.js"() {
    }
  });

  // src/fibonacci.js
  var fibonacci_exports = {};
  __export(fibonacci_exports, {
    fibonacci: () => fibonacci
  });
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  var init_fibonacci = __esm({
    "src/fibonacci.js"() {
    }
  });

  // src/index.js
  for (let i = 0; i < 10; i++) {
    console.log(i);
    const factorial2 = (init_factorial(), __toCommonJS(factorial_exports));
    console.log(factorial2(i));
    const add2 = (init_add(), __toCommonJS(add_exports));
    console.log(add2(i, i));
    const fibonacci2 = (init_fibonacci(), __toCommonJS(fibonacci_exports));
    console.log(fibonacci2(i));
  }
})();
