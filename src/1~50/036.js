var num = parseInt(prompt('1~9까지의 숫자 중 하나를 입력하세요.'));
var sum = '';
for(i = 1; i<10; i++) {
    sum += (String(num*i)+ ' ');
}
console.log(sum);