const input = require('fs').readFileSync('./2869.txt').toString().split(' ');

function snail(input) {
    const daytime = input[0]*1;
    const night = input[1]*1;
    const height = input[2]*1;
    let days = 0;
    
    days = Math.ceil((height - night) / (daytime - night));
    return days;
}

console.log(snail(input));
