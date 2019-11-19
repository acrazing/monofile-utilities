/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-18 14:48:28
 */

export class Unique {
  readonly pool: Uint32Array;
  readonly pos: Uint32Array;
  readonly minId: number;
  free: number;

  constructor(minId: number, maxId: number) {
    this.minId = minId;
    this.free = maxId - minId;
    this.pool = new Uint32Array(this.free);
    this.pos = new Uint32Array(this.free);
    for (let i = 0; i < this.free; i++) {
      this.pool[i] = this.pos[i] = i;
    }
  }

  rent() {
    if (this.free === 0) {
      return null;
    }
    const index = Math.floor(Math.random() * this.free);
    const value = this.pool[index];
    const lastIndex = this.free - 1;
    const lastValue = this.pool[lastIndex];
    this.pool[lastIndex] = value;
    this.pool[index] = lastValue;
    this.pos[value] = lastIndex;
    this.pos[lastValue] = index;
    this.free -= 1;
    return value + this.minId;
  }

  return(id: number) {
    id = id - this.minId;
    const index = this.pos[id];
    if (index === void 0 || index < this.free) {
      return;
    }
    const firstValue = this.pool[this.free];
    this.pool[this.free] = id;
    this.pool[index] = firstValue;
    this.pos[firstValue] = index;
    this.pos[id] = this.free;
    this.free += 1;
  }
}
