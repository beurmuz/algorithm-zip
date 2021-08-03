let inputString = prompt('문자열을 입력하세요.');
let aLength = inputString.match(/a/g).length;
let bLength = inputString.match(/b/g).length;
let cLength = inputString.match(/c/g).length;
let dLength = inputString.match(/d/g).length;
console.log(`a${aLength}b${bLength}c${cLength}d${dLength}`);