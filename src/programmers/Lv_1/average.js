function solution(arr) {
    var answer = 0;
    let sum = 0;
    arr.forEach((x) => sum += x);
    answer = sum/arr.length;
    return answer;
}