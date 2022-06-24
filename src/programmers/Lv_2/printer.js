// 못풀었다 !
/*
    풀이를 봤는데도 제대로 이해하지 못했다
*/
function solution(priorities, location) {
    var answer = 0;
    let documents = priorities.map((priority, index)=> ({location: index, priority: priority}))
    let locationPrinted = false
    while(!locationPrinted){
        const shifted = documents.shift()
        let printAvailable = true
        if(documents.some((document)=> shifted.priority < document.priority)) printAvailable = false
        if(printAvailable){
            answer += 1
            if(shifted.location === location) locationPrinted = true
        }else{
            documents.push(shifted)
        }
    }
    return answer;
}