/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-18 13:28:42
 */
/**
 * remove item in array, find it first
 * @param input
 * @param item
 * @param replace
 */
export declare function splice<T>(input: T[], item: T, ...replace: T[]): number;
/**
 * get element of array by index, allow out of range [0, array.length)
 * @param input
 * @param index
 */
export declare function seek<T>(input: T[], index: number): T;
