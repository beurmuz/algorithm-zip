let input = 72;

function primeFactorization(input) {
    div = 2;
    result = [];
    while(input != 1) {
        if(input%div === 0) {
            result.push(div);
            input /= div;
        } else {
            div++;
        }
    }
    return result;
}

console.log(primeFactorization(input));
