/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-18 15:08:18
 */

import { Unique } from './Unique';

describe('unique', function() {
  it('should generate unique id', function() {
    const unique = new Unique(5, 10);
    const pool = [...unique.pool];
    expect(pool).toEqual([0, 1, 2, 3, 4]);
    for (let i = 0; i < 5; i++) {
      const id = unique.rent()!;
      expect(id).not.toBeNull();
    }
    expect(unique.rent()).toBeNull();
    for (let i = 5; i < 10; i++) {
      unique.return(i);
    }
  });
});
