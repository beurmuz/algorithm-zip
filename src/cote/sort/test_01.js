'use strict';

function solution(N, arr) {
    arr.sort((a, b) => {
        if (a[1] < b[1]) return 1
        else if (a[1] > b[1]) return -1
        else {
            if (a[2] > b[2]) return 1
            else if (a[2] < b[2]) return -1
            else {
                if (a[3] < b[3]) return 1
                else if (a[3] > b[3]) return -1
                else {
                    if (a[0] > b[0]) return 1
                    else if (a[0] < b[0]) return -1
                    else return 0
                }
            }
        }
    });
    
    arr.forEach((student) => console.log(student[0]));
}

const arr = [['Junkyu', 50, 60, 100],
             ['SangKeun', 80, 60, 50],
             ['Sunyoung', 80, 70, 100],
             ['Soong', 50, 60, 90],
             ['Haebin', 50, 60, 100],
             ['Kangsoo', 60, 80, 100],
             ['Donghyuk', 80, 60, 100],
             ['Sei', 70, 70, 70],
             ['Wonseon', 70, 70, 90],
             ['Sanghyun', 70, 70, 80],
             ['nsj', 80, 80, 80],
             ['Taewhan', 50, 60, 90]
]
console.log(solution(12, arr));

// 다른 방법
/*
arr.sort((a, b) => {
    const aScore = (100-a[1])*10**6 + a[2]*10**3 + (100-a[3]);
    const bScore = (100-b[1])*10**6 + b[2]*10**3 + (100-b[3]);
    if (aScore === bScore) {
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    } else {
      return aScore - bScore;
    }
  });
*/