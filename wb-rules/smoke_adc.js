var smoke_adc = require("smoke_adc");

smoke_adc.start({
	id: "smoke_1",
	title: "Smoke 1",
	sensor: { device: "wb-adc", control: "A1" },
	tamperedValue: { min: 0, max: 0.3 },
	activationValue: { min: 1.0, max: 2.0 }
});

smoke_adc.start({
	id: "smoke_2",
	title: "Smoke 2",
	sensor: { device: "wb-adc", control: "A2" },
	tamperedValue: { min: 0, max: 0.3 },
	activationValue: { min: 1.0, max: 2.0 }
});

smoke_adc.start({
	id: "smoke_3",
	title: "Smoke 3",
	sensor: { device: "wb-adc", control: "A3" },
	tamperedValue: { min: 0, max: 0.3 },
	activationValue: { min: 1.0, max: 2.0 }
});
