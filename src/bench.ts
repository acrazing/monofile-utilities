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

import Module = NodeJS.Module;
import { Suite } from 'benchmark';
import * as G from 'glob';
import * as path from 'path';

function cycle(this: any, event: any) {
  console.log(this.name + ' -> ' + event.target);
}

function complete(this: any) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  this.off('cycle', cycle);
  this.off('complete', complete);
}

function execute(exports: any, filename: string) {
  for (const key in exports) {
    if (exports.hasOwnProperty(key)) {
      const suite = exports[key];
      if (!(suite instanceof Suite)) {
        continue;
      }
      if (!(suite as any).name) {
        (suite as any).name = path.basename(filename).replace(/\..*$/, '');
      }
      suite.on('cycle', cycle);
      suite.on('complete', complete);
      suite.run();
    }
  }
}

export function bench(module: Module) {
  if (!module.parent) {
    execute(module.exports, module.filename);
  }
}

if (!module.parent) {
  const argv = process.argv;
  const inputs = argv.length > 2 ? argv.slice(2) : ['./src/**/*.bench.*'];
  const called: Record<string, true> = {};
  for (const pattern of inputs) {
    const files = G.sync(pattern);
    for (const file of files) {
      if (!called[file]) {
        called[file] = true;
        const filename = path.join(process.cwd(), file);
        execute(require(filename), filename);
      }
    }
  }
}
