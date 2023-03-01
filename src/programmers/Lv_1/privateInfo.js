"use strict";

/**
 * 재할당 가능한 변수, mutator 메서드를 사용하는 습관을 줄이기 위해
 * const 키워드 활용, Array.prototype의 non-mutator(ex. map, filter)만 이용하고자 했다.
 */

function solution(today, terms, privacies) {
  // 0. today정보 쪼개기
  const TODAY = today.split(".").map((DATE) => +DATE);

  // 1. terms Array => Set으로 변경
  const TERMS = terms.map((TERM) => {
    const [type, month] = TERM.split(" ");
    return { type, month: +month };
  });

  // 2. privacies Array => Set으로 변경
  const PRIVACIES = privacies.map((PRIVACY) => {
    const [startDate, type] = PRIVACY.split(" ");
    return { type, startDate: startDate.split(".").map((v) => +v) };
  });

  // 3. PRIVACIES 배열에서 개인정보 파기여부 찾기
  const DELETEINFO = PRIVACIES.map((PRIVACY, index) => {
    // 일치하는 type 찾기
    const [accordType] = TERMS.filter((TERM) => TERM.type === PRIVACY.type);

    const Y = (TODAY[0] - PRIVACY.startDate[0]) * 12;
    const M = TODAY[1] - PRIVACY.startDate[1];
    const D = TODAY[2] - PRIVACY.startDate[2];

    // 기준 약관 종류에 명시된 개월 수 보다 많이 지난 경우 인덱스+1을, 덜 지난 경우 X를 반환한다.
    if (Y + M > accordType.month) return ++index;
    else {
      if (Y + M === accordType.month && D >= 0) return ++index;
      else return "X";
    }
    // return Y + M > accordType.month ? ++index : Y + M === accordType.month && D >= 0 ? ++index : 'X';
  });
  return DELETEINFO.filter((value) => value !== "X");
}
