// Code your solution in this file!


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers= function(someDrivers){
    return someDrivers.slice(0,2);
}

const returnLastTwoDrivers= function(someDrivers){
    return someDrivers.slice(-2);
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function(fare){
        return (fare*num1);
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, someFunction){
    return someFunction(arrayOfDrivers);
}
