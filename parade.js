const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
let finalPosition = function (moves){
  let currentPos = [0,0];
  let y = 0;
  let x = 0;
  for (const pos of moves){
    //console.log(pos);
    if (pos === "north") {
      y++;
      //console.log(y);
      currentPos = [x, y];
      //console.log(currentPos);
      //console.log(x + "," + y)
    } else if (pos === 'south'){
      y--;
      currentPos = [x, y];
      //console.log(x + "," + y)
      //console.log(currentPos);
    } else if (pos === 'west'){
      x--;
      currentPos = [x, y];
      //console.log(x + "," + y)
      //console.log(currentPos);
    } else if (pos === 'east'){
      x++;
      currentPos = [x, y];
      //console.log(x + "," + y)
      //console.log(currentPos);
    }
  } 
  return currentPos; 
  //console.log(moves);
}

console.log(finalPosition(moves));