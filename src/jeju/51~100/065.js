// 방법 1 - forEach 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach(function(e, i){
  if (i%2 === 0){
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});

console.log(c);

// 방법 2 - map 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let c = a.map(function(e, i){
    if(i%2 === 0){
        return [e, b[i]];
    } else{
        return [b[i], e];
    }
});

console.log(c);