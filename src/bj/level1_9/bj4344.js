let input = require('fs').readFileSync('./4344.txt').toString().split('\r\n');
let testcaseNum = input[0]*1;

function maybeAverage(testcaseNum, input) {
    for(let i = 1; i < input.length; i++) {
        let testcase = input[i].split(' ');
        let totalNum = testcase[0];
        let sum = 0;
        for(let j = 1; j < testcase.length; j++) {
            sum += parseInt(testcase[j]);
        }
        let avg = sum/totalNum;
        let count = 0;
        for(let j = 1; j < testcase.length; j++) {
            if(testcase[j] > avg) {
                count+=1;
            }
        }
        let percentage = (count/totalNum)*100;
        console.log(`${percentage.toFixed(3)}%`); 
    }
}

maybeAverage(testcaseNum,input);