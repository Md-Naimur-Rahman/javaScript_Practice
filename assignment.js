

// checking the validity of Input


function checkInputValidity(input) {
    if (input >= 0) {
        return input;
    }
    else {
        console.log("Input should be positive Integer");
    }
}


// ***************************************************************************************************************************



// Feet to Mile Section


function feetToMile(feet) {
    var feet = checkInputValidity(feet);
    var miles = (feet / 5280).toFixed(7);
    return miles;
}

var miles = feetToMile(10);             // Inputting the measurement of the feet to convert it to Miles

console.log("Feet to Miles : " + miles + " mile" + "\n");






// *************************************************************************************************************************


// Wood calculator Section



function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {

    var numberOfChair = checkInputValidity(numberOfChair);
    var numberOfTable = checkInputValidity(numberOfTable);
    var numberOfBed = checkInputValidity(numberOfBed);

    var totalWood = (numberOfChair * 1) + (numberOfTable * 3) + (numberOfBed * 5);

    return totalWood;
}

var total_wood = woodCalculator(1, 1, 1);    // Inputting the number of chair , number of table, number of bed

console.log("Total Wood You need : " + total_wood + " cubic feet" + "\n");






// ***************************************************************************************************************************


// Brick Calculating Section


function brickCalculator(floorNumber) {

    if (floorNumber > 20) {

        var first10thFloor = 10 * 15;                   // 1st Floor to 10th Floor feet counting
        var second10thFloor = 10 * 12;                  // 11th Floor to 20th Floor feet counting
        var remainFloor = (floorNumber - 20) * 10;      // Remaining Floor's Feet counting

        total = (first10thFloor + second10thFloor + remainFloor) * 1000;

        return total;
    }

    else if (floorNumber <= 20 && floorNumber >= 11) {

        var first10thFloor = 10 * 15;                   // 1st Floor to 10th Floor feet counting
        var remainFloor = (floorNumber - 10) * 12;      // Remaining Floor's Feet counting

        total = (first10thFloor + remainFloor) * 1000;

        return total;
    }

    else if (floorNumber <= 10 && floorNumber >= 1) {

        var floor_Feet = floorNumber * 15;

        total = floor_Feet * 1000;

        return total;
    }

    else {
        console.log("Input should be positive integer")
    }


}


var quantity = brickCalculator(30);      // Inputting the number of Floors of the building

console.log("The quantity of Bricks : " + quantity + " bricks" + "\n");






// ********************************************************************************************************************************


// Finding Tiny Friend Section




function tinyFriend(array) {

    var tinyName = array[0];
    for (var i = 0; i < array.length; i++) {

        if (typeof array[i] === 'string') {

            if (array[i].length < tinyName.length) {
                tinyName = array[i];
            }
        }
        else {
            console.log("Input should be String only")
        }

    }
    return tinyName;
}


var friendList = tinyFriend(['Naimur', 'Rahman', 'Shuvo', 'Dia', 'AmirKhan']);  //inputting the name of my friend

console.log("My most tiny friend is : " + friendList + "\n");





// ********************************************************************************************************************************