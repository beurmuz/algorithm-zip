'use strict';

// 방법 1
            // function solution(str){
            //     let answer="";
            //     for(let x of str) {
            //         if(!isNaN(x)) {
            //             answer += x;
            //         }
            //     }
            //     return parseInt(answer);
            // }

            // 방법2
            function solution(str){
                let answer="";
                for(let x of str) {
                    if(!isNaN(x)) {
                        answer = answer * 10 +Number(x);
                        console.log(answer);
                    }
                }
                return answer;
            }
            
            let str="g0en2T0s8eSoft";
            console.log(solution(str));