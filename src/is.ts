/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 19:05:19
 */

const falsy = (value: unknown): false => false;

export const isObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null;
export const isArray = (value: unknown): value is any[] =>
  value instanceof Array;
export const isDate = (value: unknown): value is Date => value instanceof Date;
export const isError = (value: unknown): value is Error =>
  value instanceof Error ||
  (isObject(value) && 'name' in value && 'message' in value);

export const isMap =
  typeof Map === 'function'
    ? (value: unknown): value is Map<any, any> => value instanceof Map
    : falsy;

export const isBlob =
  typeof Blob === 'function'
    ? (input: unknown): input is Blob => input instanceof Blob
    : (input: unknown): input is Blob => false;
export const isFile =
  typeof File === 'function'
    ? (input: unknown): input is File => input instanceof File
    : (input: unknown): input is File => false;
export const isBufferSource =
  typeof ArrayBuffer === 'function'
    ? (input: unknown): input is BufferSource =>
        input instanceof ArrayBuffer || ArrayBuffer.isView(input)
    : (input: unknown): input is BufferSource => false;
export const isArrayBufferView =
  typeof ArrayBuffer === 'function'
    ? ArrayBuffer.isView
    : (input: unknown): input is ArrayBufferView => false;
export const isFormData =
  typeof FormData === 'function'
    ? (input: unknown): input is FormData => input instanceof FormData
    : (input: unknown): input is FormData => false;
export const isURLSearchParams =
  typeof URLSearchParams === 'function'
    ? (input: unknown): input is URLSearchParams =>
        input instanceof URLSearchParams
    : (input: unknown): input is URLSearchParams => false;
export const isReadableStream =
  typeof ReadableStream === 'function'
    ? (input: unknown): input is ReadableStream =>
        input instanceof ReadableStream
    : (input: unknown): input is ReadableStream => false;

export const isBodyInit = (input: unknown): input is BodyInit =>
  typeof input === 'string' ||
  isBlob(input) ||
  isBufferSource(input) ||
  isFormData(input) ||
  isURLSearchParams(input) ||
  isReadableStream(input);
