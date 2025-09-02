import { MoveStrategy } from "./move-strategy.js";

export class CarMoveStrategy extends MoveStrategy {
  static #THRESHHOLD = 4;

  shouldMove() {
    return CarMoveStrategy.#THRESHHOLD <= Math.floor(Math.random() * 10);
  }
}
