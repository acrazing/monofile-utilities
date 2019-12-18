/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-28 17:55:28
 */

export type EventCallback<T> = T extends Function
  ? T
  : T extends any[]
  ? (...args: T) => void
  : never;
export type EventParams<T> = T extends (...args: infer A) => any
  ? A
  : T extends any[]
  ? T
  : any[];

export interface EventDispatcherCallback extends Function {
  __callback?: Function;
}

export class EventDispatcher<M> {
  /** @internal */
  __events: Record<keyof any, EventDispatcherCallback[]>;

  constructor() {
    this.__events = Object.create(null);
  }

  eventNames() {
    return Object.keys(this.__events);
  }

  eventCount() {
    return Object.keys(this.__events).length;
  }

  listenerCount(event: keyof M | keyof any) {
    return this.__events[event]?.length || 0;
  }

  on<K extends keyof M>(event: K, callback: EventCallback<M[K]>): void;
  on<K extends keyof any>(
    event: K,
    callback: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  on(event: keyof any, callback: Function) {
    if (!this.__events[event as string]) {
      this.__events[event as string] = [callback];
    } else {
      this.__events[event as string].push(callback);
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
    if (!this.__events) {
      return;
    }
    if (!callback) {
      delete this.__events[event as string];
      return;
    }
    let index = 0;
    for (
      const max = this.__events[event as string].length;
      index < max;
      index++
    ) {
      if (
        this.__events[event as string][index] === callback ||
        this.__events[event as string][index].__callback === callback
      ) {
        this.__events[event as string].splice(index, 1);
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
    this.__events[event as string]?.slice().forEach((fn) => {
      fn(...args);
    });
  }

  emitSerial<K extends keyof M>(
    event: K,
    ...args: EventParams<M[K]>
  ): Promise<void>;
  emitSerial<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): Promise<void>;
  emitSerial(event: keyof any, ...args: any[]) {
    let p = Promise.resolve();
    this.__events[event as string]
      ?.slice()
      .forEach((h) => (p = p.then(() => h(...args))));
    return p;
  }

  emitParallel<K extends keyof M>(
    event: K,
    ...args: EventParams<M[K]>
  ): Promise<any[]>;
  emitParallel<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): Promise<any[]>;
  emitParallel(event: keyof any, ...args: any[]): Promise<any[]> {
    return Promise.all(
      this.__events[event as string]?.slice().map((fn) => {
        return fn(...args);
      }) ?? [],
    );
  }
}
