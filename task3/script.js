document.querySelectorAll('.section-btn').forEach(button => {
	//  we use data-sectoin attribute on the button to get the section id and show the section and hide the rest
	button.addEventListener('click', function () {
		document.querySelectorAll('.conversion-section').forEach(section => {
			section.classList.add('hidden');
		});
		const sectionId = this.getAttribute('data-section');
		document.getElementById(sectionId).classList.remove('hidden');
	});
});

window.onload = () => {
	document.getElementById('temperatureSection').classList.remove('hidden'); // Show the first section by default
};

function convertTemperature() {
	const temperature = parseFloat(document.getElementById('tempInput').value);
	const scale = document.getElementById('tempScale').value;
	let resultText = '';

	if (isNaN(temperature)) {
		alert("Please enter a valid number for the temperature.");
		return;
	}

	if (scale === "Celsius") {
		// Convert to Fahrenheit and Kelvin
		const fahrenheit = (temperature * 9 / 5) + 32;
		const kelvin = temperature + 273.15;
		resultText = `${temperature}°C is ${fahrenheit.toFixed(2)}°F or ${kelvin.toFixed(2)}K`;
	} else if (scale === "Fahrenheit") {
		// Convert to Celsius and Kelvin
		const celsius = (temperature - 32) * 5 / 9;
		const kelvin = (temperature - 32) * 5 / 9 + 273.15;
		resultText = `${temperature}°F is ${celsius.toFixed(2)}°C or ${kelvin.toFixed(2)}K`;
	} else if (scale === "Kelvin") {
		// Convert to Celsius and Fahrenheit
		const celsius = temperature - 273.15;
		const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
		resultText = `${temperature}K is ${celsius.toFixed(2)}°C or ${fahrenheit.toFixed(2)}°F`;
	}

	document.getElementById('tempResult').textContent = resultText;
}

function convertSI() {
	const value = parseFloat(document.getElementById('siInput').value);
	const scale = document.getElementById('siScale').value;
	let result = 0;
	let unit = '';

	if (isNaN(value)) {
		alert("Please enter a valid number.");
		return;
	}

	switch (scale) {
		case 'Meters to Kilometers':
			result = value / 1000;
			unit = 'Kilometers';
			break;
		case 'Kilograms to Grams':
			result = value * 1000;
			unit = 'Grams';
			break;
		case 'Liters to Milliliters':
			result = value * 1000;
			unit = 'Milliliters';
			break;
	}

	document.getElementById('siResult').textContent = `Result: ${result} ${unit}`;
}