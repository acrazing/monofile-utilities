/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc map.ts
 */
/**
 * any map
 *
 * @deprecated please use Record<keyof any, T>
 */
export interface AMap<T> {
  [key: string]: T;
  [key: number]: T;
}
/**
 * @deprecated please use Record<number, T>
 */
export interface NMap<T> {
  [key: number]: T;
}
/**
 * @deprecated please use Record<string, T>
 */
export interface SMap<T> {
  [key: string]: T;
}
/**
 * @deprecated please use Record<keyof M, T>
 */
export declare type MMap<M, T> = {
  [K in keyof M]: T;
};
/**
 * create a hashed table, optimized for v8 hidden class
 * @param initial
 */
export declare function createMap<T, O = AMap<T>>(initial?: O): O;
/**
 * get typed values of object
 * @param host
 * @param owned
 */
export declare function values<T>(host: T, owned?: boolean): T[keyof T][];
