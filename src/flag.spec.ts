/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-27 18:05:39
 */

import { flag, Flagged } from './flag';

describe('flag', () => {
  it('should set flag', () => {
    class FlagSpec implements Flagged {
      flags = 0;

      @flag(1 << 0) k1 = false;
      @flag(1 << 1) k2 = true;
    }

    const item = new FlagSpec();

    expect(item.flags).toBe(1 << 1);
    expect(item.k1).toBe(false);
    expect(item.k2).toBe(true);
    item.k1 = true;
    expect(item.flags).toBe((1 << 1) | 1);
    expect(item.k1).toBe(true);
    expect(item.k2).toBe(true);
    item.k2 = false;
    expect(item.flags).toBe(1);
    expect(item.k1).toBe(true);
    expect(item.k2).toBe(false);

    expect(() => {
      flag(1 << 1)(FlagSpec.prototype, 'k2');
    }).toThrow('mask 10 is used before set "k2"');
  });
});
