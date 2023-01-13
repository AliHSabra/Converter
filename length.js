function millimetersToCentimeters(millimeters) {
    return millimeters / 10;
}
function centimetersToMillimeters(centimeters) {
    return centimeters * 10;
}
function millimetersToKilometers(millimeters) {
    return millimeters / 1000000;
}
function kilometersToMillimeters(kilometers) {
    return kilometers * 1000000;
}
function millimetersToMeters(millimeters) {
    return millimeters / 1000;
}
function metersToMillimeters(meters) {
    return meters * 1000;
}
function metersToKilometers(meters) {
    return meters / 1000;
}
function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}
function meterToFeet(meter) {
    return meter * 3.2808;
}

function feetToMeter(feet) {
    return feet / 3.2808;
}

function convert() {
    let input = document.getElementById("input").value;
    let inputUnit = document.getElementById("input_unit").value;
    let outputUnit = document.getElementById("output_unit").value;
    let output;
    if (inputUnit === "mm" && outputUnit === "cm") {
        output = millimetersToCentimeters(input);
    } else if (inputUnit === "mm" && outputUnit === "km") {
        output = millimetersToKilometers(input);
    } else if (inputUnit === "mm" && outputUnit === "m") {
        output = millimetersToMeters(input);
    } else if (inputUnit === "cm" && outputUnit === "mm") {
        output = centimetersToMillimeters(input);
    } else if (inputUnit === "cm" && outputUnit === "km") {
        output = millimetersToKilometers(centimetersToMillimeters(input));
    } else if (inputUnit === "cm" && outputUnit === "m") {
        output = millimetersToMeters(centimetersToMillimeters(input));
    } else if (inputUnit === "km" && outputUnit === "mm") {
        output = kilometersToMillimeters(input);
    } else if (inputUnit === "km" && outputUnit === "cm") {
        output = millimetersToCentimeters(kilometersToMillimeters(input));
    } else if (inputUnit === "km" && outputUnit === "m") {
        output = kilometersToMeters(input);
    } else if (inputUnit === "m" && outputUnit === "mm") {
        output = metersToMillimeters(input);
    } else if (inputUnit === "m" && outputUnit === "cm") {
        output = millimetersToCentimeters(metersToMillimeters(input));
    } else if (inputUnit === "m" && outputUnit === "km") {
        output = metersToKilometers(input);
    }else if (inputUnit === "m" && outputUnit === "ft") {
        output = meterToFeet(input);
    } else if (inputUnit === "ft" && outputUnit === "m") {
        output = feetToMeter(input);
    }else if (inputUnit === "ft" && outputUnit === "cm") {
        output = metersToMillimeters(feetToMeter(input)) / 10;
    } else if (inputUnit === "ft" && outputUnit === "mm") {
        output = metersToMillimeters(feetToMeter(input));
    } else if (inputUnit === "ft" && outputUnit === "km") {
        output = metersToKilometers(feetToMeter(input));
    }else if (inputUnit === "mm" && outputUnit === "ft") {
        output = meterToFeet(millimetersToMeters(input));
    }else if (inputUnit === "cm" && outputUnit === "ft") {
        output = meterToFeet(millimetersToMeters(centimetersToMillimeters(input)));
    } else if (inputUnit === "km" && outputUnit === "ft") {
        output = meterToFeet(kilometersToMeters(input));
    }
    
    
    
    
     else {
        output = input;
    }
    document.getElementById("output").value = output;
}
