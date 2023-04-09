import { AbstractSensor } from './abstract.sensor';

export class ActuationSensor extends AbstractSensor<number> {
  protected memory: number = 0;

  actuate(): void {
    this.memory++;
  }

  read(): number {
    return this.memory;
  }

  reset(): void {
    this.memory = 0;
  }
}
