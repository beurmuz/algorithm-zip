var date = new Date();
var year = date.getTime();
var year = Math.floor(year/(3600*24*365*1000))+1970;

console.log(year);