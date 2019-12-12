/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:19:26
 */
/**
 * create a hashed password, please note this is faster than bcrypt.
 * @param password
 * @param algorithm
 * @param encoding
 */
export declare function encrypt(
  password: string,
  algorithm?: string,
  encoding?: 'hex' | 'base64',
): string;
/**
 * check input is correct or not
 * @param input
 * @param encrypted
 */
export declare function compare(input: string, encrypted: string): boolean;
