/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-10 20:39:59
 *
 * Double linked list
 */

export class DoubleLinkItem {
  prev?: this;
  next?: this;
  list?: DoubleLink<this>;

  constructor() {}
}

export class DoubleLinkNode<T> implements DoubleLinkItem {
  prev?: this;
  next?: this;
  list?: DoubleLink<this>;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleLink<T extends DoubleLinkItem> {
  head: T | undefined = undefined;
  count = 0;

  constructor() {}

  has(item: T) {
    return item.list === this;
  }

  assertBelong(item: T, allowDangle: boolean) {
    if ((!item.list && !allowDangle) || (item.list && item.list !== this)) {
      throw new ReferenceError(
        'operating item does not belong to current list',
      );
    }
  }

  drop(item: T) {
    this.assertBelong(item, false);
    this.count -= 1;
    if (this.count === 0) {
      this.head = item.prev = item.next = item.list = void 0;
      return;
    }
    if (item === this.head) {
      this.head = item.next;
    }
    item.next!.prev = item.prev!;
    item.prev!.next = item.next!;
    item.prev = item.next = item.list = void 0;
  }

  private prepare(item: T) {
    if (item.list) {
      item.prev!.next = item.next!;
      item.next!.prev = item.prev!;
    } else {
      ['list', 'prev', 'next'].forEach((key) => {
        Object.defineProperty(item, key, {
          enumerable: false,
          configurable: true,
          writable: true,
          value: void 0,
        });
      });
      item.list = this;
      item.prev = item.next = item;
      this.count += 1;
    }
    if (!this.head) {
      this.head = item;
    }
  }

  prepend(item: T) {
    this.assertBelong(item, true);
    if (this.head === item) {
      return;
    }
    this.prepare(item);
    if (this.head === item) {
      return;
    }
    this.head!.prev!.next = item!!;
    item.prev = this.head!.prev;
    item.next = this.head;
    this.head!.prev = item!;
    this.head = item;
  }

  append(item: T) {
    this.assertBelong(item, true);
    if (this.head && this.head.prev === item) {
      return;
    }
    this.prepare(item);
    if (this.head === item) {
      return;
    }
    this.head!.prev!.next = item!!;
    item.prev = this.head!.prev;
    item.next = this.head;
    this.head!.prev = item!;
  }

  forEach(callback: (item: T, index: number) => false | any) {
    if (!this.head) {
      return;
    }
    let index = 0;
    let item = this.head;
    while (callback(item, index++) !== false) {
      if ((item = item.next!) === this.head) {
        break;
      }
    }
  }

  map<U>(callback: (item: T, index: number) => U): U[] {
    const r: U[] = [];
    this.forEach((item, index) => r.push(callback(item, index)));
    return r;
  }

  find(callback: (item: T, index: number) => boolean): T | void {
    let item: T | void = void 0;
    this.forEach((item1, index) => {
      if (callback(item1, index)) {
        item = item1;
        return false;
      }
      return true;
    });
    return item;
  }

  items(count = 0) {
    if (count === 0) {
      return this.map((item) => item);
    }
    const r: T[] = [];
    this.forEach((item, index) => {
      if (index >= count) {
        return false;
      }
      r.push(item);
      return;
    });
    return r;
  }
}
