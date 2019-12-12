/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-08-30 20:02:51
 */
export declare type MemorizeMode = 'parallel' | 'once-success' | 'once';
export interface Memorize<T> {
  cache: Record<string, Promise<T> | T | Rejected>;
  has(key: string): void;
  status(key: string): 'pending' | 'fulfilled' | 'rejected' | 'unknown';
  get(key: string): T | void;
  remove(key: string): void;
  clear(): void;
  keys(): string[];
}
export declare class Rejected {
  reason: any;
  constructor(reason: any);
}
/**
 * memoize promise version
 * @param creator
 * @param mode
 * @param getKey
 */
export declare function memorizePromise<
  I extends any[],
  R,
  F extends (...args: I) => R | PromiseLike<R>
>(
  creator: F,
  mode?: MemorizeMode,
  getKey?: (...args: I) => string,
): F & MemorizeMode;
