export interface Shape {
  area(): number;
}

export class Triangle implements Shape {
  constructor(public a: number, public b: number, public c: number) {}

  area() {
    const { a, b, c } = this;
    // Semi-perimeter
    let s = (a + b + c) / 2;
    // Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
}

export class Square implements Shape {
  constructor(public a: number, public b: number) {}

  area() {
    return this.a * this.b;
  }
}

export class Circle implements Shape {
  constructor(public r: number) {}

  area() {
    return Math.PI * this.r ** 2;
  }
}
