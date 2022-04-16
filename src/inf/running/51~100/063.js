let getString = prompt('문자열을 입력해주세요.');
let cutString = getString.split(' ');
let word = '';
for(let i in cutString){
    word += cutString[i][0];
}
console.log(word);