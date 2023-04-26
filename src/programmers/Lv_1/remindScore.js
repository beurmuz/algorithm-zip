"use strict";

const solution = (name, yearning, photo) => {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.includes(photo[i][j])) {
        let index = name.indexOf(photo[i][j]);
        sum += yearning[index];
      }
    }
    answer.push(sum);
  }
  return answer;
};

// 다른 풀이
const solution = (name, yearning, photo) => {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
};
