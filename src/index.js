module.exports = function check(str, bracketsConfig) {
  // your solution
    
  let arr = str.split('');
  let n = arr.length / 2;
  for (let j = 0; j < n; j++){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == '(' && arr[i+1] == ')' || arr[i] == '|' && arr[i+1] == '|' || arr[i] == '[' && arr[i+1] == ']' || 
      arr[i] == '{' && arr[i+1] == '}' || arr[i] == '1' && arr[i+1] == '2' || arr[i] == '3' && arr[i+1] == '4' || 
      arr[i] == '5' && arr[i+1] == '6' || arr[i] == '7' && arr[i+1] == '7' || arr[i] == '8' && arr[i+1] == '8'){
        arr.splice(i, 2);
    }
  }
}
    
  if (arr.length == 0) return true;
  else return false;
}
}
