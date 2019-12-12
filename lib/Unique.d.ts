/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-18 14:48:28
 */
export declare class Unique {
  readonly pool: Uint32Array;
  readonly pos: Uint32Array;
  readonly minId: number;
  free: number;
  constructor(minId: number, maxId: number);
  rent(): number | null;
  return(id: number): void;
}
