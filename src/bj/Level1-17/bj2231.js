let input = 216;
function divideSum(input) {
    let divideNum = String(input).split('');
    let lists = [input, ...divideNum];
    let sum = 0;
    for(let i = 0; i < lists.length; i++) {
        sum += lists[i]*1;
    }
    
    console.log(sum);
}

divideSum(input);