var n = prompt('입력해주세요.').split('');

function bracket(n) {
    var count = 0;
    
    for(var i=0; i<n.length; i++) {
        if(n[i] === '(') {
            count++;
        }
        if(n[i] === ')') {
            count--;
        }
    }
    if(count !== 0) {
        return false;
    }

    let 괄호 = [];
    for(var i in n) {
        if(n[i] === '(') {
            괄호.push('(');
        }
        if(n[i] === ')') {
            if(괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }
    }
    return true;
}

if(bracket(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}