// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if(distance<42)
    return (42- distance);
    else {
    return (distance-42);
  }
}
  function distanceFromHqInFeet(feet) {
    const length = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(feet);
    const distanceInFeet = distanceInBlocks * length;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    if( destination>start){
        return ((destination-start) * 264);
    } else {
        return ((start-destination) * 264);
    }
  }   

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }