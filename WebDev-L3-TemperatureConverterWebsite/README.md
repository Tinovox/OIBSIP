# Thermo — Temperature Converter

A responsive temperature conversion website built with HTML5,

CSS3, and vanilla JavaScript.

Thermo converts temperatures between Celsius, Fahrenheit,

and Kelvin while validating user input and preventing

temperatures below absolute zero.

## Features

- Convert Celsius to Fahrenheit and Kelvin.

- Convert Fahrenheit to Celsius and Kelvin.

- Convert Kelvin to Celsius and Fahrenheit.

- Display all three temperature scales simultaneously.

- Validate empty and invalid numeric inputs.

- Reject temperatures below absolute zero.

- Display clear, user-friendly error messages.

- Format results to a maximum of four decimal places.

- Responsive layout for desktop, tablet, and mobile.

- Accessible labels, keyboard focus indicators, and error announcements.

- Quick-reference guide for common temperatures.

- No external libraries or dependencies.

## Technologies

- HTML5 — page structure and input controls.

- CSS3 — styling, responsive layouts, and animations.

- JavaScript (Vanilla) — conversion formulas and input validation.

## Project Structure

temperature-converter/

├── index.html

├── style.css

├── script.js

└── README.md

## How to Run

1. Download or clone this repository.

2. Open the project folder in Visual Studio Code.

3. Ensure all four files are in the same directory.

4. Open `index.html` in a web browser.

You can also use the Live Server extension in Visual Studio Code

to preview the website.

No installation or build process is required.

## Conversion Formulas

### Celsius to Fahrenheit

F = (C × 9/5) + 32

### Fahrenheit to Celsius

C = (F − 32) × 5/9

### Celsius to Kelvin

K = C + 273.15

### Kelvin to Celsius

C = K − 273.15

### Fahrenheit and Kelvin

Fahrenheit is converted to Celsius first, then to Kelvin.

Kelvin is converted to Celsius first, then to Fahrenheit.

## Absolute Zero Validation

The application rejects temperatures below absolute zero:

- Celsius: -273.15°C

- Fahrenheit: -459.67°F

- Kelvin: 0 K

Values exactly at absolute zero are accepted.

## Testing Checklist

- [ ] Convert 25°C to 77°F and 298.15 K.

- [ ] Convert 32°F to 0°C and 273.15 K.

- [ ] Convert 300 K to 26.85°C and 80.33°F.

- [ ] Confirm that empty input displays an error.

- [ ] Confirm that temperatures below absolute zero are rejected.

- [ ] Confirm that absolute zero itself is accepted.

- [ ] Check that decimal inputs work correctly.

- [ ] Test the layout on desktop and mobile devices.

## Limitations

- Results are rounded to a maximum of four decimal places.

- The tool performs standard temperature conversions.

- It does not convert temperature differences or perform

  scientific uncertainty calculations.

## License

This project is available for educational and personal use.
