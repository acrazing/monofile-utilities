/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-01 16:06:42
 */
import { FP } from './types';
export declare const algorithms: {
  linear: (
    index: number,
    count: number,
    base: number,
    values: number[],
  ) => number;
  exponential: (
    index: number,
    count: number,
    base: number,
    values: number[],
  ) => number;
  fibonacci: (
    index: number,
    count: number,
    base: number,
    values: number[],
  ) => number;
};
/**
 * A simple backoff algorithm, just compute next value, if end, get undefined
 */
export declare class Backoff {
  private values;
  constructor(
    retryCount?: number,
    baseValue?: number,
    mode?: keyof typeof algorithms,
  );
  shuffle(): this;
  next(): number | undefined;
  exec<A extends any[], R, F extends (...args: A) => R>(
    fn: F,
    ...args: A
  ): Promise<FP<R>>;
}
