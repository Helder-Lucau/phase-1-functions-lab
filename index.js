// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}
//Distance from HQ in feet
function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    return (blocks * 264);
}
//Distance travelled in feet
function distanceTravelledInFeet(start, destination){
    if (destination > start) {
        return (destination - start)*264;
    } else {
        return (start - destination)*264;
    }
}
//Fare price
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else if (distance >= 2500){
        return "cannot travel that far";
    }
}