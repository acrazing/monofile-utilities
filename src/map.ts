/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc map.ts
 */

import { __assign } from 'tslib';
import { ANY } from './consts';

// all map
export interface AMap<T> {
  [key: string]: T;
  [key: number]: T;
}

// number map
export interface NMap<T> {
  [key: number]: T;
}

// string map
export interface SMap<T> {
  [key: string]: T;
}

export type MMap<M, T> = { [K in keyof M]: T };

export function createMap<T, O = AMap<T>>(initial?: O): O {
  const root: any = {};
  root['__'] = ANY;
  delete root['__'];
  __assign(root, initial);
  return root;
}

export function values<T extends object>(host: T, owned = true): T[keyof T][] {
  if (owned) {
    return Object.keys(host).map((k) => host[k as keyof T]);
  } else {
    const values: T[keyof T][] = [];
    for (const key in host) {
      values.push(host[key]);
    }
    return values;
  }
}
