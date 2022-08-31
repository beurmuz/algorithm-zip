'use strict';

// 처음에 푼 풀이 (4개 중 2개밖에 못맞춤)
function solution(str1, str2) {
    let answer = 0;
    let arr1 = filterAlpha(str1);
    let arr2 = filterAlpha(str2);
    
    // 만약 두 집합이 길이가 0이라면 65536 반환
    if(!arr1.length && !arr2.length) return 65536; 
    
    let temp = [...arr1, ...arr2].sort();
    let same = [];
    for(let i = 0; i < temp.length-1; i++) {
        if(temp[i] === temp[i+1]) same.push(temp[i]);
    }
    
    // 합집합 개수 구하기
    let union = 0;
    let intersectionLength = 0;
    for(let i = 0; i < same.length; i++) {
        let acount = arr1.filter((v) => same[i] === v).length;
        let bcount = arr2.filter((v) => same[i] === v).length;
        union += Math.max(acount, bcount);
        intersectionLength += Math.min(acount, bcount);
    }
    
    let unionLength = [...new Set(temp)].length - same.length + union;
    return answer = ((intersectionLength/unionLength) * 65536).toFixed(0)*1;
    
}

// 대문자로 변환 후 2자리씩 끊고 알파벳쌍만 남기기
function filterAlpha(s) {
    let arr = [];
    let regexr = /[A-Z]/;
    for(let i = 0; i < s.length-1; i++) {
        let a = s[i].toUpperCase();
        let b = s[i+1].toUpperCase();
        regexr.test(a) && regexr.test(b) ? arr.push(`${a}${b}`) : false;
    }
    return arr;
}


// 다른 풀이 보면서 다시 풀어보기
/*
    나랑 같은거 같은데 왜 내껀 안나오지ㅠㅠ
*/
function solution(str1, str2) {
    let answer = 0;
    let arr1 = filterAlpha(str1);
    let arr2 = filterAlpha(str2);
    
    // 만약 두 집합이 길이가 0이라면 65536 반환
    if(!arr1.length && !arr2.length) return 65536; 
    
    const union = new Set([...arr1, ...arr2])
    let multiIntersectionLen = 0, multiUnionLen = 0
    for (const slice of union) {
        const arr1Count = arr1.filter(x => x === slice).length,
            arr2Count = arr2.filter(x => x === slice).length
        multiIntersectionLen += Math.min(arr1Count, arr2Count)
        multiUnionLen += Math.max(arr1Count, arr2Count)
    }
    answer = Math.floor(multiIntersectionLen / multiUnionLen * 65536);
    return answer;
    
}

// 대문자로 변환 후 2자리씩 끊고 알파벳쌍만 남기기
function filterAlpha(s) {
    let arr = [];
    let regexr = /[A-Z]/;
    for(let i = 0; i < s.length-1; i++) {
        let a = s[i].toUpperCase();
        let b = s[i+1].toUpperCase();
        regexr.test(a) && regexr.test(b) ? arr.push(`${a}${b}`) : false;
    }
    return arr;
}