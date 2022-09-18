'use strict';

function solution(msg) {
    const outputs = [];
    const dict = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let [lt, rt] = [0, 1];
  
    const doesDictHave = (lt, rt) => dict.includes(msg.substring(lt, rt));
  
    const getInput = (lt, rt) => {
      if (rt + 1 > msg.length || !doesDictHave(lt, rt + 1)) return [lt, rt];
      return getInput(lt, rt + 1);
    };
  
    const addToDict = (lt, rt) => {
      if (doesDictHave(lt, rt)) return;
      dict.push(msg.substring(lt, rt));
    };
  
    const addToOutputs = (lt, rt) => {
      if (!doesDictHave(lt, rt)) return;
      outputs.push(dict.indexOf(msg.substring(lt, rt)));
    };
  
    while (lt < msg.length) {
      [lt, rt] = getInput(lt, rt);
      addToDict(lt, rt + 1);
      addToOutputs(lt, rt);
      lt = rt;
    }
    return outputs;
  }


  // 다른 풀이
  function solution(msg) {
      let list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      let dic = list.reduce((d, a, i) => (d[a] = i + 1, d), {})
  
      let result = [];
  
      let maxLen = 1;
      for (let i = 0; i < msg.length; i++) {
  
          let w = msg[i];
          let c = msg[i+1];
          while (dic[w+c] && i < msg.length - 1) {
              i++;
  
              w = w+c;
              c = msg[i+1];
          }
  
          result.push(dic[w]);
  
          list.push(dic[w+c]);
          dic[w+c] = list.length;
      }
  
      return result;
  }