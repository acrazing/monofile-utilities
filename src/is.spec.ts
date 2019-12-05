/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-12-05 16:38:39
 */

import * as _is from './is';

const is = _is as Record<string, (value: unknown) => boolean>;

describe('is', () => {
  it('should check as expected', () => {
    const values = {
      Date: () => new Date(),
      Object: () => ({}),
      Array: () => [[]],
      Blob: () => new Blob(),
      File: () => new File([], ''),
      BufferSource: () => [
        new ArrayBuffer(1),
        Uint32Array.of(1),
        new DataView(new ArrayBuffer(1)),
      ],
      ArrayBufferView: () => Uint8Array.of(1),
      FormData: () => new FormData(),
      URLSearchParams: () => new URLSearchParams(),
      ReadableStream: () => new ReadableStream(),
      BodyInit: () => '',
    } as any;
    Object.keys(values).forEach((kind) => {
      let items: any[];
      const method = is['is' + kind];
      try {
        items = values[kind]();
        items = Array.isArray(items) ? items : [items];
      } catch {
        expect([kind, method(global)]).toEqual([kind, false]);
        return;
      }
      items.forEach((item) => {
        expect([kind, item, method(item)]).toEqual([kind, item, true]);
      });
    });
  });
});
