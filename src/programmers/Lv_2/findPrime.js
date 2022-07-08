// 내 풀이
/*
    1. split한 numbers 배열에 소수 있는지 검사하기
    2. 원본값이랑 split한 배열 reverse해서 검사하기

    일단 split한 배열의 length가 2이하일때만 구현함
    + 길이가 2 이상이면 어찌할까
*/

function solution(numbers) {
    let answer = 0;
    let numbersArr = numbers.split('');
    let primeArr = [];
    // 1. 쪼개서 1자릿수 씩 검사 
    for(let x of numbersArr) {
        if(checkPrime(x)) primeArr.push(x);
    }
    
    // 2. 원본 값으로 검사, reverse후 join한걸로 검사
    if(checkPrime(numbers)) primeArr.push(numbers);
    let numbersReverse = numbersArr.reverse().join('');
    if(checkPrime(numbersReverse)) primeArr.push(numbersReverse);
    
    return answer = primeArr.length;
}

function checkPrime(num) {
    if(num === '1') return false;
    for(let i = 2; i <= parseInt(num/2); i++) {
        if(num % i === 0) return false;
    }
    return true;
}


// 다른 풀이보고 다시 풀어보기
/*
    근데 이거 속도가 너무 오래걸린다
*/
function solution(numbers) {
    let answer = 0;

    let n = numbers.split('');
    let nums = [];
    combination(n,'');

    function combination(a, s) {
        if (s.length > 0) {
            if (!nums.includes(Number(s))) {
                nums.push(Number(s));
                if (checkPrime(Number(s))) {
                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (var i = 0; i< a.length; i++) {
                var t = a.slice(0)
                t.splice(i,1);
                console.log(t);
                combination(t,s + a[i]);
            }
        }
    }
    return answer;
}

function checkPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= parseInt(num/2); i++) {
        if(num % i === 0) return false;
    }
    return true;
}


// 속도가 훨씬 짧은 코드
function solution(numbers) {
    let answer = 0;
    const numArr = numbers.split("");
    const permutationAll = []; // 모든 숫자 조합을 넣을 배열 
    for (let r = 1; r <= numbers.length; r++) { // r은 자릿수
      const permutationR = Permutation(numArr, r).map((arr) => // 자릿수 1개, 자릿수2개, ... n개인 경우를 모두 구하기
        parseInt(arr.join("")) // 배열형태로 return하기에 join('') 해주기
      );
      for (let i = 0; i < permutationR.length; i++)
        permutationAll.push(permutationR[i]);
    }
    const permutationSet = [...new Set(permutationAll)]; // 중복 제거하기
    for (const number of permutationSet) {
      if (isPrime(number)) answer += 1; // 해당 수가 소수 일때마다 answer의 값을 하나씩 증가시킴 
    }
    return answer;
  }
  
  function Permutation(arr, r) {
    const result = [];
    if (r === 1) return arr.map((num) => [num]);
    arr.forEach((fixed, index, org) => {
      const rest = [...org.slice(0, index), ...org.slice(index + 1)];
      const permutation = Permutation(rest, r - 1);
      const attached = permutation.map((numbers) => [fixed, ...numbers]);
      result.push(...attached);
    });
    return result;
  }
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num >= 2;
}


// dfs랑 소수 구하기로 풀 수 있을 것 같은데...