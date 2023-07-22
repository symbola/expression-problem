import { Circle, Square, Triangle } from './index'

describe('Circle', () => {
  it('is areable', () => {
    expect(new Circle(4).area()).toBe(50.26548245743669);
  })
})

describe("Square", () => {
  it("is areable", () => {
    expect(new Square(4, 5).area()).toBe(20);
  });
});

describe("Triangle", () => {
  it("is areable", () => {
    expect(new Triangle(4, 5, 6).area()).toBe(9.921567416492215);
  });
});
