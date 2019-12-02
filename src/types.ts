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

export type F0<R = void> = () => R;
export type F1<A1, R = void> = (arg1: A1) => R;
export type F2<A1, A2, R = void> = (arg1: A1, arg2: A2) => R;

export type Descriptors<T extends object> = {
  [P in keyof T]: TypedPropertyDescriptor<T[P]>;
};

export type StateMachineNode<N extends string> = { [Next in N]?: 1 };

export type StateMachine<N extends string> = {
  [Node in N]: StateMachineNode<N>;
};

export type FP<P> = P extends Promise<infer U> ? U : P;

export type PickKeys<T, V> = Exclude<
  {
    [P in keyof T]: T[P] extends V ? P : never;
  }[keyof T],
  never
>;

// see {@link https://stackoverflow.com/a/50375286/4380247}
export type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

export type TupleIntersection<T extends any[]> = UnionToIntersection<T[number]>;

export type FlatIntersection<T> = T extends any[] ? TupleIntersection<T> : T;

export type Empty = {};

export type UnionToRecord<K extends string, V extends { [P in K]: string }> = {
  [P in V[K]]: V extends { [CP in K]: P } ? V : never;
};

export type TupleToRecord<
  K extends string,
  L extends Array<{ [P in K]: string }>
> = UnionToRecord<K, L[number]>;

export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;

export type WritableKeys<T> = Exclude<
  {
    [P in keyof T]-?: IfEquals<
      { [Q in P]: T[P] },
      { -readonly [Q in P]: T[P] },
      P,
      never
    >;
  }[keyof T],
  never
>;

export type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

// see {@link https://medium.com/dailyjs/9d902cea5b8c}
export type Only<Base, Condition> = Pick<
  Base,
  Exclude<
    {
      [Key in keyof Base]: Condition extends Base[Key] ? Key : never;
    }[keyof Base],
    undefined
  >
>;
