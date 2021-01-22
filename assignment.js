function kilometerToMeter(kilometer){
    // For the wrong input
    if(kilometer < 0){
        return "Error: Kilometer value should not be negative";
    }
    else if(kilometer == null){
        return "Error: Kilometer value should not be empty";
    }

    // For the correct input
    else{
        let meter = (kilometer*1000);
        return meter;
    }
}


function budgetCalculator(totalWatch, totalMobile, totalLaptop){
    // For the wrong input
    if(totalWatch == null || totalMobile == null || totalLaptop == null){
        return "Error: Value or values should not be empty";
    }
    else if(totalWatch < 0 || totalMobile < 0 || totalLaptop < 0){
        return "Error: Value or values should not be negative";
    }
    else if(typeof(totalWatch) != 'number' || typeof(totalMobile) != 'number' || typeof(totalLaptop) != 'number'){
        return "Error: Value or values should be number";
    }

    // For the correct input
    else{
        let watchPrice = 50;
        let mobilePrice = 100;
        let laptopPrice = 500;

        totalBudget = (watchPrice*totalWatch) + (mobilePrice*totalMobile) + (laptopPrice*totalLaptop);

        return totalBudget;
    }
}


function hotelCost(totalDays){
    // For the wrong input
    if(totalDays == null){
        return "Error: Value should not be empty";
    }
    else if(totalDays < 0){
        return "Error: Value should not be negative";
    }
    else if(typeof(totalDays) != 'number'){
        return "Error: Value should be number";
    }

    // For the correct input
    else{
        if(totalDays <= 10){
            let rentPerDay = 100;
            let totalRent = rentPerDay*totalDays;
            return totalRent;
        }
        else if(totalDays <= 20){
            let rentForFirstTenDays = 100*10;
            let rentPerDay = 80;
            let remaining = totalDays - 10;
            let totalRent = rentForFirstTenDays + (rentPerDay*remaining);
            return totalRent;
        }
        else if(totalDays > 20){
            let rentForFirstTenDays = 100*10;
            let rentForNextTenDays = 80*10;
            let rentPerDay = 50;
            let remaining = totalDays - 20;
            let totalRent = rentForFirstTenDays + rentForNextTenDays + (rentPerDay*remaining);
            return totalRent;
        }
    }
}


function megaFriend(friendList){
    // For the wrong input

    //checking the input is array or not
    if(!Array.isArray(friendList)){
        return "Error: Input should be an array";
    }
    //checking array is empty or not
    else if(friendList.length == 0){
        console.log("Error: Array should not be empty")
    }
    //checking the elements of the array are string or not
    for(let i=0; i<friendList.length; i++){
        if(typeof(friendList[i]) != 'string'){
            return "Error: All the elements in the array should be string";
        }
    }

    // For the correct input
    let maxName = friendList[0];

    for(let i=0; i<friendList.length; i++){
        if(friendList[i].length > maxName.length){
            maxName = friendList[i];
        }
    }
    return maxName;
}


