// 풀이
/*
    풀다가 모르겠어서 풀이 참고하며 풀었다.
*/
function solution(s) {
    let answer = 0;
    let result = [];
    for(i = 1 ; i <= Math.ceil(s.length/2) ; i++) { // 자릿수 늘려나가기 (ex. 1,2,3,...)
        sentence = ""; 
        pivot = 0; 
        while(pivot < s.length) {  
           count = 1;
           while(s.slice(pivot,pivot+i) == s.slice(pivot+i,pivot+i+i)) { // 앞 뒤 문자가 같은 경우에만 반복횟수 세기
                count += 1;
                pivot += i; // 비교가 끝난 위치를 pivot에 넣어줌 pivot = pivot + 1
           }
           if(count > 1) sentence += count;
           sentence = sentence + s.slice(pivot,pivot+i);
           pivot = pivot+i;
        } 
        // temp = [];
        // temp.s = sentence;
        // temp.l = sentence.length;
        // result.push(temp);
        result.push(sentence.length);
    }
    // result.sort(function(a,b){return a.len-b.len})     
    // return result[0].len;
    return Math.min(...result);
}


// 속도 더 줄이기
function solution(s) {
    let answer = 0;
    let min = s.length;
    for(i = 1 ; i <= Math.ceil(s.length/2) ; i++) { // 자릿수 늘려나가기 (ex. 1,2,3,...)
        sentence = ""; 
        pivot = 0; 
        while(pivot < s.length) {  
           count = 1;
           while(s.slice(pivot,pivot+i) == s.slice(pivot+i,pivot+i+i)) { // 앞 뒤 문자가 같은 경우에만 반복횟수 세기
                count += 1;
                pivot += i; // 비교가 끝난 위치를 pivot에 넣어줌 pivot = pivot + 1
           }
           if(count > 1) sentence += count;
           sentence = sentence + s.slice(pivot,pivot+i);
           pivot = pivot+i;
        } 
        min = sentence.length < min ? sentence.length : min; 
    }
    return min;
}


// 다른 사람 풀이1
let s = ''
const solution = s => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map(i => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
      ['', '', 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];


// 속도가 빠른 코드2
function solution(s) {
    let minLen = s.length; //현재 스트링 길이로 시작
    
    // 압축하는 문자열 길이를 1개씩부터, s의 반 까지 시도
    top: for (let n = 1; n <= s.length / 2; n++) {
      // 이번 트라이얼의 문자열 길이 초기화
      let curLen = 0;
      for (let i = 0; i < s.length; i += n) {
        // 이번 트라이얼의 길이 n 만큼 테스트를하고, 일치하는 수만큼 카운터로 계산
        // 불일치 시에 다음으로 진행
        let counter = 1;
        while (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
          i += n;
          counter++;
        }
        // 만약 하나도 일치가 없었으면, 테스트했던 문자열의 길이만큼만 더해주고,
        // 일치한 문자열이 하나라도 존재했다면 카운터를 스트링으로 변환 후 길이를 더해줌
        if (counter !== 1) {
          curLen += n + (counter + "").length;
        } else {
          // 1일경우 그냥 n을 더해주는데, 혹시 맨 마지막에 남은 문자열이 n이하일 경우
          // 남는 수만 더해줌
          curLen += s.length < i + n ? s.slice(i, i + n).length : n;
        }
        // 현재까지의 최소길이보다 현재길이가 커지는 순간, 다음 트라이얼 시작
        if (minLen <= curLen) continue top;
      }
      // 여기까지 살아남았으면 이번 길이가 최소길이
      minLen = curLen;
    }
    return minLen;
  }