const inputString = prompt('단어를 입력하세요.').split('');

for(var i = 0; i < inputString.length; i++) {
    console.log(inputString[i], inputString[i+1]);
}