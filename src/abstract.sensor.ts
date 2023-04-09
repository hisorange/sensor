export abstract class AbstractSensor<T = unknown> {
  constructor(readonly id: string) {}

  /**
   * Read the current state of the sensor.
   */
  abstract read(): T;

  /**
   * Reset the sensor to its initial state.
   */
  abstract reset(): void;
}
