/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 10:39:41
 *
 * create typed enums with labels & values group
 */
import { SMap } from './map';
export declare type EnumKeys<T> = Exclude<keyof T, number>[];
export declare type EnumValues<T> = T[Exclude<keyof T, number>][];
export declare function enumValues<T>(Host: T): EnumValues<T>;
export declare function enumKeys<T>(Host: T): EnumKeys<T>;
export declare type EnumHost<T extends SMap<string>> = {
  [P in keyof T]: P;
} & {
  labels: {
    [P in keyof T]: string;
  };
  values: EnumHost<T>[Exclude<keyof EnumHost<T>, 'labels' | 'values'>][];
};
export declare type Enum<T extends EnumHost<any>> = EnumHost<T>[Exclude<
  keyof EnumHost<T>,
  'labels' | 'values'
>];
export declare function Enum<T extends SMap<string>>(input: T): EnumHost<T>;
