/**
 * @param {number} celsius
 * @return {number[]}
 */
function convertTemperature(celsius) {
    const kelvin = celsius + 273.15;

    const fahrenheit = celsius * 1.80 + 32.00;

    const roundedKelvin = Math.round(kelvin * 1e5) / 1e5;
    const roundedFahrenheit = Math.round(fahrenheit * 1e5) / 1e5;

    return [roundedKelvin, roundedFahrenheit];
}
