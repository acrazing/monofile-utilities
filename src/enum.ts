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
};

export function enumValues<T extends object>(
  Host: T,
): T[Exclude<keyof T, number>][] {
  return values(Host).filter((value) => {
    return typeof (Host as any)[value] !== 'number';
  }) as any[];
}

export function enumKeys<T extends object>(
  Host: T,
): Exclude<keyof T, number>[] {
  return Object.keys(Host).filter((key) => {
    return typeof (Host as any)[(Host as any)[key]] !== 'number';
  }) as any[];
}

export function createEnum<T extends object>(Host: T): Enum<T> {
  (Host as Enum<T>).values = enumValues(Host);
  (Host as Enum<T>).keys = enumKeys(Host);
  return Host as Enum<T>;
}
