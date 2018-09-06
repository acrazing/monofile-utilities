/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc sleep.ts
 */

import { ANY } from './consts';

export interface Timer extends Promise<void> {
  interrupt (resolve?: boolean): void;
}

export function sleep (time: number): Timer {
  let clear: Timer['interrupt'] = ANY;
  const timer = <Timer>new Promise((resolve, reject) => {
    let state = 'pending';
    const handle = setTimeout(() => {
      if (state === 'pending') {
        state = 'fulfilled';
        resolve();
      }
    }, time);
    clear = (_resolve?: boolean) => {
      if (state === 'pending') {
        state = 'rejected';
        clearTimeout(handle);
        if (_resolve === true) {
          resolve(void 0);
        }
        else {
          reject();
        }
      }
    };
  });
  timer.interrupt = clear;
  return timer;
}

