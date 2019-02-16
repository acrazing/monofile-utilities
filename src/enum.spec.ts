/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:06:49
 */

import { createEnum } from './enum';

describe('enum', function() {
  it('should create enum', () => {
    enum _Foo {
      Number = 1,
      String = 'string',
    }

    const Foo = createEnum(_Foo);
    expect(Foo.keys).toEqual(['Number', 'String']);
    expect(Foo.values).toEqual([1, 'string']);
    expect(Foo.labels).toEqual({ 1: 'Number', string: 'String' });
    expect(Foo.Number).toEqual(1);
    expect(Foo.String).toEqual('string');
    expect(Foo).toEqual({
      Number: 1,
      String: 'string',
      keys: ['Number', 'String'],
      values: [1, 'string'],
      labels: { 1: 'Number', string: 'String' },
      1: 'Number',
    });
    createEnum(_Foo, { 1: '1', string: 'string' });
    expect(Foo.labels).toEqual({ 1: '1', string: 'string' });
  });
});
