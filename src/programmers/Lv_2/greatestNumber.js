// 내 처음 풀이 
/*
    numbers 배열을 정렬하는데 자릿수가 2이상이면 split해서 끝자리로 내림차순 정렬 해주고,
    다른 경우에는 전부 앞자리로 내림차순 정렬을 함

    근데 정확성 6.7/100.0 ㅎㅎ
*/
function solution(numbers) {
    let answer = '';
    
    numbers.sort((a,b) => {
        let arrA = a.toString().split('');
        let arrB = b.toString().split('');
        
        if(arrA.length > 1 && arrB.length > 1) {
            return arrB[1] - arrA[1];
        }
        
        return arrB[0] - arrA[0];
    });
    
    return answer = (numbers.join(''));
}



// 다른 풀이보고 변형한 것
function solution(numbers) {
    let answer = '';
    numbers.sort((a,b) => {
        const newA = (a+'' + b+'')*1 // 문자열a+b 한 값과
        const newB = (b+'' + a+'')*1 // 문자열b+a 한 값을 비교해서
        return newB - newA; // 내림차순으로 정렬
    })
    answer = numbers.join('')
    if(answer[0] === '0') return '0'
    return answer;
}



// 위의 코드랑 같은데 더 간단한 듯
function solution(numbers) {
    let answer = numbers.map(v=>v+'') // 문자열로 변환
                        .sort((a,b) => (b+a) - (a+b)) // 숫자 크기로 비교 
                        .join('');

    return answer[0]==='0'?'0':answer;
}



// 핵심은 문자열 더해서 비교해본 후 정렬하기!
function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return answer[0] === '0' ? '0' : answer;
}

