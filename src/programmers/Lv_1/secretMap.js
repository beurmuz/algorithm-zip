// 내 풀이 22.06.29 업데이트!
/*
    풀이는 좀 길지만 시간은 10초대 나온다!

    arr1, arr2를 map으로 각각 2진법으로 만들고 padStart로 자릿수를 맞춰줌
    각각의 값을 비교하여 둘 중 하나라도 1이면 #을, 0이면 공백으로 판별해 answer에 push함
*/
function solution(n, arr1, arr2) {
    let answer = [];
    let sumArr = [];
    
    // 이진수 변환
    let binaryArr1 = arr1.map((v) => {
        let binaryNum = v.toString(2);
        return binaryNum.padStart(n, 0);
    });
    let binaryArr2 = arr2.map((v) => {
        let binaryNum = v.toString(2);
        return binaryNum.padStart(n, 0);
    });
    
    // 둘 중 하나라도 1이면 #를, 0이면 공백으로 바꿔줌
    for(let i = 0; i < binaryArr1.length; i++) {
        let arr1 = binaryArr1[i].split('');
        let arr2 = binaryArr2[i].split('');
        let line = '';
        for(let j = 0; j < n; j++) {
            if(arr1[j] == 1 || arr2[j] == 1) {
                line += '#';
            } else line += ' ';            
        }
        answer.push(line);
    }
    return answer;
}



// 어쨌거나 다른 풀이들
/*
    대부분의 풀이를 보면 다들 '|'를 썼던데, 잘 모르겠어서 찾아보니 'single vertical bar'라고 한다.
    single vertical bar는 `(A|B)` 형태로 작성할 수 있는데, 이는 이진수로 변환한 후 각 자리 버림 합을 구해 리턴해준다고 한다.
    let row = (arr1[i] | arr2[i])를 console에 찍어보면 31, 21, 29, 19, 31이 나오고, 여기에 toString(2)까지 해주면 11111,10101,11101,10011,11111이 나온다.

    이후 '0'.repeat으로 자릿수를 맞춰준 후
    정규표현식으로 1이면 #을, 0이면 공백으로 대체해준 후 출력하면 된다.
*/
function solution(n, arr1, arr2) {
    const answer = [];
    for (let i = 0; i < n; i++) {
      let row = (arr1[i] | arr2[i]).toString(2); //Bitwise
      row = "0".repeat(n - row.length) + row;
      row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
      answer.push(row);
    }
    return answer;
}


// 바로 위 코드 시간 줄이기 22.06.29
/*
    내 생각엔 repeat이 시간을 많이 잡아먹는 듯 하여 padStart를 이용함으로써 시간을 줄임
*/
function solution(n, arr1, arr2) {
    const answer = [];
    for (let i = 0; i < n; i++) {
      let row = (arr1[i] | arr2[i]).toString(2).padStart(n, 0); //Bitwise
        row = row.replace(/0/g, ' ').replace(/1/g, '#');
      // row = "0".repeat(n - row.length) + row;
      // row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
      answer.push(row);
    }
    return answer;
}


// 더 간결한 다른 풀이
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}


// padStart를 이용한 더 간단한 풀이
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))


// toString없이 풀기
function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    //manually turning decimals to binaries cos i can!
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }    
    return answer;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart 

// 06.29 다시 풀기
let solution = (n, a, b) => a.map((a,i) => (a|b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'));

