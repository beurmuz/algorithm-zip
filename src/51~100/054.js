function sol(l){
    l.sort((a,b) => {
      return a-b;
    });
  
    for (let i=0; i<l.length-1; i++){
      if(l[i]+1 !== l[i+1]){
        return 'NO';
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));