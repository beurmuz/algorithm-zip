// 내 풀이
/*
    최대로 뽑을 수 있는 몬스터 수가 뽑아야할 몬스터 수보다 크거나 같으면 뽑아야할 몬스터 수를 return

    장족의 발전이다.. 실력이 느는게 보이는군 😚
*/
function solution(nums) {
    const pickNum = (nums.length)/2;
    const newNums = [...new Set(nums)];
    return pickNum <= newNums.length ? pickNum : newNums.length; 
}