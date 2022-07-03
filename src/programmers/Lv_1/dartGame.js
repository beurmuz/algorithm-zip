// 내 풀이
/*
    - 정확성 62.5/100
    - 구현하지 못한 것
        - 2자릿수의 숫자가 들어오는 경우 split때문에 각각의 숫자로 들어옴 
            => while문으로 dartResult.length를 반복조건으로 하고 slice를 해야하나? 그럼 속도는 괜찮나?
        - *가 중첩된 경우
    - 시간도 5.35ms?이럼....
*/
function solution(dartResult) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < dartResult.length; i++) {
        // 숫자이면 일단 스택에 넣고 넘기기
        if(dartResult[i].match(/[0-9]/g)) {
            stack.push(dartResult[i]*1);
            continue;
        } 
        console.log(stack);
        let num = stack.pop();
        // 알파벳이면
        if(dartResult[i].match(/[SDT]/g)) {
            if(dartResult[i] === 'D') stack.push(Math.pow(num, 2));
            else if (dartResult[i] === 'T') stack.push(Math.pow(num, 3));
            else stack.push(num);
        } else {
            if(dartResult[i] === '*') {
                if(stack.length) {
                   let previousNum = stack.pop();
                    stack.push(previousNum*2);
                    stack.push(num*2);
                } else {
                    let num = stack.pop();
                    stack.push(num*2);
                }
            } else if(dartResult[i] === '#') {
                stack.push(-num);
            }
        }
    }
    answer = stack.reduce((acc,cur) => acc += cur);
    return answer;
}

// 숫자 아닌 모든 문자 /[^0-9]/g
// 모든 숫자 /[0-9]/g
// 모든 알파벳 /[A-Z]/g
// 특수문자 체크 /[#*]/g


// 22.07.03 다시 풀어봄!
function solution(dartResult) {
    const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
    let result = [];
    for(let dart of dartResult.match(regex)) {
        const game = [...dart.split(/([SDT]{1})/)]; // 그냥 dart.split('')로 해도 될거 같아서 해봤더니, 숫자가 두자릿수인 경우에 쪼개져서 .. 테스트케이스 오류가 남
        // 때문에 가운데에 있는 알파벳 기준으로 쪼개야함
        const score = game[0];
        
        let bonus = 1;
        let option = 1;
        
        if(game[1] === 'S') bonus = 1;
        if(game[1] === 'D') bonus = 2;
        if(game[1] === 'T') bonus = 3;
        
        if(game[2] === '*') {
            if(result.length !== 0 ) result[result.length - 1] *= 2;
            option = 2;
        }
        if(game[2] === '#') option =- 1;
        result.push(score ** bonus * option);
    }
    return result.reduce((a,b) => a+b);
}


// 다른 풀이
/*
    시간도 0점대 나오고~! 
*/
function solution(dartResult) { // if dartResult가 1S2D*3T일 때
    const regex = /\d{1,2}[SDT]{1}[*|#]?/g; // 숫자 1개 or 2개, SDT 1개, * or # 있을 경우
    let result = [];
    for (const dart of dartResult.match(regex)) { // 점수&보너스&옵션이 한 세트로 잘림. ex) dart는 1S, 2D*, 3T
      const game = [...dart.split(/([SDT]{1})/)]; // game은 1,S,  2,D,*   3,T

      // game[0]에는 무조건 숫자(score)가 들어있음
      const score = game[0]; 
      let bonus = 1; 
      let option = 1;
      // game[1]에는 알파벳이 들어있음 (S,D,T중 하나)
      if (game[1] === "S") bonus = 1; // score^1
      if (game[1] === "D") bonus = 2; // score^2
      if (game[1] === "T") bonus = 3; // score^3
  
      // game[2]는 옵션. 있을 수도 있고 없을 수도 있음
      if (game[2] === "*") { 
        if (result.length !== 0) result[result.length - 1] *= 2; // (result.length가 있으면) == (이전 값이 있으면) 이전 값도 2배로 만들어줘야 함
        option = 2;
      }
      if (game[2] === "#") option = -1; // 현재 값을 - 해주어야 함
  
      result.push(score ** bonus * option);
    }
  
    return result.reduce((a, b) => a + b); // 누적합하기
  }



  // 또 다른 풀이
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}