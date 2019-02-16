/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:06:57
 */

import { createTypeTree } from './type-tree';

describe('type-tree', function() {
  it('should create type tree', () => {
    expect(
      createTypeTree('gomoku', {
        foo: '',
        deep: {
          bar: '',
          deep_custom: 'deep_custom_name',
        },
        custom: 'custom_name',
      }),
    ).toEqual({
      foo: 'gomoku.foo',
      deep: {
        bar: 'gomoku.deep.bar',
        deep_custom: 'gomoku.deep.deep_custom_name',
      },
      custom: 'gomoku.custom_name',
    });
  });
});
