# Sensor

Set of sensors for monitoring the performance of your application or library.

## ActuationSensor

Counts the number actuations.

```
const sensor = new ActuationSensor('queries');

sensor.actuate();
sensor.actuate();

console.log(sensor.read()); // 2
```
