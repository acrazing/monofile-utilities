/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc as-map.ts
 */
import { NMap, SMap } from './map';
/**
 * create a Record according to input type, cases can get in spec file
 * @param source
 * @param key
 */
export declare function asMap<T, K extends keyof T | undefined>(
  source: T[],
  key: K,
): K extends undefined
  ? T extends number
    ? NMap<number>
    : T extends string
    ? SMap<string>
    : never
  : K extends keyof T
  ? T[K] extends number
    ? NMap<T>
    : T[K] extends string
    ? SMap<T>
    : never
  : never;
