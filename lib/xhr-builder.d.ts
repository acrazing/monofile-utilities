/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 17:38:17
 */
import { SMap } from './map';
export interface RequestOptions {
  headers?: SMap<string>;
  dropQuery?: true | false | 'query' | 'body';
  contentType?: 'application/json' | 'application/x-www-form-urlencoded';
  hijackIE?: boolean;
  handleUnexpectedStatus?(xhr: XMLHttpRequest): XhrError;
  parseResponseText?(text: string, xhr: XMLHttpRequest): any;
  handleResponseData?(data: any): any;
  withCredentials?: boolean;
}
export interface XhrBuilderOptions extends RequestOptions {
  host?: string | ((url: string) => string);
}
export declare type XhrStage =
  | 'init'
  | 'request'
  | 'response'
  | 'parse'
  | 'process';
export declare class XhrError extends Error {
  readonly status: number;
  readonly code: number;
  readonly stage: XhrStage;
  readonly message: string;
  readonly name: string;
  constructor(
    status?: number,
    code?: number,
    stage?: XhrStage,
    message?: string,
  );
}
export declare class XhrBuilder {
  readonly host: (url: string) => string;
  readonly config: Required<RequestOptions>;
  constructor({
    host,
    headers,
    dropQuery,
    contentType,
    hijackIE,
    handleUnexpectedStatus,
    parseResponseText,
    handleResponseData,
    withCredentials,
  }: XhrBuilderOptions);
  build<O>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): () => Promise<O>;
  build<I, O>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): (input: I) => Promise<O>;
  build<I, O, Q>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): (input: I, query: Q) => Promise<O>;
  get<O>(url: string, options?: RequestOptions): () => Promise<O>;
  get<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>;
  delete<O>(url: string, options?: RequestOptions): () => Promise<O>;
  delete<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>;
  head<O>(url: string, options?: RequestOptions): () => Promise<O>;
  head<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>;
  options<O>(url: string, options?: RequestOptions): () => Promise<O>;
  options<I, O>(
    url: string,
    options?: RequestOptions,
  ): (input: I) => Promise<O>;
  post<O>(url: string, options?: RequestOptions): () => Promise<O>;
  post<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>;
  post<B, Q, O>(
    url: string,
    options?: RequestOptions,
  ): (body: B, query: Q) => Promise<O>;
  put<O>(url: string, options?: RequestOptions): () => Promise<O>;
  put<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>;
  put<B, Q, O>(
    url: string,
    options?: RequestOptions,
  ): (body: B, query: Q) => Promise<O>;
  patch<O>(url: string, options?: RequestOptions): () => Promise<O>;
  patch<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>;
  patch<B, Q, O>(
    url: string,
    options?: RequestOptions,
  ): (body: B, query: Q) => Promise<O>;
}
