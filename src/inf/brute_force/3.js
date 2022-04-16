'use strict';

console.time("소요시간");
            function solution(test){
                let answer=0, tmp = [];
                m=test.length;
                n=test[0].length;
                for(let i=1; i<=n; i++){ // 멘토
                    for(let j=1; j<=n; j++){  // 멘티
                        let cnt=0;
                        for(let k=0; k<m; k++){
                            let pi=pj=0;
                            for(let s=0; s<n; s++){ // s는 등수
                                if(test[k][s]===i) pi=s;
                                if(test[k][s]===j) pj=s;
                            }
                            if(pi<pj) cnt++;
                        }
                        if(cnt===m) {
		                    tmp.push([i,j]);
		                    answer++;
	                    }
                    }
                }
                console.log(...tmp);
                return answer;
            }
            
            let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
            console.log(solution(arr));
            console.timeEnd("소요시간");