const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let chooseStations = function (stations) {
  const goodStations = [];
  for (const station of stations){
    if (station[1] >= 20) {
      if (station[2] === "school" || station[2] === "community centre") {
        goodStations.push(station[0]);
        console.log(station[2]);
      }
    }
  }
  return goodStations;
}
  
  // Your code in here ...

console.log(chooseStations(stations));