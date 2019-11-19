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

/**
 * create a deferred promise to resolve
 */
export function defer<T>(): Deferred<T> {
  let _resolve: any = void 0;
  let _reject: any = void 0;
  const output = new Promise<T>((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  }) as Deferred<T>;
  output.resolve = _resolve;
  output.reject = _reject;
  return output;
}
