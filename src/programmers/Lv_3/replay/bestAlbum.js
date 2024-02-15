/**
 * [정렬, Set, 구현 문제]
 */

function solution(genres, plays) {
  let answer = [];
  const countAllGenres = {}; // 장르별 총 재생횟수
  const allSongsInfo = []; // 장르, 재생횟수, 고유번호

  for (let i = 0; i < genres.length; i++) {
    // 장르별 총 재생횟수 세기
    countAllGenres[genres[i]] = countAllGenres[genres[i]]
      ? countAllGenres[genres[i]] + plays[i]
      : plays[i];

    // 노래 정보 저장
    allSongsInfo.push({
      genre: genres[i],
      play: plays[i],
      id: i,
    });
  }

  // 장르별 총 재생횟수가 저장된 Set을 배열화한 후 (Set to Array), 재생횟수로 내림차순 정렬하기
  let countAllGenresArr = Object.entries(countAllGenres).sort(
    (a, b) => b[1] - a[1]
  );

  // 장르별, 재생횟수별, 고유번호가 낮은 순서별로 정렬하기
  countAllGenresArr.forEach(([genre, counts], idx) => {
    let nowGenres = [];

    // 해당 장르에 해당하는 곡들의 정보만 nowGenres에 담기
    for (let i = 0; i < allSongsInfo.length; i++) {
      if (genre === allSongsInfo[i].genre) nowGenres.push(allSongsInfo[i]);
    }

    // 재생횟수가 큰 순서로 정렬하기 -> 굳이 고유번호가 낮은 순서대로 정렬하는 코드를 작성할 필요가 없다.
    nowGenres.sort((a, b) => b.play - a.play);

    // 장르별 곡 2개의 고유번호(id) 정보를 answer에 넣기
    nowGenres.forEach((song, count) => {
      if (count < 2) answer.push(song.id);
    });
  });

  return answer;
}
