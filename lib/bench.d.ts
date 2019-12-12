/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-30 20:07:23
 *
 * run benchmark suite automatically, two usage way:
 *
 * 1. in foo.js
 *    bench(module)
 *    then run `node foo.js` in terminal
 *
 * 2. in terminal
 *    bench foo.js
 *
 * the foo.js should exports some variables instanceof benchmark.Suite
 */
/// <reference types="node" />
import Module = NodeJS.Module;
export declare function bench(module: Module): void;
