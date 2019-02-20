/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:06:49
 */

import { Enum } from './enum';

describe('enum', function() {
  it('should create enum', () => {
    const Foo = Enum({
      Value: '',
      Label: 'label',
    });
    type Foo = Enum<typeof Foo>;
    const foo: { [P in Foo]: '' } = {
      Value: '',
      Label: '',
    };
    expect(foo).toBe(foo);
    expect(Foo.values).toEqual(['Value', 'Label']);
    expect(Foo.labels).toEqual({ Value: 'Value', Label: 'label' });
    expect(Foo.Value).toEqual('Value');
    expect(Foo.Label).toEqual('Label');
    expect(Foo).toEqual({
      Value: 'Value',
      Label: 'Label',
      labels: { Value: 'Value', Label: 'label' },
      values: ['Value', 'Label'],
    });
    const fs: Foo[] = [];
    fs.push(Foo.Label);
    fs.push(Foo.Value);
    fs.push(...fs);
  });
});
