/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:14:45
 * @version 1.0.0
 * @desc append-query.ts
 */

import set from 'lodash/set';
import { NULL } from './consts';

/**
 * parse query object deeply
 * @param query
 */
export function parse<T>(query: string): T {
  if (!query) {
    return {} as any;
  }
  const out: any = {};
  if (!query) {
    return out;
  }
  query.split('&').forEach((item) => {
    const eqPos = item.indexOf('=');
    let name = '';
    let value = '';
    if (eqPos === -1) {
      name = item;
    } else {
      name = item.substring(0, eqPos);
      value = item.substring(eqPos + 1);
    }
    // This will replace a.b.c/a[b][c] to {a: {b: {c: <value>}}}
    set(out, decodeURIComponent(name), decodeURIComponent(value || ''));
  });
  return out;
}

/**
 * serialize a object to query string
 * @param query
 * @param scope
 * @return {string}
 */
export function stringify(query: any = {}, scope = ''): string {
  let key: string;
  let value: any;
  let out = '';
  Object.keys(query).forEach((name) => {
    key = scope ? `${scope}[${name}]` : name;
    value = query[name];
    if (value === NULL) {
      value = '';
    } else if (typeof value === 'function') {
      value = `[Function ${value.name || '(anonymous)'}]`;
    } else if (value === void 0) {
      return;
    }
    value === NULL && (value = '');
    if (typeof value === 'object') {
      out += stringify(value, key);
    } else {
      out += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  });
  return scope ? out : out.substr(1);
}

/**
 * append query to a url
 * @param link
 * @param query
 * @return {string}
 */
export function appendQuery(link: string, query: any) {
  if (query && typeof query !== 'string') {
    query = stringify(query);
  }
  return query ? (link + '&' + query).replace(/[&?]+/, '?') : link;
}
