/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 18:36:37
 */

export type P<T> = T | Promise<T>

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
