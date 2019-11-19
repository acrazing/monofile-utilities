/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-01 22:01:35
 */

import { Backoff } from './Backoff';

describe('backoff', function() {
  it('should execute functions with backoff', async () => {
    let count = 4;
    const fn = jest.fn((p: number) => {
      if (count-- < 0) {
        return p;
      } else {
        throw p;
      }
    });
    let value = 0;
    let error = 0;
    try {
      value = await new Backoff(10, 1).exec(fn, 1);
    } catch (e) {
      error = e;
    }
    expect(value).toBe(1);
    expect(error).toBe(0);
    expect(fn).toBeCalledTimes(6);

    count = 4;
    value = 0;
    error = 0;
    fn.mockClear();
    try {
      value = await new Backoff(3, 1).exec(fn, 1);
    } catch (e) {
      error = e;
    }
    expect(value).toBe(0);
    expect(error).toBe(1);
    expect(fn).toBeCalledTimes(4);
  });
});
