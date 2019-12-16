/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-18 12:04:55
 */
/**
 * create a property descriptor
 * @param configurable
 * @param enumerable
 * @param writable
 * @param value
 * @param get
 * @param set
 */
export declare function property<T>(
  configurable: boolean,
  enumerable: boolean,
  writable: boolean,
  value?: T,
  get?: () => T,
  set?: (value: T) => void,
): TypedPropertyDescriptor<T>;
/**
 * display Map, Set for JSON.stringify
 * @param key
 * @param value
 */
export declare function jsonReplacer(key: string, value: any): any;
export declare function displayType(value: any): string;
