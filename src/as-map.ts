/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc as-map.ts
 */

import { AMap } from './map';

export function asMap<T> (source: T[], key: keyof T | void): AMap<T> {
  if (!source) {
    return {};
  }
  const map: AMap<T> = {};
  if (!key) {
    source.forEach((item) => {
      source[item as any] = item;
    });
  }
  else {
    source.forEach((item) => {
      map[item[key] as any] = item;
    });
  }
  return map;
}
