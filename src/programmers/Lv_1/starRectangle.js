// 내가 푼 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(' ');
    const width = Number(n[0]), height = Number(n[1]);
    for(let i = 0; i < height; i++) {
        let answer = '';
        for(let j = 0; j < width; j++) {
            answer += '*';
        }
        console.log(answer);
    }
});

// 다른사람 풀이 (repeat 함수이용)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});