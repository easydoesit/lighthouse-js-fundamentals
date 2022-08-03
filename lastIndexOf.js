function lastIndexOf(theArray, theIndex){
  console.log(theArray.length + '\n');
  //console.log(theIndex  + '\n');
  let count = theArray.length;
  console.log(count);
  for (let i = theArray.length; i >= -1; i--){
    if (count >=0) {
      if (theArray[i] !== theIndex && count >= 0){
        //console.log(theArray[i]);
        count--;
      } else {
        return count;
      } 
    }
    else {
    return -1;
    }
    
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);