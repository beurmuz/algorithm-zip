var stringNum = '';
for(var i = 0; i <=1000; i++) {
    stringNum += i;
}
var enterNum = stringNum.split('');
var count = 0;

for(var j in enterNum) {
    if(Number(enterNum[j]) === 1){
        count += 1;
    }
}
console.log(count);