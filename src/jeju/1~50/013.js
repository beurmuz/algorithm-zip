var planet = function(num) {
    switch(num) {
        case 1 :
            console.log('수성');
            break;
        case 2 :
            console.log('금성');
            break;
        case 3 :
            console.log('지구');
            break;
        case 4 :
            console.log('화성');
            break;
        case 5 :
            console.log('목성');
            break;
        case 6 :
            console.log('토성');
            break;
        case 7 :
            console.log('천왕성');
            break;
        case 8 :
            console.log('해왕성');
            break;
        default :
            console.log('1~8까지의 숫자를 입력해주세요.');
            break;
    }
}  

planet(1);

// 답안
// const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// const n = prompt('몇 번째 행성인가요?');
// console.log(planets[n-1]);