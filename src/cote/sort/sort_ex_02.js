'use strict';

function solution(n, s) {
    let answer = '';
    const students = s.split('\n').map((v) => {
        return v.split(' ');
    })

    students.sort((a, b) => a[1] - b[1]);
    console.log(students);

    for(let student of students) {
        answer += student[0]+' ';
    }
    return answer.trim();
}

console.log(solution(2, '홍길동 95\n이순신 77'));