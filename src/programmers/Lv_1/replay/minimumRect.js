/**
 * w는 두 길이 중 더 큰 값을, h는 두 길이 중 더 작은 값을 넣는다.
 * 이후 w와 h 각각의 가장 큰 값을 곱해주면 가장 작은 지갑의 크기가 나온다.
 */

const solution = (sizes) => {
  let w = [];
  let h = [];
  sizes.forEach((v, i) => {
    w[i] = Math.max(...v);
    h[i] = Math.min(...v);
  });
  return Math.max(...w) * Math.max(...h);
};
