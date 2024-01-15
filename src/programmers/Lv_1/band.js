/**
 * [구현]
 * - 단순 구현이다. nextHP 식을 세우는 것이 좀 어려웠다.
 * - (회복 시간/공격 시간)이 1보다 크면 해당 초동안 추가 회복량을 더 얻을 수 있다는 것이 핵심인 듯 하다.
 */

function solution(bandage, health, attacks) {
  let nowHP = health;
  let nowTime = 0; // 현재 시간
  let isDead = false; // 죽었는지 여부

  attacks.forEach(([attackTime, damage]) => {
    let duration = attackTime - nowTime - 1; // 현재 시간 ~ 공격받기까지의 시간
    let nextHP =
      nowHP +
      (duration * bandage[1] + Math.floor(duration / bandage[0]) * bandage[2]);
    // 현재 체력 + (회복 시간 * 초당 회복량 + (회복 시간/공격 시간) * 추가 회복량)으로 다음 체력을 구할 수 있다. (회복 시간/공격 시간)이 1이상이면 1초마다 추가 회복량만큼 얻을 수 있으므로 곱해서 구한다.

    nowTime = attackTime; // 현재 시간 갱신
    nowHP = nextHP > health ? health : nextHP; // 현재 체력은 최대 체력보다 커질 수 없다.
    nowHP -= damage;
    if (nowHP < 1) isDead = true; // 체력이 0 이하가 되면 캐릭터가 죽는다.
  });

  return isDead ? -1 : nowHP;
}
