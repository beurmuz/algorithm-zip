// 내 풀이
/*
    arr1, arr2를 forEach로 각각 2진법으로 만들고 padStart로 자릿수까지 맞춰준 후, 
    sumArr를 만들어 값을 비교해 둘중 하나라도 1이면 #을 넣으려 했으나
    값 비교에서 계속 빈배열이 나와서 결국 중단하고 답을 찾아봤다. 

    코드 엄청 길게 쓰고 작성하고 있었는데 다들 짧게 끝냈더라..^^
*/
function solution(n, arr1, arr2) {
    let answer = [];
    let binaryArr1 = [];
    let binaryArr2 = [];
    let sumArr = Array.from({length: n}, () => Array(n).fill(0));
    
    // 이진수 변환
    arr1.forEach((v) => {
        let binaryNum = v.toString(2);
        binaryArr1.push(binaryNum.padStart(n, 0).split(''));
    });
    
    arr2.forEach((v) => {
        let binaryNum = v.toString(2);
        binaryArr2.push(binaryNum.padStart(n, 0).split(''));
    });
    
    // 둘중 하나라도 1이면 1로 바꿔주기
    for(let i = 0; i < n.length; i++) {
        for(let j = 0; j < n.length; j++) {
            if(binaryArr1[i][j] == '1' || binaryArr2[i][j] == '1') {
                sumArr[i][j] = '#';
            } else sumArr[i][j] = ' ';
        }
    }
    return answer;
}


// 어쨌거나 정답 풀이
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