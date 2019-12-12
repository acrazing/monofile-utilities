/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-28 18:05:11
 */

import { EventDispatcher } from './EventDispatcher';

interface EventsMap {
  f0: [];
  f1: [string];
  f2: [string, boolean];
  optional: [boolean, number?];
  func: (name: string, value: number, options?: boolean) => void;
}

describe('EventDispatcher', () => {
  it('should works as expected', () => {
    const dispatcher = new EventDispatcher<EventsMap>();
    dispatcher.on('f0', () => {
      console.log('f0');
    });
    dispatcher.on('f1', (f1) => {
      console.log('first f1', f1.length);
    });
    dispatcher.once('f1', (f1) => {
      console.log('once', f1);
    });
    dispatcher.on('f1', (f1: string) => {
      console.log('last f1', f1);
    });
    dispatcher.emit('f1', 'arg1');
    dispatcher.emit('f1', 'arg1-1');
    dispatcher.off('f1');
    dispatcher.off('f0');
    dispatcher.on('func', (name, value, options) => {
      console.log('on.func', name, value, options);
    });
    dispatcher.emit('func', 'name', 1, false);
  });
});
