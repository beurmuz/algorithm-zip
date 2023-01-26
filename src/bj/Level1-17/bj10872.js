let input = 10;
let sum = 1;

function factorial(input) {
    sum = sum*input;
    if(input === 1) {
        return sum;
    }
    input--;
    return factorial(input);
}

console.log(factorial(input));