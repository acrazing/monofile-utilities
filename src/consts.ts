/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc consts.ts
 */

export const ANY: any = void 0;

export const NULL = null;

export const T_SECOND = 1000;
export const T_MINUTE = 60000;
export const T_HOUR = 3600000;
export const T_DAY = 86400000;
export const S_SECOND = 1;
export const S_MINUTE = 60;
export const S_HOUR = 3600;
export const S_DAY = 86400;

export const noop = () => void 0;

export const todo = () => {
  throw new TypeError('not implemented');
};

export const UINT32_MAX = 0xffffffff;
export const INT32_MIN = -0x80000000;
export const INT32_MAX = +0x7fffffff;
