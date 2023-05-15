

function findMatching(listOfDriversNames, nameToFind){
    const matchingNames = listOfDriversNames.filter((driverName) => {
        if (driverName == nameToFind ){
            return true;
        } else if (driverName.toLowerCase() == nameToFind.toLowerCase()){
            return true;
        }
        
    });
    return matchingNames
}

    function fuzzyMatch(driversNames,lettersToMatch){

    let findMatchingLetters = driversNames.filter((individualNames) => {
        if ( lettersToMatch.charAt(0) === individualNames.charAt(0)){
            return true;
        }});
        return findMatchingLetters;
   
}




function matchName(drivers,nametoMatch){
   
    // let objectName = drivers.name

    let findmatchingName2 = drivers.filter((individualNames) =>{
       let objectName = individualNames.name
        if (objectName == nametoMatch){
            return true;
        }})

        return findmatchingName2;
}

// console.log(matchName(drivers,"Bobby"))





// console.log((fuzzyMatch(drivers, 'Sa')))








