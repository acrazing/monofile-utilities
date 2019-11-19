/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:06:04
 */

export type TypeTree = {
  [P: string]: string | TypeTree;
};

export function createTypeTree<T extends TypeTree>(prefix: string, tree: T): T {
  if (prefix.charAt(prefix.length - 1) !== '.') {
    prefix += '.';
  }
  for (const key in tree) {
    if (tree.hasOwnProperty(key)) {
      const value = tree[key];
      if (typeof value === 'string') {
        (tree as any)[key] = prefix + (value || key);
      } else {
        createTypeTree(prefix + key + '.', value as TypeTree);
      }
    }
  }
  return tree;
}
