/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:45:06
 * @version 1.0.0
 * @desc formatters.ts
 */

export const F = {
  date: (value: string) => {
    const [year, month, day] = value.split('-').map((item) => +item);
    console.log(year, month, day);
    return +new Date(year, month - 1, day);
  },
};
