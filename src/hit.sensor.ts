import { AbstractSensor } from './abstract.sensor';

export class HitSensor extends AbstractSensor {
  protected memory: number = 0;

  increment(value: number = 1): HitSensor {
    this.memory += value;

    return this;
  }

  read(): number {
    return this.memory;
  }
}
