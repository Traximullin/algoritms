class Robot {
  private readonly width: number;
  private readonly height: number;
  private readonly perimeter: number;
  private pos: number;
  private hasMoved: boolean;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (width + height - 2);
    this.pos = 0;
    this.hasMoved = false;
  }

  step(num: number): void {
    this.hasMoved = true;
    this.pos = (this.pos + num) % this.perimeter;
  }

  getPos(): number[] {
    const p = this.pos;
    const { width: w, height: h } = this;
    if (p < w) return [p, 0];
    if (p < w + h - 1) return [w - 1, p - (w - 1)];
    if (p < 2 * w + h - 2) return [w - 1 - (p - (w + h - 2)), h - 1];
    return [0, this.perimeter - p];
  }

  getDir(): string {
    const p = this.pos;
    const { width: w, height: h } = this;
    if (p === 0) return this.hasMoved ? "South" : "East";
    if (p < w) return "East";
    if (p < w + h - 1) return "North";
    if (p < 2 * w + h - 2) return "West";
    return "South";
  }
}
