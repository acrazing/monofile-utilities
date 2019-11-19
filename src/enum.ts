/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 10:39:41
 *
 * create typed enums with labels & values group
 */

import { SMap, values } from './map';

export type EnumKeys<T> = Exclude<keyof T, number>[];
export type EnumValues<T> = T[Exclude<keyof T, number>][];

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

export type EnumHost<T extends SMap<string>> = { [P in keyof T]: P } & {
  labels: { [P in keyof T]: string };
  values: EnumHost<T>[Exclude<keyof EnumHost<T>, 'labels' | 'values'>][];
};

export type Enum<T extends EnumHost<any>> = EnumHost<T>[Exclude<
  keyof EnumHost<T>,
  'labels' | 'values'
>];

export function Enum<T extends SMap<string>>(input: T): EnumHost<T> {
  const host: EnumHost<T> = {
    labels: {},
    values: [],
  } as any;
  for (const key in input) {
    host.labels[key] = input[key] || key;
    host.values.push((host[key] = key as any));
  }
  return host;
}
