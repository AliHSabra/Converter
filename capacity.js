function milliliterToCentiliter(milliliter) {
    return milliliter / 10;
}
function centiliterToMilliliter(centiliters) {
    return centiliters * 10;
}
function milliliterToKiloliter(milliliter) {
    return milliliter / 1000000;
}
function kiloliterToMilliliter(kiloliter) {
    return kiloliter * 1000000;
}
function milliliterToLiter(milliliter) {
    return milliliter / 1000;
}
function literTomilliliter(liter) {
    return liter * 1000;
}
function literToKiloLiter(liter) {
    return liter / 1000;
}
function kiloliterToLiter(kiloliter) {
    return kiloliter * 1000;
}

function convertCapacity() {
    let input = document.getElementById("input2").value;
    let inputUnit = document.getElementById("input_unit2").value;
    let outputUnit = document.getElementById("output_unit2").value;
    let output;
    if (inputUnit === "ml" && outputUnit === "cl") {
        output = milliliterToCentiliter(input);
    } else if (inputUnit === "ml" && outputUnit === "kl") {
        output = milliliterToKiloliter(input);
    } else if (inputUnit === "ml" && outputUnit === "l") {
        output = milliliterToLiter(input);
    } else if (inputUnit === "cl" && outputUnit === "ml") {
        output = centiliterToMilliliter(input);
    } else if (inputUnit === "cl" && outputUnit === "kl") {
        output = milliliterToKiloliter(centiliterToMilliliter(input));
    } else if (inputUnit === "cl" && outputUnit === "l") {
        output = milliliterToLiter(centiliterToMilliliter(input));
    } else if (inputUnit === "kl" && outputUnit === "ml") {
        output = kiloliterToMilliliter(input);
    } else if (inputUnit === "kl" && outputUnit === "cl") {
        output = milliliterToCentiliter(kiloliterToMilliliter(input));
    } else if (inputUnit === "kl" && outputUnit === "l") {
        output = kiloliterToLiter(input);
    } else if (inputUnit === "l" && outputUnit === "ml") {
        output = literTomilliliter(input);
    } else if (inputUnit === "l" && outputUnit === "cl") {
        output = milliliterToCentiliter(literTomilliliter(input));
    } else if (inputUnit === "l" && outputUnit === "kl") {
        output = literToKiloLiter(input);
    } else {
        output = input;
    }
    document.getElementById("output2").value = output;
}
