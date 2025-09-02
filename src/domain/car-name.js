export class CarName {
  static MAX_LENGTH_NAME = 5;
  static #MIN_LENGTH_NAME = 1;

  #value;
  get value() {
    return this.#value;
  }

  constructor(value) {
    if (typeof value !== "string") {
      throw new Error("자동차 이름은 string 타입이어야 합니다");
    }
    if (
      !this.#inRange(value.length, {
        min: CarName.#MIN_LENGTH_NAME,
        max: CarName.MAX_LENGTH_NAME,
      })
    ) {
      throw new Error(
        `자동차 이름은 ${CarName.#MIN_LENGTH_NAME}자 이상 ${
          CarName.MAX_LENGTH_NAME
        }자 이하만 가능합니다.`
      );
    }
    this.#value = value;
  }

  #inRange(value, { min, max }) {
    return min <= value && value <= max;
  }
}
