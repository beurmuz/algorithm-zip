// 내 풀이
function solution(s) {
    let mid = Math.floor(s.length/2);
    if(s.length%2 === 0) return answer = s.slice(mid-1,mid+1);
    else return answer = s.slice(mid, mid+1);
}

// 다른 내 풀이 - substr로 한줄에 출력하는 사람이 많지만 나는 slice를 이용해봄
function solution(s) {
    let mid = Math.ceil(s.length/2);
    return s.slice(mid-1, s.length % 2 === 0 ? mid+1 : mid);
}