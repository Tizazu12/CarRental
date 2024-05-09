"use strict"

// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAsstCheckbox = document.getElementById("inputOptRoadsideAsstCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");

window.onload = function () {
    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClick;
};

function onEstimateTotalCostButtonClick() {
    // Get known values
    let numOfDays = parseInt(inputNumOfDays.value);
    let isOptElecTollTag = inputOptElecTollTagCheckbox;
    let isOptGPS = inputOptGPSCheckbox;
    let isOptRoadAsst = inputOptRoadsideAsstCheckbox;
    let isUnder25 = inputUnder25YesRadio ;

    // Calculate unknown values
    let carRentalAmount = 29.99 * numOfDays;

    let optionsAmount = 0;

    if (isOptElecTollTag) {
        optionsAmount += 3.95 * numOfDays;
    }

    if (isOptGPS) {
        optionsAmount += 2.95 * numOfDays;
    }

    if (isOptRoadAsst) {
        optionsAmount += 2.95 * numOfDays;
    }
     //isUnder25 = totalDueAmount * .03;

    //let surchargeAmount = isUnder25 * (carRentalAmount + optionsAmount);

    //let totalDueAmount = carRentalAmount + optionsAmount + surchargeAmount;

if(isUnder25){
  surchargeAmount = 0.30 * (carRentalAmount + optionsAmount);
} else{
  //surchargeAmount = 0;
}

let totaldueAmount = carRentalAmount + optionsAmount + surchargeAmount;

    // Display the results
    outputCarRental.innerHTML = carRentalAmount.toFixed(2);
    outputOptions.innerHTML = optionsAmount.toFixed(2);
    outputSurcharge.innerHTML = surchargeAmount.toFixed(2);
    outputTotal.innerHTML = totalDueAmount.toFixed(2);
};

