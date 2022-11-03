// 1과 자기자신으로 나뉘어지면 소수이니
// 우선 1보다는 크고 N보다는 작은 그 사이의 숫자들을 계속 N으로 나누면 됨
// 만약 나누어떨어지면 N은 소수가 아닐 것
// 만약 모든 숫자가 나누어떨어지지 않으면 소수인 것

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) { // 소수는 2보다 커야하므로 i=2부터 시작함
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);