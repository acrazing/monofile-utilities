/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 17:38:17
 */

import { noop } from './consts'
import { SMap } from './map'
import { appendQuery } from './query-string'
import { stringifyBodyJSON } from './stringify-body-json'

export interface RequestOptions {
  headers?: SMap<string>;
  dropQuery?: true | false | 'query' | 'body';
  stringifyBody?(input: any): [string, any];
  handleUnexpectedStatus?(xhr: XMLHttpRequest): XhrError
  parseResponseText?(text: string): any
  handleResponseData?(data: any): any
}

export interface XhrBuilderOptions extends RequestOptions {
  host?: string | ((url: string) => string);
}

export type XhrStage = 'init' | 'request' | 'response' | 'parse' | 'process'

function formatUrl(
  url: string,
  dropQuery: RequestOptions['dropQuery'],
): (query: any, body: any) => string {
  if (/{[^}]+}/.test(url)) {
    return (query, body) => {
      return url.replace(/{([^}]+)}/g, (_, $1: string) => {
        const [name, defaults] = $1.split(':')
        if (body && name in body) {
          const value = body[name]
          if (dropQuery === true || dropQuery === 'body') {
            delete body[name]
          }
          return value
        }
        if (query && name in query) {
          const value = query[name]
          if (dropQuery === true || dropQuery === 'query') {
            delete query[name]
          }
          return value
        }
        if (defaults !== void 0) {
          return defaults
        }
        throw new Error(`path parameter "${name}" is required!`)
      })
    }
  }
  return () => url
}

export class XhrError extends Error {
  readonly status: number // http response status, >= response
  readonly code: number // the application error code, >= process
  readonly stage: XhrStage
  readonly message: string
  readonly name: string

  constructor(status = 0, code = 0, stage: XhrStage = 'init', message = '') {
    super(message)
    Object.setPrototypeOf && Object.setPrototypeOf(this, new.target.prototype)
    this.status = status
    this.code = code
    this.stage = stage
    this.message = message
    this.name = 'XMLHttpRequestError'
  }
}

export class XhrBuilder {
  readonly host: (url: string) => string
  readonly config: Required<RequestOptions>

  constructor({
    host,
    headers = {},
    dropQuery = false,
    stringifyBody = stringifyBodyJSON,
    handleUnexpectedStatus = (xhr) => {
      return new XhrError(xhr.status, 0, 'response', 'invalid response status')
    },
    parseResponseText = JSON.parse.bind(JSON),
    handleResponseData = noop,
  }: XhrBuilderOptions) {
    this.host = typeof host === 'function' ? host : (url) => {
      return url.indexOf('http://') === 0 || url.indexOf('https://') === 0
        ? url : `${host}${url}`
    }
    this.config = {
      headers,
      dropQuery,
      stringifyBody,
      handleUnexpectedStatus,
      parseResponseText,
      handleResponseData,
    }
  }

  build<O>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): () => Promise<O>
  build<I, O>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): (input: I) => Promise<O>
  build<I, O, Q>(
    method: string,
    url: string,
    options?: RequestOptions,
  ): (input: I, query: Q) => Promise<O>
  build(method: string, url: string, options: RequestOptions = {}) {
    method = method.toLowerCase()
    const withBody = method === 'post' || method === 'put' || method === 'patch'
    options.headers = options.headers || {}
    const {
      dropQuery,
      handleResponseData,
      parseResponseText,
      handleUnexpectedStatus,
      stringifyBody,
    } = { ...this.config, ...options }
    const headers = { ...this.config.headers, ...options.headers }
    const api = formatUrl(url, dropQuery)
    return (input?: any, query?: any) => {
      return new Promise<any>((resolve, reject) => {
        query = withBody ? query : input
        const body = withBody ? input : void 0
        const xhr = new XMLHttpRequest()
        xhr.open(method, appendQuery(api(query, body), query), true)
        xhr.withCredentials = true
        for (const key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key])
          }
        }
        let bodyData: any = null
        if (withBody && body) {
          let contentType: string
          [contentType, bodyData] = stringifyBody(body)
          xhr.setRequestHeader('Content-Type', contentType)
        }
        xhr.onabort = () => {
          reject(new XhrError(0, 0, 'request', 'aborted'))
        }
        xhr.ontimeout = () => {
          reject(new XhrError(0, 0, 'request', 'timeout'))
        }
        xhr.onerror = (err) => {
          reject(new XhrError(0, 0, 'request', err.message))
        }
        xhr.onload = () => {
          if (xhr.status < 200 || xhr.status > 299) {
            reject(handleUnexpectedStatus(xhr))
            return
          }
          try {
            const raw = parseResponseText(xhr.responseText)
            try {
              const data = handleResponseData(raw)
              resolve(data)
            } catch (e) {
              reject(
                e instanceof XhrError
                  ? e : new XhrError(xhr.status, 0, 'process', e.message),
              )
            }
          } catch (e) {
            reject(
              e instanceof XhrError
                ? e : new XhrError(xhr.status, 0, 'parse', e.message),
            )
          }
        }
        xhr.send(bodyData)
      }).catch((e) => {
        if (e instanceof XhrError) {
          throw e
        } else {
          throw new XhrError(0, 0, 'init', e.message)
        }
      })
    }
  }

  get<O>(url: string, options?: RequestOptions): () => Promise<O>
  get<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>
  get(url: string, options?: RequestOptions) {
    return this.build('get', url, options)
  }

  delete<O>(url: string, options?: RequestOptions): () => Promise<O>
  delete<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>
  delete(url: string, options?: RequestOptions) {
    return this.build('delete', url, options)
  }

  head<O>(url: string, options?: RequestOptions): () => Promise<O>
  head<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>
  head(url: string, options?: RequestOptions) {
    return this.build('head', url, options)
  }

  options<O>(url: string, options?: RequestOptions): () => Promise<O>
  options<I, O>(url: string, options?: RequestOptions): (input: I) => Promise<O>
  options(url: string, options?: RequestOptions) {
    return this.build('options', url, options)
  }

  post<O>(url: string, options?: RequestOptions): () => Promise<O>
  post<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>
  post<B, Q, O>(url: string, options?: RequestOptions): (
    body: B,
    query: Q,
  ) => Promise<O>
  post(url: string, options?: RequestOptions) {
    return this.build('post', url, options)
  }

  put<O>(url: string, options?: RequestOptions): () => Promise<O>
  put<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>
  put<B, Q, O>(url: string, options?: RequestOptions): (
    body: B,
    query: Q,
  ) => Promise<O>
  put(url: string, options?: RequestOptions) {
    return this.build('put', url, options)
  }

  patch<O>(url: string, options?: RequestOptions): () => Promise<O>
  patch<B, O>(url: string, options?: RequestOptions): (body: B) => Promise<O>
  patch<B, Q, O>(url: string, options?: RequestOptions): (
    body: B,
    query: Q,
  ) => Promise<O>
  patch(url: string, options?: RequestOptions) {
    return this.build('patch', url, options)
  }
}
