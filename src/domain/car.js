import { CarMoveStrategy } from "../car-strategy.js";
import { MoveStrategy } from "../move-strategy.js";

export class Car {
  static #FORWARD_STEP = 1;
  static MAX_LENGTH_NAME = 5;
  static MIN_LENGTH_NAME = 1;

  /** @type {string} */
  #name;
  get name() {
    return this.#name;
  }

  #position = 0;
  get position() {
    return this.#position;
  }

  constructor(name, position = 0) {
    this.#validateName(name);
    this.#name = name;

    this.#validatePosition(position);
    this.#position = position;
  }

  /**
   *
   * @param {MoveStrategy} moveStrtegy
   * @returns
   */
  forward(moveStrategy = new CarMoveStrategy()) {
    if (!moveStrategy.shouldMove()) {
      return;
    }
    this.#position += Car.#FORWARD_STEP;
  }

  #validateName(name) {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("자동차 이름은 빈 문자열일 수 없습니다.");
    }
    if (Car.MAX_LENGTH_NAME < name.length) {
      throw new Error("자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  #validatePosition(position) {
    if (typeof position !== "number" || position < 0) {
      throw new Error("자동차의 위치는 음수 값일 수 없습니다.");
    }
  }
}

export default Car;
