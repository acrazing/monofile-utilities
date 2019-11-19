/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:19:26
 */

import { createHash } from 'crypto';

/**
 * create a hashed password, please note this is faster than bcrypt.
 * @param password
 * @param algorithm
 * @param encoding
 */
export function encrypt(
  password: string,
  algorithm = 'sha256',
  encoding: 'hex' | 'base64' = 'hex',
): string {
  const salt = Math.floor(Number.MAX_SAFE_INTEGER * (1 + Math.random()))
    .toString(36)
    .padEnd(12, '0')
    .substr(0, 12);
  return (
    salt +
    ':' +
    algorithm +
    ':' +
    createHash(algorithm)
      .update(salt + '.' + password)
      .digest(encoding)
  );
}

/**
 * check input is correct or not
 * @param input
 * @param encrypted
 */
export function compare(input: string, encrypted: string): boolean {
  if (typeof encrypted !== 'string' || typeof input !== 'string') {
    return false;
  }
  const [, salt, algorithm, digest] =
    encrypted.match(/^([^:]+):([^:]+):(.+)$/) || ([] as string[]);
  if (!salt || !algorithm || !digest) {
    return false;
  }
  const hash = createHash(algorithm)
    .update(salt + '.' + input)
    .digest();
  if (digest.length === hash.byteLength * 2) {
    return digest === hash.toString('hex');
  } else {
    return digest === hash.toString('base64');
  }
}
