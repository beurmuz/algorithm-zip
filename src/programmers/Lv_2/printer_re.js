function solution(priorities, location) {
    let answer = 0;
    
    let arr = priorities.map((priority, index) => {
        return { location: index, priority: priority };
    });
    
    let queue = [];
    
    while(arr.length > 0) {
        let headElement = arr.shift();
        let hasHighPriority = arr.some(element => element.priority > headElement.priority);
        if(hasHighPriority) arr.push(headElement);
        else queue.push(headElement);
    }
    
    return queue.findIndex(queueElement => queueElement.location === location) + 1;
}