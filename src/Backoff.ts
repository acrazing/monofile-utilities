/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-01 16:06:42
 */

import { shuffle } from 'lodash';
import { sleep } from './sleep';
import { FP } from './types';

export const algorithms = {
  linear: (index: number, count: number, base: number, values: number[]) => {
    return base;
  },
  exponential: (
    index: number,
    count: number,
    base: number,
    values: number[],
  ) => {
    return 2 ** index * base;
  },
  fibonacci: (index: number, count: number, base: number, values: number[]) => {
    return index < 2 ? base : values[index - 1] + values[index - 2];
  },
};

/**
 * A simple backoff algorithm, just compute next value, if end, get undefined
 */
export class Backoff {
  private values: number[];

  constructor(
    retryCount = 10,
    baseValue = 100,
    mode: keyof typeof algorithms = 'fibonacci',
  ) {
    this.values = new Array(retryCount);
    for (let i = 0; i < retryCount; i++) {
      this.values[i] = algorithms[mode](i, retryCount, baseValue, this.values);
    }
    this.values.reverse();
  }

  shuffle() {
    shuffle(this.values);
    return this;
  }

  next() {
    return this.values.pop();
  }

  async exec<A extends any[], R, F extends (...args: A) => R>(
    fn: F,
    ...args: A
  ): Promise<FP<R>> {
    let next = this.next();
    if (next === void 0) {
      return fn(...args) as FP<R>;
    }
    let error: any;
    try {
      return (await fn(...args)) as FP<R>;
    } catch (e) {
      error = e;
    }
    while (next) {
      await sleep(next);
      try {
        return (await fn(...args)) as FP<R>;
      } catch (e) {
        error = e;
      }
      next = this.next();
    }
    throw error;
  }
}
