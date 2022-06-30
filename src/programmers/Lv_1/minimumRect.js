// 내 풀이
/*
    가로, 세로 길이를 담을 배열 w,h를 선언하고 sizes의 큰 값은 w에, 작은 값은 v에 넣기
    w와 h중 가장 큰 값을 곱하면 끝 !
*/
const solution = (sizes) => {
    let w = [];
    let h = [];
    sizes.forEach((v,i) => {
      w[i]=Math.max(...v)
      h[i]=Math.min(...v)
    })
    return Math.max(...w)*Math.max(...h);
}