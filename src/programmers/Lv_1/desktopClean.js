"use strict";

const solution = (wallpaper) => {
  const xPos = [];
  const yPos = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        yPos.push(i);
        xPos.push(j);
      }
    }
  }

  // 모든 좌표값을 모아서 최솟값, 최댓값을 구한다.
  return [
    Math.min(...yPos),
    Math.min(...xPos),
    Math.max(...yPos) + 1,
    Math.max(...xPos) + 1,
  ];
};
