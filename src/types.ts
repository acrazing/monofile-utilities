/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 18:36:37
 */

export type P<T> = T | Promise<T>;
export type F<T> = T | (() => T);
export type A<T> = T | T[];

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]+?: DeepPartial<T[P]> }
  : T;
export type DeepReadonly<T> = T extends object
  ? { +readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;
export type Mutable<T> = T extends object
  ? { -readonly [P in keyof T]: T[P] }
  : T;
export type DeepMutable<T> = T extends object
  ? { -readonly [P in keyof T]: DeepMutable<T[P]> }
  : T;

export type A0<T> = T extends (a0: infer A, ...o: any[]) => any ? A : never;
export type A1<T> = T extends (a0: any, a1: infer A, ...o: any[]) => any
  ? A
  : never;
export type A2<T> = T extends (
  a0: any,
  a1: any,
  a2: infer A,
  ...o: any[]
) => any
  ? A
  : never;
