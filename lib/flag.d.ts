/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-03-27 17:49:03
 */
export interface Flagged {
  flags: number;
}
/**
 * create flagged class fields, see flag.spec.ts
 * @param mask
 */
export declare function flag(
  mask: number,
): <K extends string, P extends Flagged & { [F in K]: boolean }>(
  proto: P & {
    __flag_mask__?: number | undefined;
  },
  key: K,
  desc?: PropertyDescriptor | undefined,
) => any;
