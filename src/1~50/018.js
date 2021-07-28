const scores = prompt('국어, 수학, 영어 점수를 입력하세요.').split(' ');
var sum = 0;

for(var i = 0; i < 3; i++) {
    sum += parseInt(scores[i]);
}
console.log(Math.floor(sum/3));