let input = require('fs').readFileSync('./4153.txt').toString().split('\r\n');

function triangle(input) {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let side = input[i].split(' ');
        if(side[0]*1 === 0) {
            break;
        }
        shortSide = Math.pow(side[0]*1,2)+Math.pow(side[1]*1,2);
        longSide = Math.pow(side[2]*1,2);
        if(shortSide === longSide) {
            result.push('right');
        } else {
            result.push('wrong');
        }
    }
    return result;
}

console.log(triangle(input));