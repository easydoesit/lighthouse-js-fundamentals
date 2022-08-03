function range(start, end, step){
  let myArray = [];
  if (start > end || step <= 0){
    return myArray;
  } else {
    //let myArray = [];
    for (let i = start; i <= end; i = i + step){
      myArray.push(i);
    }
    return myArray;
  }
}
console.log(range(0,10,2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));