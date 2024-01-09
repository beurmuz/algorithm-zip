/**
 * [구현]
 * - nextHealth를 구하는 식에서 좀 헤맸다. 다시 풀어봐야 할듯
 */

function solution(bandage, health, attacks) {
  let nowHealth = health; // 현재 체력
  let dead = false; // true면 죽은 것
  let nowTime = 0; // 현재 시간

  attacks.forEach(([attackTime, damage]) => {
    let duration = attackTime - nowTime - 1;
    let nextHealth =
      nowHealth +
      (duration * bandage[1] + Math.floor(duration / bandage[0]) * bandage[2]);
    // 현재 체력 + (지속시간 * 몬스터 공격으로 인한 피해 + (지속 시간/공격 시간) * 추가 회복량)

    nowTime = attackTime; // 현재 시간을 갱신

    // 최대 체력을 초과하면 health를, 아니면 nextHealth로 갱신한다.
    nowHealth = nextHealth > health ? health : nextHealth;
    nowHealth -= damage; // 데미지만큼 빼기

    if (nowHealth < 1) dead = true; // 0이하이면 죽은 것
  });
  return dead ? -1 : nowHealth;
}
