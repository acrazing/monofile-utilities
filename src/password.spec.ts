/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-16 11:28:16
 */

import { compare, encrypt } from './password';

describe('password', function() {
  it('should encrypt password', function() {
    const password = 'abc';
    const hash = encrypt(password);
    console.log(
      'password: %s -> hash: %s, length: %d',
      password,
      hash,
      hash.length,
    );
    expect(hash).toMatch(/^[0-9a-z]{12}:sha256:[a-f0-9]{64}$/);
    expect(compare(password, hash)).toBe(true);
    expect(compare(password + password, hash)).toBe(false);
  });
});
