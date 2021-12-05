let s = 'ABC';

function repeatString(s) {
    let stringSplit = s.split('');
    let result = '';
    for(let i = 0; i < stringSplit.length; i++) {
        for(let j = 0; j < s.length; j++) {
            result += stringSplit[i];
        }
    }
    console.log(result);
}

repeatString(s);