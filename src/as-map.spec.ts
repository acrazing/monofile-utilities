/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-14 15:03:38
 */

import { asMap } from './as-map';

describe('as map', function() {
  it('should convert to map with types', () => {
    expect(asMap([1], void 0)[1]).toBe(1);
    expect(asMap(['1'], void 0)['1']).toBe('1');
    expect(asMap([{ k: 1, s: 's' }], 'k')[1]).toEqual({ k: 1, s: 's' });
  });
});
