// 내 풀이
function solution(arr)
{
    return arr.filter((element, index) => element !== arr[index+1]);
}