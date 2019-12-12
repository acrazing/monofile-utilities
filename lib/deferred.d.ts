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
export declare function defer<T>(): Deferred<T>;
