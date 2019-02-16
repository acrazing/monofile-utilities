/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 10:39:41
 */

import { values } from './map';

export type EnumKeys<T> = Exclude<keyof T, number>[];
export type EnumValues<T> = T[Exclude<keyof T, number>][];
export type Enum<T> = T & {
  keys: EnumKeys<T>;
  values: EnumValues<T>;
  labels: { [P in Extract<T[keyof T], number | string>]: string };
};

export function enumValues<T>(Host: T): EnumValues<T> {
  return values(Host).filter((value) => {
    return typeof (Host as any)[value] !== 'number';
  }) as any[];
}

export function enumKeys<T>(Host: T): EnumKeys<T> {
  return Object.keys(Host).filter((key) => {
    return typeof (Host as any)[(Host as any)[key]] !== 'number';
  }) as any[];
}

export function createEnum<T>(Host: T, labels?: Enum<T>['labels']): Enum<T> {
  const values = enumValues(Host);
  const keys = enumKeys(Host);
  labels =
    labels ||
    keys.reduce(
      (map, key) => {
        (map as any)[Host[key]] = key;
        return map;
      },
      {} as Enum<T>['labels'],
    );
  return Object.assign(Host, { values, keys, labels });
}
