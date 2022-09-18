'use strict';

// hashMap으로 풀려고 했으나 못풀었다. 
function solution(fees, records) {
    const cars = {};
      
    records.forEach(v => {
      let [time, car, type] = v.split(" ");
      const [hour, minute] = time.split(":");
          
      // 분으로 바꾸기
      time = hour * 60 + (minute * 1);
      
      // 처음 조회되는 차량일 시
      if (!cars[car]) {
        cars[car] = { time: 0, car };
      }
          
      cars[car].type = type;
          
      if (type == "OUT") {
          cars[car].time += time - cars[car].lastInTime;
          return;
      }
          
      cars[car].lastInTime = time;
    });
  
    return Object.values(cars)
      .sort((a, b) => a.car - b.car)
      .map(v => {
        // 차량이 최종적으로 나가지 않았을 때
        if (v.type == "IN") {
          v.time += 1439 - v.lastInTime; // 아직 주차장에 머물러 있다는 뜻이므로 23:59에서 최근에 들어온 시각을 뺀 값을 추가로 더하기
        }
        
        // 기본시간을 넘지 않았을 때
        if (fees[0] > v.time) {
          return fees[1];
        }
              
        return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3]; // 기본요금 + ((주차시간 - 기본시간) / 단위 시간) * 단위 요금
      });
  }