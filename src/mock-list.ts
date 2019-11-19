/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc mock-list.ts
 */

import { __assign } from 'tslib';

/**
 * create a mocked list
 * @param model
 * @param key
 * @param count
 */
export function mockList<T>(model: T, key: keyof T, count = 10): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(__assign({}, model, { [key]: i }));
  }
  return out;
}
