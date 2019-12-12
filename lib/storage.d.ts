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
  maxAge?: number;
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
}
export interface Storage {
  get<T>(name: string): T | void;
  get<T>(name: string, defaults: T): T;
  get<T>(name: string, defaults: void | undefined): T | void;
  set(name: string, value: any, opts?: StorageOptions): this;
  remove(name: string): this;
}
export declare class CookieStorage implements Storage {
  get<T>(name: string, defaults?: T): T | void;
  set(name: string, value: any, opts?: StorageOptions): this;
  remove(name: string): this;
}
export interface LocalData {
  expires?: number;
  __?: boolean;
  data?: any;
}
export declare class LocalStorage implements Storage {
  get<T>(name: string, defaults?: T): T | void;
  set(name: string, value: any, opts?: StorageOptions): this;
  remove(name: string): this;
}
export declare class NoopStorage implements Storage {
  get<T>(_name: string, defaults?: T): T | void;
  set(): this;
  remove(): this;
}
export declare const hasLocal: boolean;
export declare const cookie: Storage;
export declare const local: Storage;
export declare const storage: Storage;
