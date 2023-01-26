'use strict';

const input = String(2143);
const result = input.split('').sort((a,b) => b-a).join('');
console.log(result);