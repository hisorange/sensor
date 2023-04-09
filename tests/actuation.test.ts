import { describe } from 'node:test';
import { ActuationSensor } from '../src';

describe('Actuation', () => {
  it('should be created', () => {
    const sensor = new ActuationSensor('test');
    expect(sensor).toBeTruthy();
    expect(sensor.id).toBe('test');
  });

  it('should actuate', () => {
    const sensor = new ActuationSensor('test');
    sensor.actuate();
    expect(sensor.read()).toBe(1);

    sensor.actuate();
    sensor.actuate();
    expect(sensor.read()).toBe(3);
  });

  it('should reset', () => {
    const sensor = new ActuationSensor('test');
    sensor.actuate();
    sensor.actuate();
    sensor.actuate();
    expect(sensor.read()).toBe(3);

    sensor.reset();
    expect(sensor.read()).toBe(0);
  });
});
