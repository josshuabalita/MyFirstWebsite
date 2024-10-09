/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Group 2: Josshua Balita, Woraphot Khuanchanthuek
*/

//Temperature page

//FOOTER
function getCurrentDateTime() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-us', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formattedDateTime = `${day}, ${month} ${date}, ${year} - ${hours}:${minutes}`;
    return formattedDateTime;
}
document.getElementById('current-time').textContent = getCurrentDateTime();

//conversions 
// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}
  // Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
// Convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
// Convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}
// Convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
}

//Update the result 
function convertTemperature() {
    const temperature = parseFloat($("#temperature").val());
    const fromUnit = $("#fromUnit").val();
    const toUnit = $("#toUnit").val();

    if(!isNaN(temperature)) {
        let result = 0;
        if (fromUnit === "F" && toUnit === "C")
            result = fahrenheitToCelsius(temperature);
        else if (fromUnit === "F" && toUnit === "K")
            result = fahrenheitToKelvin(temperature);
        else if (fromUnit === "C" && toUnit === "F")
            result = celsiusToFahrenheit(temperature);
        else if (fromUnit === "C" && toUnit === "K")
            result = celsiusToKelvin(temperature);
        else if (fromUnit === "K" && toUnit === "F")
            result = kelvinToFahrenheit(temperature);
        else if (fromUnit === "K" && toUnit === "C")
            result = kelvinToCelsius(temperature);
        else 
            result = temperature; // both unit are the same then output the same num as input

        $("#result").html(`
            <p>${temperature.toFixed(2)}${fromUnit} = ${result.toFixed(2)}${toUnit}</p>
        `);
    }
    else 
        $("#result").html("<p>Please enter a valid temperature.</p>");
}

$(document).ready(function () {
    $("#temperature, #fromUnit, #toUnit").on("input", convertTemperature);
    convertTemperature();
});