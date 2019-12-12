/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-10 20:39:59
 *
 * Double linked list
 */
export declare class DoubleLinkItem {
  prev?: this;
  next?: this;
  list?: DoubleLink<this>;
  constructor();
}
export declare class DoubleLinkNode<T> implements DoubleLinkItem {
  prev?: this;
  next?: this;
  list?: DoubleLink<this>;
  value: T;
  constructor(value: T);
}
export declare class DoubleLink<T extends DoubleLinkItem> {
  head: T | undefined;
  count: number;
  constructor();
  has(item: T): boolean;
  assertBelong(item: T, allowDangle: boolean): void;
  drop(item: T): void;
  private prepare;
  prepend(item: T): void;
  append(item: T): void;
  forEach(callback: (item: T, index: number) => false | any): void;
  map<U>(callback: (item: T, index: number) => U): U[];
  find(callback: (item: T, index: number) => boolean): T | void;
  items(count?: number): T[];
}
