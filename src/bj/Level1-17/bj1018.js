'use strict';
let input = require('fs').readFileSync('./1018.txt').toString().split('\r\n');

function paintingChess(input) {
    let N = input[0].split(' ')[0]*1;
    let M = input[0].split(' ')[1]*1;
    let board = [];
    for(let i = 1; i < input.length; i++) {
        board.push(input[i]);
    }
    const lines = ["WBWBWBWB", "BWBWBWBW"]
    let min = 64;
    for (let i=0; i<=N-8; i++) {
        for (let j=0; j<=M-8; j++) {
            for (let oe=0; oe<2; oe++) {
                let count = 0;
                for (let x=i; x<i+8; x++) {
                    for (let y=j; y<j+8; y++) {
                        if (board[x][y] !== lines[(x+oe)%2][y-j]) {
                            count++;
                        }
                    }
                }
                if (min > count) min = count;
            }
        }
    }
    console.log(min);
}

paintingChess(input);