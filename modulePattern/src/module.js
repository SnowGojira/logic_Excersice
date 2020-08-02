const _radius = new WeakMap();

export default class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`hello circle with ${_radius.get(this)}`);
  }
}
