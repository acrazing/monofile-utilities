/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-04-17 11:37:24
 * @version 1.0.0
 * @desc nonenumerable.spec.ts
 */

import { observable } from 'mobx';
import { nonenumerable } from './nonenumerable';
import { piclick } from './piclick';

function d(n: number) {
  return (_: any, __: any) => console.log('decorating', n);
}

export function main() {
  class N {
    @nonenumerable @observable p0 = 0;
    @observable p1 = 1;
    @nonenumerable @observable p2 = 2;
    @observable p3 = 3;
    @d(1) @d(2) p4 = 4;
  }

  const p2 = Object.getOwnPropertyDescriptor(N.prototype, 'p2');
  console.log('p2', p2, p2 && p2.set && p2.set.toString(), p2 && p2.get && p2.get.toString());

  const n = new N();
  n.p2 = 2.2;
  console.log(
    JSON.stringify(n),
    Object.getOwnPropertyDescriptor(n, 'p1'),
    Object.getOwnPropertyDescriptor(n, 'p2'),
    Object.getOwnPropertyDescriptor(n, 'p3'),
  );
}

piclick(module);