/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-28 17:55:28
 */
export declare type EventCallback<T> = T extends Function
  ? T
  : T extends any[]
  ? (...args: T) => void
  : never;
export declare type EventParams<T> = T extends (...args: infer A) => any
  ? A
  : T extends any[]
  ? T
  : any[];
export interface EventDispatcherCallback extends Function {
  __callback?: Function;
}
export declare class EventDispatcher<M> {
  constructor();
  eventNames(): string[];
  eventCount(): number;
  listenerCount(event: keyof M | keyof any): number;
  on<K extends keyof M>(event: K, callback: EventCallback<M[K]>): void;
  on<K extends keyof any>(
    event: K,
    callback: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  once<K extends keyof M>(event: K, callback: EventCallback<M[K]>): void;
  once<K extends keyof any>(
    event: K,
    callback: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  off<K extends keyof M>(event: K, callback?: EventCallback<M[K]>): void;
  off<K extends keyof any>(
    event: K,
    callback?: EventCallback<K extends keyof M ? M[K] : any[]>,
  ): void;
  emit<K extends keyof M>(event: K, ...args: EventParams<M[K]>): void;
  emit<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): void;
  emitSerial<K extends keyof M>(
    event: K,
    ...args: EventParams<M[K]>
  ): Promise<void>;
  emitSerial<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): Promise<void>;
  emitParallel<K extends keyof M>(
    event: K,
    ...args: EventParams<M[K]>
  ): Promise<any[]>;
  emitParallel<K extends keyof any>(
    event: K,
    ...args: EventParams<K extends keyof M ? M[K] : any[]>
  ): Promise<any[]>;
}
