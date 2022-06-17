// 내 풀이
/*
    반복문과 includes()이용
    rank 규칙찾는 게 포인트인듯!
    - 원래 ranking은 `Array.from({length: 7}, (v, i) => 7-i);` 0번째 인덱스를 min, max에서 따로 처리해주었음
    - 그러나 어차피 로또의 개수가 늘 6개로 정해져있기에 [6, 6, 5, 4, 3, 2, 1]로 변경함
*/
function solution(lottos, win_nums) {
    let prizedNum = 0, zeroCount = 0;
    let ranking = [6, 6, 5, 4, 3, 2, 1];

    // 0과 맞춘 번호 개수 세기
    for(let x of lottos) { 
        if(x === 0) {
            zeroCount++; 
            continue;
        }
        if(win_nums.includes(x)) prizedNum++;
    }
    let min = ranking[prizedNum];
    let max = zeroCount === 6 ? 1 : ranking[prizedNum + zeroCount];
    
    return [max, min];
}


// 다른 풀이
/*
    for문을 돌리지 않고 filter와 includes로 개수를 셈
    - filter는 조건에 해당하는 것만 배열로 return함
*/
function solution(lottos, win_nums) {
    const zeroCount = lottos.filter((e) => e === 0).length; // e가 0인 경우만 return하므로 그 길이를 세면 됨
    const matchCount = win_nums.filter((e) => lottos.includes(e)).length; // e가 lottos에 포함되어 있는 경우만 return
    const matchToRank = [6, 6, 5, 4, 3, 2, 1];
    const lowRank = matchToRank[matchCount];
    const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];
  
    return [highRank, lowRank];
}
