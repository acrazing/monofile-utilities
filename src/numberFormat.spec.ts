/*_
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-29 14:26:44
 */

import { itos, stoi } from './numberFormat';

describe('number format', () => {
  it('should format correctly', () => {
    expect(itos(0, 2)).toBe('0');
    expect(itos(100, 10)).toBe('100');
    expect(itos(0xff, 16)).toBe('FF');
    expect(itos(0xfffffffffffff, 2)).toBe(
      '1111111111111111111111111111111111111111111111111111',
    );
    expect(itos(0xfffffffffffff, 4)).toBe('33333333333333333333333333');
    expect(itos(0xfffffffffffff, 8)).toBe('177777777777777777');
    expect(itos(0xfffffffffffff, 10)).toBe('4503599627370495');
    expect(itos(0xfffffffffffff, 16)).toBe('FFFFFFFFFFFFF');
    expect(itos(0xfffffffffffff, 32)).toBe('3VVVVVVVVVV');
    expect(itos(0xfffffffffffff, 64)).toBe('F________');
    expect(itos(Number.MAX_SAFE_INTEGER, 64)).toBe('V________');
    expect(stoi('V________', 64)).toBe(Number.MAX_SAFE_INTEGER);
    expect(stoi('F________', 64)).toBe(0xfffffffffffff);
    expect(stoi('3VVVVVVVVVV', 32)).toBe(0xfffffffffffff);
    expect(stoi('FFFFFFFFFFFFF', 16)).toBe(0xfffffffffffff);
    expect(stoi('4503599627370495', 10)).toBe(0xfffffffffffff);
    expect(stoi('177777777777777777', 8)).toBe(0xfffffffffffff);
    expect(stoi('33333333333333333333333333', 4)).toBe(0xfffffffffffff);
    expect(
      stoi('1111111111111111111111111111111111111111111111111111', 2),
    ).toBe(0xfffffffffffff);
    expect(stoi('?')).toBeNaN();
    const d = Date.now() * 102;
    console.log(d, itos(d));
  });
});
