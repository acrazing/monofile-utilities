/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc storage.ts
 */

export interface StorageOptions {
  maxAge?: number
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
}

export interface Storage {
  get<T> (name: string): T | void;
  get<T> (name: string, defaults: T): T;
  get<T> (name: string, defaults: void | undefined): T | void;
  set (name: string, value: any, opts?: StorageOptions): this;
  remove (name: string): this;
}

export class CookieStorage implements Storage {
  get<T> (name: string, defaults?: T): T | void {
    const key = encodeURIComponent(name);
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${key.replace(/[.*()]/g, '\\$&')}=([^;]*)`),
    );
    const result: any = matches ? decodeURIComponent(matches[1]) : defaults;
    try {
      return JSON.parse(result);
    }
    catch (e) {
      return result;
    }
  }

  set (name: string, value: any, opts: StorageOptions = {}): this {
    typeof value === 'string' || (
      value = JSON.stringify(value)
    );
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    opts.maxAge && (
      cookie += '; Max-Age=' + opts.maxAge
    );
    typeof opts.expires === 'number' && (
      opts.expires =
        new Date(+new Date + <number>opts.expires * 1e3)
    );
    opts.expires instanceof Date && (
      cookie +=
        `; Expires=${(
          <Date>opts.expires
        ).toUTCString()}`
    );
    opts.path && (
      cookie += '; Path=' + opts.path
    );
    opts.domain && (
      cookie += '; Domain=' + opts.domain
    );
    opts.secure && (
      cookie += '; Secure'
    );
    opts.httpOnly && (
      cookie += '; HttpOnly'
    );
    document.cookie = cookie;
    return this;
  }

  remove (name: string): this {
    this.set(name, '', { maxAge: 0 });
    return this;
  }
}

export interface LocalData {
  expires?: number;
  __?: boolean;
  data?: any;
}

export class LocalStorage implements Storage {
  get<T> (name: string, defaults?: T): T | void {
    let result: any = localStorage.getItem(name);
    result === null && (
      result = void 0
    );
    try {
      const data: LocalData = JSON.parse(result);
      if (!data || !data.hasOwnProperty('__')) {
        // could be parse, but not internal value
        // return the value
        return data === void 0 ? defaults : data as any as T;
      }
      if (data.expires && data.expires < +new Date) {
        localStorage.removeItem(name);
        return defaults;
      }
      return data.data;
    }
    catch (e) {
      return result === void 0 ? defaults : result;
    }
  }

  set (name: string, value: any, opts: StorageOptions = {}): this {
    const data: LocalData = {
      __: true,
      data: value,
    };
    opts.expires && (
      data.expires = opts.expires instanceof Date
        ? +opts.expires : (
          +new Date + <number>opts.expires * 1e3
        )
    );
    localStorage.removeItem(name);
    localStorage.setItem(name, JSON.stringify(data));
    return this;
  }

  remove (name: string): this {
    localStorage.removeItem(name);
    return this;
  }
}

export class NoopStorage implements Storage {
  get<T> (_name: string, defaults?: T): T | void {
    return defaults;
  }

  set () {
    return this;
  }

  remove () {
    return this;
  }
}

export const hasLocal = typeof window !== 'undefined'
  && !!window.localStorage
  && !!window.localStorage.getItem
  && !!window.localStorage.setItem
  && !!window.localStorage.removeItem;

const noop: Storage = new NoopStorage();
export const cookie: Storage = new CookieStorage();
export const local: Storage = hasLocal ? new LocalStorage() : noop;
export const storage: Storage = hasLocal ? local : cookie;
