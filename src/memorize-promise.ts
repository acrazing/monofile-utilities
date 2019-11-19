/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-08-30 20:02:51
 */

import { __assign } from 'tslib';

export type MemorizeMode = 'parallel' | 'once-success' | 'once';

export interface Memorize<T> {
  cache: Record<string, Promise<T> | T | Rejected>;
  has(key: string): void;
  status(key: string): 'pending' | 'fulfilled' | 'rejected' | 'unknown';
  get(key: string): T | void;
  remove(key: string): void;
  clear(): void;
  keys(): string[];
}

export class Rejected {
  constructor(public reason: any) {}
}

/**
 * memoize promise version
 * @param creator
 * @param mode
 * @param getKey
 */
export function memorizePromise<
  I extends any[],
  R,
  F extends (...args: I) => R | PromiseLike<R>
>(
  creator: F,
  mode: MemorizeMode = 'once-success',
  getKey: (...args: I) => string = String as any,
): F & MemorizeMode {
  let caches: Record<string, Promise<R> | R | Rejected> = {};
  const proto: Memorize<R> = {
    cache: caches,
    has: (key) => caches.hasOwnProperty(key),
    status: (key) =>
      caches.hasOwnProperty(key)
        ? caches[key] instanceof Promise
          ? 'pending'
          : caches[key] instanceof Rejected
          ? 'rejected'
          : 'fulfilled'
        : 'unknown',
    get: (key) => {
      return !caches.hasOwnProperty(key) ||
        caches[key] instanceof Promise ||
        caches[key] instanceof Rejected
        ? void 0
        : (caches[key] as R);
    },
    remove: (key) => delete caches[key],
    clear: () => (caches = proto.cache = {}),
    keys: () => Object.keys(caches),
  };
  const func = (...args: I) => {
    const key = getKey(...args);
    if (!caches[key]) {
      const ret = (caches[key] = Promise.resolve(creator(...args)));
      switch (mode) {
        case 'once':
          ret.then(
            (data) => (caches[key] = data),
            (reason) => (caches[key] = new Rejected(reason)),
          );
          break;
        case 'once-success':
          ret.then(
            (data) => (caches[key] = data),
            () => delete caches[key],
          );
          break;
        case 'parallel':
          ret.then(
            () => delete caches[key],
            () => delete caches[key],
          );
          break;
      }
    }
    return caches[key];
  };
  return __assign(func, proto);
}
