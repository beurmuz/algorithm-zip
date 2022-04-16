var circle = function(n) {
    var area = n*n*3.14;
    return area;
};

var n = parseInt(prompt('반지름의 길이를 입력해주세요.'));
console.log(circle(n));