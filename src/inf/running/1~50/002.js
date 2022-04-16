// O

var arr = [200, 100, 300];
arr.splice(2,0,10000);
console.log(arr);

// 배열의 특정 위치에 값 추가하기 : splice(시작지점, 삭제 개수, 값);
// splice는 배열을 추가할 수도, 삭제할 수도 있음 