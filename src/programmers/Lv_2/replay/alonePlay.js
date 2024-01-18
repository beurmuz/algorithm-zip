/**
 * [구현]
 * - 문제를 이해 못해서 알고리즘 구현을 못하고 있었다. 누가 문제 풀이 해놓은 것을 보고 이해한 후 푸니 짱 쉬움.. 이게 머야!
 * - 어쨌든 굳이 방문 여부를 따로 저장할 배열을 만들지 않고도, 방문한 인덱스에 해당하는 값을 0으로 바꾸어주면 된다.
 *   => 어차피 숫자는 1이상 100이하의 수가 있기 때문에, 0이 나올 일이 없어 가능한 것이다.
 */

function solution(cards) {
  // 상자 당 카드 개수를 저장할 배열
  let boxes = [];

  // cards를 순회한다.
  cards.forEach((v, i) => {
    let idx = i;
    let count = 0; // 현재 상자에 속한 숫자들의 개수

    while (1) {
      if (cards[idx]) {
        let cardNum = cards[idx]; // 현재 카드 번호
        cards[idx] = 0; // 방문했으니 0으로 만든다.
        idx = cardNum - 1; // 다음에 방문할 인덱스 카드 번호
        count++; // 1개 방문했으니 1증가
      } else {
        // 이미 방문한 경우
        if (count === 0) break;
        else {
          boxes.push(count);
          break;
        }
      }
    }
  });

  boxes.sort((a, b) => b - a);
  return boxes.length > 1 ? boxes[0] * boxes[1] : 0;
}
