var num1 = parseInt(prompt('숫자를 입력하세요.'));
var num2 = [];
var result = '';

while(num1) {
    num2.push(num1%2);

    num1 = parseInt(num1/2, 10);
}

num2.reverse();

num2.forEach((num1) => {
    result += num1;
})
console.log(result);