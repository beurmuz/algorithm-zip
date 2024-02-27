/**
 * [완전탐색, Map]
 * - 우선 enroll이 시간복잡도에 가장 큰 영향을 미치는 input값이다. 최대 10^4이므로 시간복잡도가 O(n log n)이하로 되게끔 코드를 구현하고자 했다.
 */

function solution(enroll, referral, seller, amount) {
  // 조직에 참여시킨 사람과 이익 정보를 저장할 Map 생성
  const members = new Map();
  enroll.forEach((name, idx) => {
    members.set(name, { refer: referral[idx], profit: 0 });
  });

  seller.forEach((name, i) => {
    let nowAmount = amount[i] * 100; // 이익금
    let nowSeller = members.get(name);
    console.log(`name: ${name}--------`);

    while (nowAmount && nowSeller) {
      // div는 총 이익의 10%를 의미한다. 총 이익을 10으로 나누면 구할 수 있다.
      div = Math.floor(nowAmount / 10); // 1원 단위이므로 나머지를 버린다.
      console.log(nowAmount, div);
      nowSeller.profit += nowAmount - div; // 현 판매자는 90%를 갖는다.
      // 현재 값을 10%로 갱신한다.
      nowAmount = div;
      // 조직에 참여시킨 refer가 있다면, 그 refer를 nowSeller로 갱신한다.
      nowSeller = members.get(nowSeller.refer);
    }
  });
  return enroll.map((name) => members.get(name).profit); // ✅ profit에 접근하기 위해서는 해당 멤버의 이름을 가져온 뒤, 그 밖에서 dot연산자로 접근해야한다.
}
