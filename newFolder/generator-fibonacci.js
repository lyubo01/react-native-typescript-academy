var fibonacci = { [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (let i = 0; i < 16; i++) { var temp = pre;
    pre = cur;
    cur += temp;
    yield cur; }
    } };
    for (var n of fibonacci) {
    console.log(n);
    }