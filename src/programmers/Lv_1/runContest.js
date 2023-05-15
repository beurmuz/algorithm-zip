"use strict";

const solution = (players, callings) => {
  const playerMap = {};
  players.forEach((name, index) => {
    playerMap[name] = index;
  });

  callings.forEach((name, index) => {
    const before = playerMap[name]; // 이름이 불린 선수의 원래 위치
    const front = players[before - 1]; // 이름이 불린 선수의 바로 앞에 있는 선수

    players[before - 1] = name;
    players[before] = front;

    playerMap[name] = before - 1;
    playerMap[front] = before;
  });
  return players;
};
