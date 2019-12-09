/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-12-06 22:08:17
 */

import { INT32_MAX, INT32_MIN, UINT32_MAX } from './consts';

export function only(value: number, accepts: number[]) {
  return accepts.indexOf(value) > -1;
}

export function gt(value: number, than: number) {
  return value > than;
}

export function lt(value: number, than: number) {
  return value < than;
}

export function gte(value: number, than: number) {
  return value >= than;
}

export function lte(value: number, than: number) {
  return value <= than;
}

export function isInt(
  value: number,
  gte = Number.MIN_SAFE_INTEGER,
  lte = Number.MAX_SAFE_INTEGER,
) {
  return value === Math.floor(value) && value >= gte && value <= lte;
}

export function isUInt(value: number) {
  return isInt(value, 0);
}

export function isPInt(value: number) {
  return isInt(value, 1);
}

export function isUInt32(value: number) {
  return isInt(value, 0, UINT32_MAX);
}

export function isUInt31(value: number) {
  return isInt(value, 0, INT32_MAX);
}

export function isInt32(value: number) {
  return isInt(value, INT32_MIN, INT32_MAX);
}
