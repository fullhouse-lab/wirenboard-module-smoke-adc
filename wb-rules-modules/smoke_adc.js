var MODULE_NAME 		= "smoke-adc";
var MODULE_VERSION  = "v.1.0";

exports.start = function(config) {
	if (!validateConfig(config)) return;

	//  device  //
	createDevice(config);

	//  rules  //
	createRule_externalSensor(config);

  log(config.id + ": Started (" + MODULE_NAME + " " + MODULE_VERSION + ")");
};

//  Validate config  //

var validateConfig = function(_config) {
  if (!_config) {
    log("Error: " + MODULE_NAME + ": No config");
    return false;
  }

  if (!_config.id || !_config.id.length) {
    log("Error: " + MODULE_NAME + ": Config: Bad id");
    return false;
  }

  if (!_config.title || !_config.title.length) {
    log("Error: " + MODULE_NAME + ": Config: Bad title");
    return false;
  }

  return true;
}

//
//  Device  //
//

function createDevice(config) {
	var cells = {
		tampered: 	{ type: "value", 	value: 0, readonly: false },
		value: 			{ type: "value", 	value: 0, readonly: false }
	}

	defineVirtualDevice(config.id, {
	  title: config.title,
	  cells: cells
	});
}

function createRule_externalSensor(config) {
	defineRule({
    whenChanged: config.sensor.device + "/" + config.sensor.control,
    then: function (newValue, devName, cellName) {

			//  check tampered  //
			if (newValue >= config.tamperedValue.min && newValue < config.tamperedValue.max) {
				dev[config.id]["tampered"] = 1;
				dev[config.id]["value"] = 0;
			}

			//  check activation  //
			else if (newValue >= config.activationValue.min && newValue < config.activationValue.max) {
				dev[config.id]["tampered"] = 0;
				dev[config.id]["value"] = 1;
			}

			//  not activated  //
			else {
				dev[config.id]["tampered"] = 0;
				dev[config.id]["value"] = 0;
			}
		}
	});
}
