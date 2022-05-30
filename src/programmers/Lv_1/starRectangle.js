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