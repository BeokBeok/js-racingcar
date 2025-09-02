import { CarName } from "./car-name.js";
import Car from "./car.js";

export class Cars {
  /** @type {Car[]} */
  #value;
  get value() {
    return this.#value;
  }

  constructor() {
    this.#value = [];
  }

  #makeCarNameList(carNames, separator = ",") {
    if (typeof carNames !== "string") {
      throw new Error("자동차 이름은 string 타입이어야 합니다.");
    }
    if (
      carNames.length <= CarName.MAX_LENGTH_NAME &&
      !carNames.includes(separator) &&
      CarName(carNames)
    ) {
      return [carNames];
    }
    if (!carNames.includes(separator)) {
      throw new Error("자동차 이름이 형식에 맞지 않습니다.");
    }
    return carNames.split(separator);
  }

  #makeCarList(carNameList) {
    if (
      !Array.isArray(carNameList) ||
      !carNameList.every((carName) => typeof carName === "string")
    ) {
      throw new Error("자동차 이름이 형식에 맞지 않습니다.");
    }
    return carNameList.map((carName) => new Car(carName));
  }

  static #fromNames(carNames, separator = ",") {
    const cars = new Cars();
    const carNameList = cars.#makeCarNameList(carNames, separator);
    cars.#value = cars.#makeCarList(carNameList);
    return cars;
  }

  static #fromList(carList) {
    if (!carList.every((car) => car instanceof Car)) {
      throw new Error("Car의 인스턴스로 된 배열이어야 합니다.");
    }
    const cars = new Cars();
    cars.#value = [...carList];
    return cars;
  }

  static from(args, separator = ",") {
    if (Array.isArray(args)) {
      return this.#fromList(args);
    }
    if (typeof args === "string") {
      return this.#fromNames(args);
    }
    throw new Error("유효하지 않은 파라미터입니다.");
  }
}
