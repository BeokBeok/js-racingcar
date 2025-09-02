import { CarMoveStrategy } from "../car-strategy.js";
import { MoveStrategy } from "../move-strategy.js";
import { CarName } from "./car-name.js";

export class Car {
  static #FORWARD_STEP = 1;

  /** @type {CarName} */
  #name;
  get name() {
    return this.#name;
  }

  #position = 0;
  get position() {
    return this.#position;
  }

  constructor(name, position = 0) {
    this.#name = new CarName(name);

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

  #validatePosition(position) {
    if (typeof position !== "number" || position < 0) {
      throw new Error("자동차의 위치는 음수 값일 수 없습니다.");
    }
  }
}

export default Car;
