/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-29 14:02:20
 */

const bits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
const locs = new Uint8Array(127).fill(0xff);

const p2radix: Record<number, [number, number, number]> = {
  2: [1, 0b1, 0x80000000],
  4: [2, 0b11, 1 << 30],
  8: [3, 0b111, 1 << 30],
  16: [4, 0b1111, 1 << 28],
  32: [5, 0b11111, 1 << 30],
  64: [6, 0b111111, 1 << 30],
};

for (let i = 0; i < bits.length; i++) {
  locs[bits.charCodeAt(i)] = i;
}

let i53tob2ps = (i: number, radix: number) => {
  let o = '';
  const [b, m, s] = p2radix[radix];
  let high = (i / s) | 0;
  let low = i % s;
  while (low !== 0) {
    o = bits.charAt(low & m) + o;
    low >>= b;
  }
  while (high !== 0) {
    o = bits.charAt(high & m) + o;
    high >>= b;
  }
  return o;
};

function i31tob2ps(i: number, radix: number) {
  let o = '';
  const [b, m] = p2radix[radix];
  while (i !== 0) {
    o = bits.charAt(i & m) + o;
    i >>= b;
  }
  return o;
}

/**
 * integer to string
 * @param i
 * @param radix
 * @return {string} always fine
 */
export function itos(i: number, radix = 64) {
  if (i === 0) {
    return '0';
  }
  let prev = '';
  if (i < 0) {
    prev = '-';
    i = -i;
  }
  if (p2radix[radix]) {
    if (i < 0x80000000) {
      return prev + i31tob2ps(i, radix);
    }
    return prev + i53tob2ps(i, radix);
  }
  let o = '';
  while (i !== 0) {
    o = bits.charAt(i % radix) + o;
    i = Math.floor(i / radix);
  }
  return prev + o;
}

const caches: Float64Array[] = [];

for (let i = 2; i < 65; i++) {
  const max = Math.ceil(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(i));
  caches.push(new Float64Array(max));
  for (let j = 0; j < max; j++) {
    caches[i - 2][j] = i ** j;
  }
}

/**
 * string to integer
 * @param s
 * @param radix
 * @return {number} finite number if format is correct, else is NaN
 */
export function stoi(s: string, radix = 64) {
  let o = 0;
  let start = s.length - 1;
  let end = -1;
  if (s.charAt(0) === '-') {
    end = 0;
  }
  const cache = caches[radix - 2];
  for (let i = start; i > end; i--) {
    const p = locs[s.charCodeAt(i)];
    if (p >= radix) {
      return NaN;
    }
    o += cache[start - i] * p;
  }
  return end === 0 ? -o : o;
}

const fn = () => '';

/**
 * create an unique id generator
 * @param min
 * @param max
 * @param prefix
 * @param radix
 */
export function uid(min = 1, max = 64 ** 2 - 1, prefix = fn, radix = 64) {
  let id = min - 1;
  return () => {
    id = id + 1;
    if (id > max) {
      id = min;
    }
    return prefix() + itos(id, radix);
  };
}
