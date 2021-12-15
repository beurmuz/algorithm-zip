let input = require('fs').readFileSync('./2798.txt').toString().split('\r\n');

function blackJack(input) {
    let N = input[0].split(' ')[0]*1;
    let M = input[0].split(' ')[1]*1;
    let cardList = input[1].split(' ');
    let max = 0;
    for(let i = 0; i < cardList.length; i++) {
        for(let j = 1; j < cardList.length; j++) {
            for(let x = 2; x < cardList.length; x++) {
                let sum = cardList[i]*1+cardList[j]*1+cardList[x]*1;
                if(sum <= M && sum > max) {
                    max = sum;
                }
            }
        }
    }
    return max;
}

console.log(blackJack(input));