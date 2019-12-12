/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-12-06 22:08:17
 */
export declare function only(value: number, accepts: number[]): boolean;
export declare function gt(value: number, than: number): boolean;
export declare function lt(value: number, than: number): boolean;
export declare function gte(value: number, than: number): boolean;
export declare function lte(value: number, than: number): boolean;
export declare function isInt(
  value: number,
  gte?: number,
  lte?: number,
): boolean;
export declare function isUInt(value: number): boolean;
export declare function isPInt(value: number): boolean;
export declare function isUInt32(value: number): boolean;
export declare function isUInt31(value: number): boolean;
export declare function isInt32(value: number): boolean;
