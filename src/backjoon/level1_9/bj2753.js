// 2753번, 윤년

'use strict'
const whatYear = 1999;
if(whatYear%4===0 && (whatYear%100!=0 || whatYear%400===0)) {
    console.log(1)
} else {
    console.log(0);
}