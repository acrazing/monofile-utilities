/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-30 18:16:06
 *
 * toString:36 x 109 ops/sec ±2.09% (70 runs sampled)
 * parseInt:36 x 189 ops/sec ±2.56% (73 runs sampled)
 * itos:36 x 121 ops/sec ±1.48% (76 runs sampled)
 * stoi:36 x 243 ops/sec ±3.57% (75 runs sampled)
 * itos:62 x 129 ops/sec ±1.71% (72 runs sampled)
 * stoi:62 x 260 ops/sec ±2.04% (78 runs sampled)
 * date.now x 396 ops/sec ±1.73% (84 runs sampled)
 *
 * result:
 *
 * 1. stoi, itos is faster than parseInt, Number.toString
 * 2. stoi, itos with 62 radix is faster than 36 radix
 * 3. Date.now is faster than upon, do not need to care the system call
 */

import { Suite } from 'benchmark';
import { random, shuffle } from 'lodash';
import { itos } from './numberFormat';

const int = Array(+(process.env.NODE_CELL_COUNT || '1000'))
  .fill(0)
  .map(() =>
    random(
      +(process.env.NODE_CELL_MIN || '0'),
      +(process.env.NODE_CELL_MAX || Number.MAX_SAFE_INTEGER),
    ),
  );
const big = int.map(BigInt);

export const suite = new Suite('number format')
  .add('int.toString(32)', () => shuffle(int).map((i) => i.toString(32)))
  .add('big.toString(32)', () => shuffle(big).map((i) => i.toString(32)))
  .add('int.itos(32)', () => shuffle(int).map((i) => itos(i, 32)))
  .add('int.itos(64)', () => shuffle(int).map((i) => itos(i, 64)))
  .add('int.itos(62)', () => shuffle(int).map((i) => itos(i, 62)))
  .add('Date.now', () => shuffle(int).map(() => Date.now()));
