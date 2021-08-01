var a = parseInt(prompt('월을 입력하세요.'));
var b = parseInt(prompt('일을 입력하세요.'));

var day = new Date(2021, a-1, b);
var Weekly = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var week = Weekly[day.getDay()];
console.log(week);