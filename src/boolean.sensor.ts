import { AbstractSensor } from './abstract.sensor';

export class BooleanSensor extends AbstractSensor {
  protected state: boolean = false;

  flip() {
    this.state = !this.state;
  }

  set(newState: boolean): boolean {
    if (this.state !== newState) {
      this.state = newState;

      return true;
    }

    return false;
  }

  read(): boolean {
    return this.state;
  }
}
