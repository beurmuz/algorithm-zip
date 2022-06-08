// 내 풀이
function solution(array, commands) {
    let answer = [];
    for(let x = 0; x < commands.length; x++) {
        let i = commands[x][0];
        let j = commands[x][1];
        let k = commands[x][2];
        
        let cutArray = array.slice(i-1, j).sort((a,b) => a-b);
        let value = cutArray.slice(k-1, k);
        answer.push(...value);
    }
    
    return answer;
}

/*
    1) i, j, k 구하기
    2) slice로 배열 자르기
    3) sort하기
    4) slice로 k 구하기
    5) answer 배열에 push하기
*/


// 다른 풀이 - 구조분해 할당 이용하기
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

