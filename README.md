Smoke adc

##  Readme in progress  ..

####  homebridge accessories
```json
"accessories": [
  {
    "comment": "-------------------------  Smoke: Boiler  -------------------------",
    "type": "smokeSensor",
    "name": "Дым Котельная",
    "topics": {
        "getSmokeDetected": "/devices/smoke_1/controls/value",
        "getStatusTampered": "/devices/smoke_1/controls/tampered"
    },
    "integerValue": true,
    "accessory": "mqttthing"
  },
  {
      "comment": "-------------------------  Smoke: Power  -------------------------",
      "type": "switch",
      "name": "Дым Питание",
      "topics": {
          "getOn": "/devices/smoke/controls/power",
          "setOn": "/devices/smoke/controls/power/on"
      },
      "integerValue": true,
      "accessory": "mqttthing"
  }
]
```
