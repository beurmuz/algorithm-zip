/**
 * [완전탐색, Map]
 */

function solution(enroll, referral, seller, amount) {
  const members = new Map();
  enroll.forEach((name, i) => {
    members.set(name, { refer: referral[i], profit: 0 });
  });

  seller.forEach((name, i) => {
    let nowAmount = amount[i] * 100;
    let nowSeller = members.get(name);

    while (nowAmount && nowSeller) {
      div = Math.floor(nowAmount / 10);
      nowSeller.profit += nowAmount - div;
      nowAmount = div;
      nowSeller = members.get(nowSeller.refer);
    }
  });
  return enroll.map((name, i) => members.get(name).profit);
}
