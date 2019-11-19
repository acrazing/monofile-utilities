/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-19 17:41:29
 */

import { noop } from './consts';
import { TupleToRecord } from './types';

interface P1 {
  name: 'p1';
  p1: string;
  fn: (v: string) => void;
}

interface P2 {
  name: 'p2';
  p2: string;
}

const p: TupleToRecord<'name', [P1, P2]> = {
  p1: {
    name: 'p1',
    p1: 'p1 value',
    fn: noop,
  },
  p2: {
    name: 'p2',
    p2: 'p2 value',
  },
};

p.p1.fn(p.p2.name);

describe('types', () => {
  it('should be ok', noop);
});
