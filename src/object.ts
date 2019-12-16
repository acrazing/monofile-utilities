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
export function property<T>(
  configurable: boolean,
  enumerable: boolean,
  writable: boolean,
  value?: T,
  get?: () => T,
  set?: (value: T) => void,
): TypedPropertyDescriptor<T> {
  return get || set
    ? { configurable, enumerable, get, set }
    : { configurable, enumerable, writable, value };
}

/**
 * display Map, Set for JSON.stringify
 * @param key
 * @param value
 */
export function jsonReplacer(key: string, value: any) {
  if (value instanceof Map) {
    return Array.from(value).reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {} as any);
  }
  if (value instanceof Set) {
    return Array.from(value);
  }
  return value;
}

export function displayType(value: any) {
  let type = Object.prototype.toString.call(value);
  if (type === '[object Object]' && value) {
    try {
      type = `[object ${value.constructor.name}]`;
    } catch {}
  }
  return type;
}
