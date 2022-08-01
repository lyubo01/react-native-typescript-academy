const fibonacci =  (n) => ({
    [Symbol.iterator]: () => {
    let pre = 0;
    let cur = 1;
    for (let i = 0; i < 16; i++) { var temp = pre;
        pre = cur;
        cur += temp;
        if (cur < n){yield cur;} 
    }
    }   
});
console.log([...fibonacci(n)]);