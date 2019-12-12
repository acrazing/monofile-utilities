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
export declare const suite: Suite;
