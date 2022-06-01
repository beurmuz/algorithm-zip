function solution(arr) {
    var answer = arr;
    if(arr.length <= 1) return [-1];
    else {
        let minValue = Math.min(...arr);
        let minIndex = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === minValue)  minIndex = i;
        }
        arr.splice(minIndex,1);
        return answer;
    }
}