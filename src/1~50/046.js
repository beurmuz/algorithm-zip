var result =[];
var sum = 0;

for(var i = 1; i <= 20; i++) {
    result += i;
}
// console.log(result);

for(var j = 0; j < result.length; j++){
    sum += parseInt(result[j]);
}
console.log(sum);