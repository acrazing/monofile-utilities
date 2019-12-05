/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 19:05:19
 */

export const isObject = (value: unknown): value is object =>
  value === Object(value);
export const isArray = (value: unknown): value is any[] =>
  value instanceof Array;
export const isDate = (value: unknown): value is Date => value instanceof Date;

export const isBlob =
  typeof Blob === 'object'
    ? (input: unknown): input is Blob => input instanceof Blob
    : (input: unknown): input is Blob => false;
export const isFile =
  typeof File === 'object'
    ? (input: unknown): input is File => input instanceof File
    : (input: unknown): input is File => false;
export const isBufferSource =
  typeof ArrayBuffer === 'object'
    ? (input: unknown): input is BufferSource =>
        input instanceof ArrayBuffer || ArrayBuffer.isView(input)
    : (input: unknown): input is BufferSource => false;
export const isFormData =
  typeof FormData === 'object'
    ? (input: unknown): input is FormData => input instanceof FormData
    : (input: unknown): input is FormData => false;
export const isURLSearchParams =
  typeof URLSearchParams === 'object'
    ? (input: unknown): input is URLSearchParams =>
        input instanceof URLSearchParams
    : (input: unknown): input is URLSearchParams => false;
export const isReadableStream =
  typeof ReadableStream === 'object'
    ? (input: unknown): input is ReadableStream =>
        input instanceof ReadableStream
    : (input: unknown): input is ReadableStream => false;

export function isBodyInit(input: unknown): input is BodyInit {
  return (
    typeof input === 'string' ||
    isBlob(input) ||
    isBufferSource(input) ||
    isFormData(input) ||
    isURLSearchParams(input) ||
    isReadableStream(input)
  );
}
