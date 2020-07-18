const _storage = new WeakMap();
const _isEmpty = new WeakMap();
class Stack {
  constructor() {
    _storage.set(this, []);
    _isEmpty.set(this, (s) => {
      if (s.length == 0) throw new Error("the Stack is Empty");
    });
  }
  get count() {
    return _storage.get(this).length;
  }
  push(value) {
    let storage = _storage.get(this);

    storage.push(value);
  }

  pop() {
    let storage = _storage.get(this);
    const isEmpty = _isEmpty.get(this);

    isEmpty(storage);

    return storage.pop();
  }

  peak() {
    const storage = _storage.get(this);
    const isEmpty = _isEmpty.get(this);

    isEmpty(storage);

    return storage[storage.length - 1];
  }
}

const s = new Stack();
