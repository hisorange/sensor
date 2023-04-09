# Sensor

Set of sensors for monitoring the performance of your application or library.

## ActuationSensor

Counts the number actuations, useful to trace total number of queries, requests, etc.

```ts
const sensor = new ActuationSensor('queries');

for (let i = 0; i < 10; i++) {
  sensor.actuate();
}

console.log(sensor.read()); // 10
```
