/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-09-13 22:24:20
 */

export function url64encode(str: string) {
  return str.replace(/\//g, '-').replace(/\+/g, '_');
}

export function url64decode(str: string) {
  return str.replace(/-/g, '/').replace(/_/g, '+');
}
