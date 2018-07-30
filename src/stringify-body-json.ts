/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 18:58:57
 */

export function stringifyBodyJSON(input: any): [string, string] {
  return ['application/json', JSON.stringify(input)]
}
