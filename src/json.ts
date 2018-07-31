/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-31 22:59:35
 */

export function evalJSON(content: string): any {
  return eval(`(${content})`)
}
