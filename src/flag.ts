/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-27 17:49:03
 */

import { itos } from './numberFormat';

export interface Flagged {
  flags: number;
}

/**
 * create flagged class fields, see flag.spec.ts
 * @param mask
 */
export function flag(mask: number) {
  return <K extends string, P extends Flagged & { [F in K]: boolean }>(
    proto: P & { __flag_mask__?: number },
    key: K,
    desc?: PropertyDescriptor,
  ): any => {
    proto.__flag_mask__ = proto.__flag_mask__ || 0;
    if ((proto.__flag_mask__ & mask) !== 0) {
      throw new Error(`mask ${itos(mask, 2)} is used before set "${key}"`);
    }
    proto.__flag_mask__ |= mask;
    return {
      enumerable: true,
      configurable: true,
      get(this: P) {
        return (this.flags & mask) !== 0;
      },
      set(this: P, value: boolean) {
        if (value) {
          this.flags |= mask;
        } else {
          this.flags &= ~mask;
        }
        desc && desc.set && desc.set.call(this, value);
      },
    } as TypedPropertyDescriptor<boolean>;
  };
}
