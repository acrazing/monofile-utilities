/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */
export declare const IP_MAX = '255.255.255.255';
export declare const IP_MIN = '0.0.0.0';
/**
 * ipv4 string to integer
 * @param ip
 * @param defaults
 */
export declare function ip2int(ip: string, defaults?: number): number;
/**
 * integer to ipv4 string
 * @param ipInt
 * @param defaults
 */
export declare function int2ip(ipInt: number, defaults?: string): string;
