'use strict';

// 정확성 + 효율성 30...★
/*
    1. people 내림차순 정렬 후, people 값을 순회하며 limit/2를 초과하는 경우 answer++,
        limit/2 미만인 경우 restPeople 배열에 넣기
    2. restPeople의 처음과 끝을 더해 limit보다 작은 경우, restPeople.length가 1인 경우 answer++ 하기

    => restPeople이 엄청 많은 경우가 있는데 처음과 끝만 비교하는 게 문제였다!
*/
function solution(people, limit) {
    let answer = 0;
    let restPeople = [];
    people.sort((a, b) => b - a);
    
    for(let i = 0; i < people.length; i++) {
        if(people[i] > limit/2) {
            answer++;
            continue;
        } else {
            restPeople.push(people[i]);
        }
    }
    if(restPeople.length === 1) answer++;
    else {
        let sum = restPeople[0] + restPeople[restPeople.length-1];
        if(sum <= limit) answer++;
    }
    return answer;
}


// 다른 풀이 (제출한 풀이)
/*
    1. 똑같이 내림차순 정렬 후
    2. 투포인터를 이용해 처음, 끝 값을 비교하기
    3. lt === rt 인 경우는 하나가 남는 경우이므로, 이 경우는 남은 한명이 배를 혼자 타는 것이므로 answer++후 반복문 종료하기
    4. lt와 rt의 합이 limit보다 큰 경우, 이는 lt 혼자만 탑승이 가능하므로 answer++. 
        4-1. 이후 lt(큰값)를 다음 위치로 옮겨준다. (ex. 0번 인덱스에서 1번 인덱스로 옮기기)
    5. lt와 rt의 합이 limit보다 작거나 같은 경우, 이는 둘이 함께 탑승할 수 있으므로 answer++;
        5-1. 이때 다음 lt와 rt를 비교하기 위해 lt++, rt--를 해줌
*/
function solution(people, limit){
	let answer = 0;
    people.sort((a,b) => b-a);
    let lt = 0;
    let rt = people.length-1;
    
    while(lt <= rt) {
        if(lt === rt) {
            answer++;
            break;
        }
        
    	let sum = people[lt] + people[rt];
        if(sum > limit) {
            answer++;
            lt++;
        }
        else {
            answer++;
        	lt++;
            rt--;
        }
    }
    return answer;
}