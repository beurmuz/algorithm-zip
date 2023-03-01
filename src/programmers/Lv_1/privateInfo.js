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

    if (Y + M > accordType.month) return ++index;
    else {
      if (Y + M === accordType.month && D >= 0) return ++index;
      else return "X";
    }
    // return Y + M > accordType.month ? ++index : Y + M === accordType.month && D >= 0 ? ++index : 'X';
  });
  return DELETEINFO.filter((value) => value !== "X");
}
