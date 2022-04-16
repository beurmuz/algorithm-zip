var sentence = prompt('문자열을 입력하세요.').split('');
var result = '';
console.log(sentence);
for(var i=0; i<sentence.length; i++) {
    if(sentence[i] === sentence[i].toLowerCase()) {
        sentence[i] = sentence[i].toUpperCase();

    }else{
        sentence[i] = sentence[i].toLowerCase();
    }
    result += sentence[i];
}
console.log(result);