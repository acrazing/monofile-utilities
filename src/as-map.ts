/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc as-map.ts
 */

import { AMap, NMap, SMap } from './map';

export function asMap<T, K extends keyof T, UK extends K | void> (
  source: T[],
  key: UK,
): UK extends void ? T extends number ? NMap<number> : T extends string
  ? SMap<string>
  : never : T[K] extends number ? NMap<T> : T[K] extends string
  ? SMap<T>
  : never {
  if (!source) {
    return {} as any;
  }
  const map: AMap<T> = {};
  if (!key) {
    source.forEach((item) => {
      source[item as any] = item;
    });
  }
  else {
    source.forEach((item) => {
      map[item[key as K] as any] = item;
    });
  }
  return map as any;
}
