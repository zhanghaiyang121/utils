let util={};
util.unique = function(arr) {  
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
      if(!hashTable[arr[i]]) {
        hashTable[arr[i]] = true;
        data.push(arr[i]);
      }
    }
    return data
  
  }
export default util;