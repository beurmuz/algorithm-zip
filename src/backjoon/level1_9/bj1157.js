let s = 'z';

function findMaxAlpha(s) {
    let newString = s.toUpperCase();
    let maxNum = 0;
    let maxStr = '';
    for(let i of newString) {
        let count = 0;
        for(let j of newString) {
            if(i === j) {
                count++;
            }
        }
        if(maxNum < count) {
            maxNum = count;
            maxStr = i;
        }
    }
    console.log(maxStr);
}

findMaxAlpha(s);