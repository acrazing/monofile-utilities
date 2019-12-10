/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-12-10 15:34:19
 */

import { parse, stringify } from './query-string';

describe('query-string', () => {
  it('should decode/encode as expected', () => {
    expect(stringify({ foo: { bar: 'hello' } })).toBe(
      `${encodeURIComponent('foo[bar]')}=hello`,
    );

    expect(parse('foo[bar]=hello')).toEqual({ foo: { bar: 'hello' } });
    expect(parse(`${encodeURIComponent('foo[bar]')}=hello`)).toEqual({
      foo: { bar: 'hello' },
    });
  });
});
