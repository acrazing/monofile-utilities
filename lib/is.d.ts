/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 19:05:19
 */
export declare const isObject: (value: unknown) => value is object;
export declare const isArray: (value: unknown) => value is any[];
export declare const isDate: (value: unknown) => value is Date;
export declare const isError: (value: unknown) => value is Error;
export declare const isMap:
  | ((value: unknown) => false)
  | ((value: unknown) => value is Map<any, any>);
export declare const isBlob: (input: unknown) => input is Blob;
export declare const isFile: (input: unknown) => input is File;
export declare const isBufferSource: (input: unknown) => input is BufferSource;
export declare const isArrayBufferView: (arg: any) => arg is ArrayBufferView;
export declare const isFormData: (input: unknown) => input is FormData;
export declare const isURLSearchParams: (
  input: unknown,
) => input is URLSearchParams;
export declare const isReadableStream: (
  input: unknown,
) => input is ReadableStream<any>;
export declare const isBodyInit: (input: unknown) => input is BodyInit;
