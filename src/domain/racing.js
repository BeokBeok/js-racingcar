import Car from "./car.js";
import { Cars } from "./cars.js";

export class Racing {
  /** @type {Cars} */
  #cars;
  get cars() {
    return this.#cars;
  }
  #phase;
  get phase() {
    return this.#phase;
  }
  /** @type {Map<Car, number[]>} */
  #history;
  get history() {
    return this.#history;
  }

  constructor({ cars, phase = 5 }) {
    this.#cars = cars;

    this.#validPhase(phase);
    this.#phase = phase;

    this.#history = new Map();
    this.#cars.value.forEach((car) => {
      this.#history.set(car, []);
    });
  }

  run(moveStrategyList = null) {
    for (let cycle = 0; cycle < this.#phase; cycle++) {
      this.#cars.value.forEach((car, carIndex) => {
        if (moveStrategyList === null) {
          car.forward();
        } else {
          car.forward(moveStrategyList[carIndex][cycle]);
        }
        const positionHistory = this.#history.get(car);
        this.#history.set(car, [...positionHistory, car.position]);
      });
    }
  }

  #validPhase(phase) {
    if (!Number.isInteger(phase) || phase < 1) {
      throw new Error("자동차 경주는 1회 이상이어야 합니다.");
    }
  }
}
