/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-25 18:28:43
 */

declare module 'egoroof-blowfish' {
  export enum MODE {
    ECB,
    CBC,
  }

  export enum PADDING {
    NULL,
    PKCS5,
    ONE_AND_ZEROS,
    LAST_BYTE,
    SPACES,
  }

  export enum TYPE {
    STRING = 1,
    UINT8_ARRAY = 2,
  }

  export default class Blowfish {
    static readonly MODE: typeof MODE;
    static readonly PADDING: typeof PADDING;
    static readonly TYPE: typeof TYPE;

    constructor(key: string | Uint8Array, mode?: MODE, padding?: PADDING);

    setIv(iv: string | Uint8Array): void;

    encode(data: string | Uint8Array): Uint8Array;

    decode(data: string | Uint8Array, type: TYPE.STRING): string;
    decode(data: string | Uint8Array, type?: TYPE.UINT8_ARRAY): Uint8Array;
  }
}
