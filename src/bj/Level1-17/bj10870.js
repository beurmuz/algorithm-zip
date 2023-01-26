let input = 10;
function fibonacci(input) {
    if(input === 0) return 0;
    if(input === 1 || input === 2) return 1;
    return fibonacci(input - 1) + fibonacci(input - 2);
}

console.log(fibonacci(input));