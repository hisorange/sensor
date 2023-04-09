import { AbstractSensor } from './abstract.sensor';

// DRAFT

/**
 * Measure the throughput of a system, within the predefined interval.
 */
export class ThroughputSensor extends AbstractSensor<number> {
  protected hits: number[] = [];
  protected lastCleared: number = Date.now();

  constructor(id: string, protected interval: number = 1000) {
    super(id);
  }

  increment() {
    const now = Date.now();

    if (now - this.lastCleared > this.interval) {
      const within = now - this.interval;
      const firstIndex = this.hits.findIndex(hit => hit >= within);

      this.hits = this.hits.slice(0, firstIndex);
      this.lastCleared = now;
    }

    this.hits.push(now);
  }

  /**
   * Read the throughput of the system, in the last interval.
   */
  read(): number {
    const within = Date.now() - this.interval;

    return this.hits.filter(hit => hit >= within).length;
  }

  reset(): void {
    this.hits = [];
  }

  destroy(): void {}
}
