var num = prompt('양의 정수를 입력하세요.').split('');
console.log(num);
var result =0;

for(var i = 0; i < num.length; i++) {
    result += parseInt(num[i]);
}
console.log(result);