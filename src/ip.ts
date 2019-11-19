/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */

import { isIPv4 } from 'net';
import { UINT32_MAX } from './consts';

export const IP_MAX = '255.255.255.255';
export const IP_MIN = '0.0.0.0';

/**
 * ipv4 string to integer
 * @param ip
 * @param defaults
 */
export function ip2int(ip: string, defaults = UINT32_MAX) {
  if (!isIPv4(ip)) {
    return defaults;
  }
  const [c0, c1, c2, c3] = ip.split('.');
  return +c0 * (1 << 24) + (+c1 << 16) + (+c2 << 8) + +c3;
}

/**
 * integer to ipv4 string
 * @param ipInt
 * @param defaults
 */
export function int2ip(ipInt: number, defaults = IP_MIN) {
  if (ipInt < 0 || ipInt > UINT32_MAX) {
    return defaults;
  }
  return (
    (ipInt >>> 24) +
    '.' +
    ((ipInt >> 16) & 0xff) +
    '.' +
    ((ipInt >> 8) & 0xff) +
    '.' +
    (ipInt & 0xff)
  );
}
