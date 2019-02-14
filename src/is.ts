/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 19:05:19
 */

export function isUndefined (value: any): value is void {
  return value === undefined;
}

export function isNull (value: any): value is null {
  return value === null;
}

export function isObject (value: any): value is object {
  return value === Object(value);
}

export function isArray (value: any): value is Array<any> {
  return value instanceof Array;
}

export function isDate (value: any): value is Date {
  return value instanceof Date;
}

export function isBlob (value: any): value is Blob {
  return typeof Blob === 'function' && value instanceof Blob;
}

export function isFile (value: any): value is File {
  return typeof File === 'function' && value instanceof File;
}

export function isFormData (value: any): value is FormData {
  return value instanceof FormData;
}

export type IsTypedArray = (value: any) => value is (Int8Array | Int16Array | Int32Array | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Float32Array | Float64Array)

export const isTypedArray: IsTypedArray = (typeof Int8Array === 'function'
  ? (value: any) => {
    return value instanceof Int8Array
      || value instanceof Int16Array
      || value instanceof Int32Array
      || value instanceof Uint8Array
      || value instanceof Uint8ClampedArray
      || value instanceof Uint16Array
      || value instanceof Uint32Array
      || value instanceof Float32Array
      || value instanceof Float64Array;
  } : () => false) as any;
