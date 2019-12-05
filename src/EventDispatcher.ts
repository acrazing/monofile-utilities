/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-28 17:55:28
 */

export type EventCallback<T> = T extends any[] ? (...args: T) => void : never;
export type EventParams<T> = T extends any[] ? T : any[];

export interface EventDispatcherCallback extends Function {
  __callback?: Function;
}

export class EventDispatcher<M> {
  readonly events: Record<keyof any, EventDispatcherCallback[]> = {};

  constructor() {}

  on<K extends keyof M>(event: K, callback: EventCallback<M[K]>): void;
  on<K extends keyof any>(
    event: K,
    callback: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  on(event: keyof any, callback: Function) {
    if (!this.events[event as string]) {
      this.events[event as string] = [callback];
    } else {
      this.events[event as string].push(callback);
    }
  }

  once<K extends keyof M>(event: K, callback: EventCallback<M[K]>): void;
  once<K extends keyof any>(
    event: K,
    callback: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  once(event: keyof any, callback: Function) {
    const fn: EventDispatcherCallback = (...args: any[]) => {
      try {
        return callback(...args);
      } finally {
        this.off(event, fn as any);
      }
    };
    fn.__callback = callback;
    this.on(event, fn as any);
  }

  off<K extends keyof M>(event: K, callback?: EventCallback<M[K]>): void;
  off<K extends keyof any>(
    event: K,
    callback?: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  off(event: keyof any, callback?: Function) {
    if (!this.events) {
      return;
    }
    if (!callback) {
      delete this.events[event as string];
      return;
    }
    let index = 0;
    for (
      const max = this.events[event as string].length;
      index < max;
      index++
    ) {
      if (
        this.events[event as string][index] === callback ||
        this.events[event as string][index].__callback === callback
      ) {
        this.events[event as string].splice(index, 1);
        break;
      }
    }
  }

  emit<K extends keyof M>(event: K, ...args: EventParams<M[K]>): void;
  emit<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): void;
  emit(event: keyof any, ...args: any[]) {
    this.events[event as string]?.slice().forEach((fn) => {
      fn(...args);
    });
  }
}