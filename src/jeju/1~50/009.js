var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);

// concat()은 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환함
// concat('문자열 사이에 넣을 것', str01, '문자열 사이에 넣을 것', str02, ...);