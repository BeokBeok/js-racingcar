import { Cars } from "./cars.js";

export class Winner {
  /** @type {Cars} */
  #cars;

  constructor({ cars }) {
    if (!(cars instanceof Cars)) {
      throw new Error("cars는 Cars의 인스턴스이어야 합니다.");
    }
    this.#cars = cars;
  }

  getCarNameList() {
    const maxPosition = Math.max(
      ...this.#cars.value.map((car) => car.position)
    );
    return this.#cars.value
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name.value);
  }
}
