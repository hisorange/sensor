import { AbstractSensor } from '../abstract.sensor';

export class MemorySensor extends AbstractSensor<number> {
  read(): number {
    return process.memoryUsage().heapUsed;
  }

  reset(): void {}
}
