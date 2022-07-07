// 내 풀이
/*
    정확성 16 / 100

    균형잡힌 괄호 문자열이면서 올바른 괄호 문자열인 것까지만 판별해냄
*/
function solution(w) {
    let answer = '';
    
    // 1. 입력이 빈 문자열이면 빈 문자열 반환
    if(w === '') return ''; 
    
    if(w.match(/[(]{1}/g).length === w.match(/[)]{1}/g).length) { // 균형잡힌 괄호 문자열 이라면
        let u = w;
        let v = '';
        let pairCount = 0;
        for(let x of u) {
            if(x === '(') pairCount += 1;
            else pairCount -= 1;
        }
        if(pairCount === 0) answer = u;
        else { // 올바른 괄호 문자열이 아니라면
            u += '(';
        }
    }
    return answer;
}


// 22.07.06 풀이보고 풀어보기
function solution(w) {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열 반환
  if(w.length === 0) return ''; 
  
  // 2. 문자열 w를 구 두형잡힌 괄호 문자열 u, v로 분리 
  let leftCount = 0, rightCount = 0; // (, )
  let location = -1;
  for(let i = 0; i < w.length; i++) {
      if(w[i] === '(') rightCount += 1;
      else leftCount += 1;
      if(leftCount === rightCount) {
          location = i;
          break;
      }
  }
  let u = w.slice(0, location+1);
  let v = w.slice(location+1);
  let str = '';
  console.log(u, v);
  
  // 3. u가 올바른 괄호 문자열이면 v에 대해 1단계부터 다시 수행
  if(isRight(u)) return u.concat(solution(v)); // 3.1 수행한 결과에 문자열 u를 이어 붙인 후 반환
  else {
      // 4. 문자열 u가 올바른 괄호 문자열이 아니라면 아래 과정 수행
      str += '(';
      str += solution(v);
      str += ')';
      
      // 4.4 u의 양끝 문자 제거 후 남은 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
      let temp = u.split('');
      temp.shift();
      temp.pop();
      for(let i = 0; i < temp.length; i++) {
          if(temp[i] === ')') temp[i] = '(';
          else temp[i] = ')';
      }
      u = temp.join('');
      str = str.concat(u);
      
      // 생성된 문자열 반환
      return str;
  }
}

function isRight(u) {
  let stack = [];
  let popCount = 0;
  for(let i = 0; i < u.length; i++) {
      if(u[i] === '(') stack.push('(');
      else {
          if(stack.length > 0) {
              stack.pop();
              popCount += 1;
          }
          else return false; // stack.length == 0
      }
  }
  return stack.length === 0 ? true : false;
}


// 다른 풀이
function solution(w) {
    // 1-1 입력이 빈 문자열인 경우, 빈 문자열을 반환 
    if(w.length==0) return '';
  
    // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리
    let lcnt = 0; // (
    let rcnt = 0; // )
    let loc = -1;
    for(let i=0; i<w.length; i++){
      if(w[i]=='(') lcnt++;
      if(w[i]==')') rcnt++;
      if(lcnt==rcnt){
        loc = i;
        break;
      }
    }
    let u = w.slice(0,loc+1);
    let v = w.slice(loc+1);
    let str = '';
  
    // 3. u가 "올바른 괄호 문자열"이면 v에 대해 1단계부터 다시 수행합니다. 
    if(isRight(u)){
      // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
      return u.concat(solution(v));
    }
    // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
    else{
      // 4-1, 4-2, 4-3
      str += '('
      str += solution(v);
      str += ')'
      // 4-4. u의 첫째와 마지막 문자를 제거 후 남은 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
      let temp = u.split('')
      temp.shift();
      temp.pop();
      for(let i=0; i<temp.length; i++){
        if(temp[i]==')') temp[i]='(';
        else temp[i]=')';
      }
      u=temp.join('')
      str=str.concat(u)
      // 4-5. 생성된 문자열을 반환합니다.
      return str
    }
  }
  
  function isRight(u){
    let stack = [];
    let popCnt;
    for(let i=0; i<u.length; i++){
      if(u[i]=='('){ // "("
        stack.push('(');
      }
      else{ // ")"
        if(stack.length>0){
          stack.pop();
          popCnt=1;
        }
        else{ // stack.length == 0
          return false;
        }
      }
    }
    return stack.length==0 ? true : false
  }


  // 고수의 풀이
  /*
    https://school.programmers.co.kr/learn/courses/30/lessons/60058/solution_groups?language=javascript
  */
  function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
  }
  
  function solution(p) {
    if (p.length < 1) return "";
  
    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);
  
    const u = p.slice(0, pivot);
    const v = solution(p.slice(pivot, p.length));
  
    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u);
  }
  