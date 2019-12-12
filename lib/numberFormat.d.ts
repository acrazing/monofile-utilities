/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-29 14:02:20
 */
/**
 * integer to string
 * @param i
 * @param radix
 * @return {string} always fine
 */
export declare function itos(i: number, radix?: number): string;
/**
 * string to integer
 * @param s
 * @param radix
 * @return {number} finite number if format is correct, else is NaN
 */
export declare function stoi(s: string, radix?: number): number;
/**
 * create an unique id generator
 * @param min
 * @param max
 * @param prefix
 * @param radix
 */
export declare function uid(
  min?: number,
  max?: number,
  prefix?: () => string,
  radix?: number,
): () => string;
