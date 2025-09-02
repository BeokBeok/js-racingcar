import { CarName } from "../../../src/domain/car-name";

describe("CarName", () => {
  it("자동차는 이름을 가질 수 있습니다.", () => {
    const carName = new CarName("다섯글자다");
    expect(carName.value).toEqual("다섯글자다");
  });
  it("자동차 이름은 빈 문자열일 수 없습니다", () => {
    expect(() => new CarName("")).toThrow();
  });
  it("자동차 이름은 5자를 초과할 수 없습니다.", () => {
    expect(() => new CarName("여섯글자이다")).toThrow();
  });
});
