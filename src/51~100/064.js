let n = prompt('정량을 입력하세요.');
let sevenDiv = Math.floor(n/7);
let sevenRes = Number(n%7);

let result = 0;

if(sevenRes%3 === 0) {
    threeDiv = Math.floor(sevenRes/3);
    result = sevenDiv + threeDiv;
    console.log(`7kg씩 ${sevenDiv}번, 3kg씩 ${threeDiv}번해서
총 ${result}번 옮기면 됩니다.`);
}
else if(sevenRes%3 !== 0) {
    console.log(-1);
}