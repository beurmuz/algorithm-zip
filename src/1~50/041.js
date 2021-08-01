const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
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