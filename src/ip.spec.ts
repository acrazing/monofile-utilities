/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 14:07:02
 */

import { UINT32_MAX } from './consts';
import { int2ip, ip2int } from './ip';

describe('ip', () => {
  const DEFAULT_INT = 0xfabcdef00;
  const DEFAULT_IP = '11.22.33.44';
  const cases: [string, number][] = [
    ['0.0.0.0', 0],
    ['255.255.255.255', UINT32_MAX],
    ['127.0.0.1', 2130706433],
    ['0.0.0.1', 1],
    ['::1', DEFAULT_INT],
    [DEFAULT_IP, 2 ** 32],
  ];
  it('should convert ip', () => {
    cases.forEach(([ip, int]) => {
      if (ip !== DEFAULT_IP) {
        expect(ip2int(ip, DEFAULT_INT)).toBe(int);
      }
      if (int !== DEFAULT_INT) {
        expect(int2ip(int, DEFAULT_IP)).toBe(ip);
      }
    });
  });
});
