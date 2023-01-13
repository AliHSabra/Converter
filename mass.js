function milligramsToCentigrams(milligrams) {
    return milligrams / 10;
}
function centigramsToMilligrams(centigrams) {
    return centigrams * 10;
}
function milligramToGram(milligrams) {
    return milligrams / 1000;
}
function GramToMilligram(gram) {
    return gram * 1000;
}
function gramsToKilograms(grams) {
    return grams / 1000;
}

function kilogramsToGrams(kilograms) {
    return kilograms * 1000;
}
function gramsToTons(grams) {
    return grams / 907185;
}

function tonsToGrams(tons) {
    return tons * 907185;
}


function convertMass() {
    let input = document.getElementById("input1").value;
    let inputUnit = document.getElementById("input_unit1").value;
    let outputUnit = document.getElementById("output_unit1").value;
    let output;
    if (inputUnit === "mg" && outputUnit === "cg") {
        output = milligramsToCentigrams(input);
    } else if (inputUnit === "mg" && outputUnit === "g") {
        output = milligramToGram(input);
    } else if (inputUnit === "cg" && outputUnit === "mg") {
        output = centigramsToMilligrams(input);
    } else if (inputUnit === "cg" && outputUnit === "g") {
        output = milligramToGram(centigramsToMilligrams(input));
    } else if (inputUnit === "g" && outputUnit === "mg") {
        output = GramToMilligram(input);
    } else if (inputUnit === "g" && outputUnit === "cg") {
        output = milligramsToCentigrams(GramToMilligram(input));
    }else if (inputUnit === "g" && outputUnit === "kg") {
        output = gramsToKilograms(input);
    } else if (inputUnit === "kg" && outputUnit === "g") {
        output = kilogramsToGrams(input);
    }else if (inputUnit === "mg" && outputUnit === "kg") {
        output = gramsToKilograms(milligramToGram(input));
    } else if (inputUnit === "kg" && outputUnit === "mg") {
        output = GramToMilligram(kilogramsToGrams(input));
    } else if (inputUnit === "cg" && outputUnit === "kg") {
        output = gramsToKilograms(milligramToGram(centigramsToMilligrams(input)));
    } else if (inputUnit === "kg" && outputUnit === "cg") {
        output = milligramsToCentigrams(GramToMilligram(kilogramsToGrams(input)));
    }else if (inputUnit === "g" && outputUnit === "t") {
        output = gramsToTons(input);
    } else if (inputUnit === "t" && outputUnit === "g") {
        output = tonsToGrams(input);
    } else if (inputUnit === "mg" && outputUnit === "t") {
        output = gramsToTons(milligramToGram(input));
    } else if (inputUnit === "t" && outputUnit === "mg") {
        output = GramToMilligram(tonsToGrams(input));
    } else if (inputUnit === "cg" && outputUnit === "t") {
        output = gramsToTons(milligramToGram(centigramsToMilligrams(input)));
    } else if (inputUnit === "t" && outputUnit === "cg") {
        output = milligramsToCentigrams(GramToMilligram(tonsToGrams(input)));
    } else if (inputUnit === "kg" && outputUnit === "t") {
        output = gramsToTons(kilogramsToGrams(input));
    } else if (inputUnit === "t" && outputUnit === "kg") {
        output = gramsToKilograms(tonsToGrams(input));
    }
    
    
    else {
        output = input;
    }
   
    document.getElementById("output1").value = output;
}