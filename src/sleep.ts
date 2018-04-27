/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc sleep.ts
 */

export interface Timer extends Promise<void> {
  clear(): void;
}

export function sleep(time: number): Timer {
  let clear = (): void => void 0;
  const timer = new Promise((resolve, reject) => {
    let state = 'pending';
    const handle = setTimeout(() => {
      if (state === 'pending') {
        state = 'fulfilled';
        resolve();
      }
    }, time);
    clear = () => {
      if (state === 'pending') {
        state = 'rejected';
        clearTimeout(handle);
        reject();
      }
    };
  }) as Timer;
  timer.clear = clear;
  return timer;
}

