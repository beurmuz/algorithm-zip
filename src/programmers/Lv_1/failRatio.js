// 처음에 푼 풀이 - 정확성 44/100 나옴
function solution(N, stages) {
    let failRatioList = [];
    
    for(let i = 1; i <= N; i++) {
        let reached = 0; // 도달한 수 
        let notFinished = 0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) reached++; // 도달한사람
            if(stages[j] === i) notFinished++; // 클리어하지 못한사람
        }
        let failRatio = (notFinished === 0.00 ? 0 : (notFinished/reached).toFixed(2)); // 이거 때문에 정확성이 44나온것
        // 어차피 0/1은 0이므로 저렇게 안해줘도 됨
        failRatioList.push([i, failRatio]);
    }
    
    failRatioList.sort((a, b) => b[1] - a[1]);
    return failRatioList.map((stage) => stage[0]);
}



// 처음에 푼 풀이 수정 - 모든 테케 통과, 정확성 100
function solution(N, stages) {
    let failRatioList = [];
    
    for(let i = 1; i <= N; i++) {
        let reached = 0; // 도달한 수 
        let notFinished = 0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) reached++; // 도달한사람
            if(stages[j] === i) notFinished++; // 클리어하지 못한사람
        }
        failRatioList.push([i, notFinished/reached]); // 따로 만들었던 변수 제거 및 
    }
    
    failRatioList.sort((a, b) => b[1] - a[1]); // 인덱스가 아닌 실패율로 내림차순 정렬하기
    return failRatioList.map((stage) => stage[0]); // 정렬된 배열에서 0번째 열 정보만 가져오기
}



// 이중 for문 말고 filter이용해서 다시 푼 코드
// filter는 조건에 부합하는 값만 return함!!
function solution(N, stages) {
    let failRatioList = [];
    
    for(let stage = 1; stage <= N; stage++) {
        let reached = stages.filter((player) => player >= stage).length; // 도달한 사람 수
        let notFinished = stages.filter((player) => player === stage).length; // 클리어하지 못한사람 수
        failRatioList.push([stage, notFinished/reached]);
    }
    failRatioList.sort((a, b) => b[1] - a[1]);
    return failRatioList.map((stage) => stage[0]);
}