var totalPrice = prompt('정산을 위해 값을 입력해주세요.').split('').map(totalPrice => parseInt(totalPrice));

for(var i = 0; i <totalPrice.length; i++) {
   if(i === 2) {
        totalPrice.splice(3,0,',');
   } 
}

// 모범답안
// // 내장함수 사용
// const n = prompt('숫자를 입력해주세요.');
// parseInt(n, 10);

// console.log(n.toLocaleString());

// // 재귀함수 사용
// function comma(s) {
//   if (s.length <= 3) {
//     return s;
//   } else {
//     return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
//   }
// }

// const n = prompt('숫자를 입력해주세요.');
// console.log(comma(n));