/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:06:04
 */
export declare type TypeTree = {
  [P: string]: string | TypeTree;
};
export declare function createTypeTree<T extends TypeTree>(
  prefix: string,
  tree: T,
): T;
