import Car from "../../../src/domain/car.js";

describe("Car", () => {
  it("자동차는 위치 값을 가지며 초기 위치는 0입니다.", () => {
    const car = new Car("커트");
    expect(car.position).toEqual(0);
  });
  it("자동차의 위치 값은 음수 값을 가질 수 없습니다.", () => {
    expect(() => new Car("커트", -1)).toThrow();
  });
  it("자동차는 전진할 수 있습니다.", () => {
    const car = new Car("레이");
    const moveStrategy = { shouldMove: () => true };
    car.forward(moveStrategy);
    expect(car.position).toEqual(1);
  });
  it("자동차는 전진하지 못합니다.", () => {
    const car = new Car("레이");
    const stayStrategy = { shouldMove: () => false };
    car.forward(stayStrategy);
    expect(car.position).toEqual(0);
  });
});
