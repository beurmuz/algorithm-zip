"use strict";

const solution = (genres, plays) => {
  const answer = [];
  const countByGenres = {}; // 장르별 총 재생횟수를 저장
  const allInfoGenres = []; // 장르, 재생횟수, 고유번호를 저장

  // 1. 장르별 총 재생횟수에 대한 set & 장르, 재생횟수, 고유번호에 대한 set 만들기
  for (let i = 0; i < genres.length; i++) {
    countByGenres[genres[i]] = countByGenres[genres[i]]
      ? (countByGenres[genres[i]] += plays[i])
      : plays[i];
    allInfoGenres.push({
      genre: genres[i],
      play: plays[i],
      idx: i,
    });
  }
  let countByGenresArr = Object.entries(countByGenres);
  countByGenresArr.sort((a, b) => b[1] - a[1]); // 재생횟수가 큰 순서로 정렬

  // 2. allInfoGenres에서 countByGenresArr 객체의 키 값에 해당하는 장르들을 배열에 따로 저장해서 재생횟수 별로 내림차순을 한 후, 상위 두개 원소의 고유번호만 뽑아서 answer에 push한다.
  countByGenresArr.map((musicList, index) => {
    let current = [];
    for (let i = 0; i < allInfoGenres.length; i++) {
      if (musicList[0] === allInfoGenres[i].genre) {
        current.push(allInfoGenres[i]);
      }
    }
    current.sort((a, b) => b.play - a.play); // 재생횟수가 큰 순서대로 정렬
    current.forEach((musicInfo, count) => {
      if (count < 2) {
        // 0, 1만 뽑는다.
        answer.push(musicInfo.idx); // 인덱스값만 answer에 넣는다.
      }
    });
  });
  return answer;
};
