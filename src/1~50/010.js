var tree = '';
var value = 5;

for(var i = 1; i <= value; i++) {
    var star = '';
    for(var j = 1; j <= value-i; j++) {
        star += ' ';
    }
    for(var x = 1; x<=2*i-1; x++) {
        star += '*';
    }
    tree += star + '\n';
}
console.log(tree);