/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-02-02 18:24:26
 * @version 1.0.0
 * @desc deferred.ts
 */

export interface Deferred<T> extends Promise<T> {
  resolve(data: T): void;
  reject(reason: any): void;
}

export interface DeferredConstructor {
  <T>(): Deferred<T>;
  new <T>(): Deferred<T>;
}

export const Deferred: DeferredConstructor = function <T>() {
  let _resolve: any
  let _reject: any
  const output = new Promise<T>((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  }) as  Deferred<T>
  output.resolve = _resolve
  output.reject = _reject
  return output
} as any
