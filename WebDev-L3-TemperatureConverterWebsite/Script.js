"use strict";

// =========================================

// ELEMENT REFERENCES

// =========================================

const converterForm = document.getElementById("converter-form");

const temperatureInput = document.getElementById("temperature");

const inputUnit = document.getElementById("input-unit");

const errorMessage = document.getElementById("error-message");

const resultsSection = document.getElementById("results-section");

const celsiusResult = document.getElementById("celsius-result");

const fahrenheitResult = document.getElementById("fahrenheit-result");

const kelvinResult = document.getElementById("kelvin-result");

const currentYear = document.getElementById("current-year");

const ABSOLUTE_ZERO_C = -273.15;

const ABSOLUTE_ZERO_F = -459.67;

const ABSOLUTE_ZERO_K = 0;

const TEMPERATURE_UNITS = {

    C: "Celsius",

    F: "Fahrenheit",

    K: "Kelvin"

};

// =========================================

// ERROR HANDLING

// =========================================

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.hidden = false;

    temperatureInput.setAttribute("aria-invalid", "true");

    resultsSection.hidden = true;

}

function clearError() {

    errorMessage.textContent = "";

    errorMessage.hidden = true;

    temperatureInput.removeAttribute("aria-invalid");

}

// =========================================

// TEMPERATURE CONVERSION

// =========================================

/**

 * Converts a temperature from the selected unit

 * to Celsius, Fahrenheit, and Kelvin.

 *

 * @param {number} value - Input temperature.

 * @param {string} unit - C, F, or K.

 * @returns {{ celsius: number, fahrenheit: number, kelvin: number }}

 */

function convertTemperature(value, unit) {

    let celsius;

    switch (unit) {

        case "C":

            celsius = value;

            break;

        case "F":

            celsius = (value - 32) * (5 / 9);

            break;

        case "K":

            celsius = value - 273.15;

            break;

        default:

            throw new Error("Please select a valid temperature unit.");

    }

    const fahrenheit = (celsius * (9 / 5)) + 32;

    const kelvin = celsius + 273.15;

    return {

        celsius,

        fahrenheit,

        kelvin

    };

}

// =========================================

// ABSOLUTE ZERO VALIDATION

// =========================================

/**

 * Checks whether the temperature is below

 * absolute zero in its selected unit.

 */

function isBelowAbsoluteZero(value, unit) {

    switch (unit) {

        case "C":

            return value < ABSOLUTE_ZERO_C;

        case "F":

            return value < ABSOLUTE_ZERO_F;

        case "K":

            return value < ABSOLUTE_ZERO_K;

        default:

            return true;

    }

}

// =========================================

// NUMBER FORMATTING

// =========================================

/**

 * Displays up to four decimal places.

 * Removes unnecessary trailing zeros.

 */

function formatTemperature(value) {

    // Prevent floating-point arithmetic noise.

    if (Math.abs(value) < 0.0000001) {

        value = 0;

    }

    return Number(value.toFixed(4)).toLocaleString("en-US", {

        useGrouping: false,

        maximumFractionDigits: 4

    });

}

// =========================================

// DISPLAY RESULTS

// =========================================

function displayResults(temperatures) {

    celsiusResult.textContent =

        `${formatTemperature(temperatures.celsius)} °C`;

    fahrenheitResult.textContent =

        `${formatTemperature(temperatures.fahrenheit)} °F`;

    kelvinResult.textContent =

        `${formatTemperature(temperatures.kelvin)} K`;

    resultsSection.hidden = false;

}

// =========================================

// CONVERSION FORM SUBMISSION

// =========================================

converterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearError();

    const rawValue = temperatureInput.value.trim();

    const unit = inputUnit.value;

    // Check for an empty input.

    if (rawValue === "") {

        showError("Please enter a temperature value.");

        temperatureInput.focus();

        return;

    }

    const value = Number(rawValue);

    // Reject non-numeric values and infinity.

    if (!Number.isFinite(value)) {

        showError("Please enter a valid numeric temperature.");

        temperatureInput.focus();

        return;

    }

    // Validate the selected unit.

    if (!Object.prototype.hasOwnProperty.call(TEMPERATURE_UNITS, unit)) {

        showError("Please select a valid temperature unit.");

        inputUnit.focus();

        return;

    }

    // Reject values below absolute zero.

    if (isBelowAbsoluteZero(value, unit)) {

        let minimumTemperature;

        switch (unit) {

            case "C":

                minimumTemperature = "-273.15°C";

                break;

            case "F":

                minimumTemperature = "-459.67°F";

                break;

            case "K":

                minimumTemperature = "0 K";

                break;

        }

        showError(

            `This temperature is below absolute zero. ` +

            `The lowest physically possible temperature is ${minimumTemperature}.`

        );

        temperatureInput.focus();

        return;

    }

    try {

        const convertedTemperatures = convertTemperature(value, unit);

        displayResults(convertedTemperatures);

    } catch (error) {

        showError(

            "Something went wrong during conversion. Please check your input and try again."

        );

        console.error("Temperature conversion error:", error);

    }

});

// =========================================

// REAL-TIME ERROR CLEARING

// =========================================

// Remove the previous error when the user edits

// the value or selects another unit.

temperatureInput.addEventListener("input", clearError);

inputUnit.addEventListener("change", clearError);

// =========================================

// FOOTER YEAR

// =========================================

currentYear.textContent = new Date().getFullYear();
