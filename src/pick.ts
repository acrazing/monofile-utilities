/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc pick.ts
 */

export function pick<T, K extends keyof T>(data: T, ...keys: K[]): Pick<T, K> {
  const out: any = {};
  keys.forEach((item) => {
    out[item] = data[item];
  });
  return out;
}
