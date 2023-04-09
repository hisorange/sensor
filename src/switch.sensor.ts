import { AbstractSensor } from './abstract.sensor';

export class SwitchSensor extends AbstractSensor {
  protected state: boolean = false;

  flip() {
    this.state = !this.state;
  }

  on(): void {
    this.state = true;
  }

  off(): void {
    this.state = false;
  }

  read(): boolean {
    return this.state;
  }

  reset(): void {
    this.state = false;
  }
}
